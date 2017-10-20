/** *************************************
 * @description
 *  this's a module about scroll algorithm
 *  it'll give smoother scroll
 * @author keller <kellerlong@163.com>
 ***************************************/

/**
 * auto scroll class
 * provide:
 * 1 moveStart
 * 2 moveIng
 * 3 moveEnd
 */
const _private = {
	empty() {},
	compatibleFilter(event) {
		event.$point = {};
		if (event.touches) {
			event.$point.x = event.touches[0].clientX;
			event.$point.y = event.touches[0].clientY;
		} else {
			event.$point.x = event.clientX;
			event.$point.y = event.clientY;
		}
		// event.$point.y  += Math.abs( event.currentTarget.offsetTop );
		// event.$point.x  += Math.abs( event.currentTarget.offsetLeft);
		return event;
	},
	/**
   * move
   */
	// moveTop() {
	//   this.goVelocity       = '0s';
	//   this.overflowPoint    = this.overflowPoint || touches[0];
	//   this.moveOverflowDis  = this.getMoveDistance( this.overflowPoint, touches[0]);
	//   this.TopHeight        = `${this.moveOverflowDis / 2}px`;
	// }
	/**
   *  math
   */
	getMoveDistance(start, move) {
		return move.y - start.y;
	},
	getMoveVelocity(startTime, moveTime, distance) {
		return Math.abs(distance / (moveTime - startTime));
	}
};
class AutoScroll {
	/**
   * this constructor
   * @param option                <Object>    this's config about init
   * @param option.speedScroll    <Number>    speed of scroll
   * @param option.speedSubtract  <Number>    speed of subtract
   * @param option.speedTrigger   <Number>    speed of trigger
   * @param option.resilience     <Number>    max resilience height
   * @param option.afterScroll    <Function>  call function after scroll end
   * @param option.afterToTop     <Function>  call function to Top
   * @param option.afterToBottom  <Function>  call function to Bottom
   * @param option.updateTop      <Function>  update about top resilience, must
   * @param option.updateBottom   <Function>  update about bottom resilience, must
   * @param option.updateMove     <Function>  update about move, must
   */
	constructor(option) {
		// default option
		const DEFAULT_OPTION = {
			speedScroll: 50,
			speedSubtract: 0.1,
			speedTrigger: 1,
			resilience: 50,
			afterScroll: _private.empty,
			afterToTop: _private.empty,
			afterToBottom: _private.empty,
			updateTop: _private.empty,
			updateBottom: _private.empty,
			updateMove: _private.empty,
			autoEnd: _private.empty
		};
		this.moveSwitch = false;
		this.option = DEFAULT_OPTION;
		for (let key in option) {
			this.option[key] = option[key] || this.option[key];
		}
	}

	/**
   *
   * @param event
   */
	moveStart(event) {
		let $event = _private.compatibleFilter(event);

		// save point
		this.startPoint = $event.$point;
		// this.startPoint.y     += Math.abs(this.moveScrollTop || 0);
		this.startTime = new Date().getTime();

		this.startScrollTop = parseInt($event.currentTarget.style.top, 10);
		this.moveScrollTop = this.startScrollTop;
		this.moveSwitch = true;
		$event.preventDefault();
		$event.stopPropagation();
	}

	/**
   *
   * @param event
   */
	moveIng(event) {
		if (!this.moveSwitch) {
			return false;
		}
		let $event = _private.compatibleFilter(event);

		let $this = $event.currentTarget;
		this.movePoint = $event.$point;
		// get distance of move
		this.moveDistance =
						_private.getMoveDistance(this.startPoint, this.movePoint);
		// get velocity of move
		this.moveVelocity =
						_private.getMoveVelocity(this.startTime, new Date().getTime(), this.moveDistance);
		// set scroll
		// $this.style.top       = `${this.startScrollTop - this.moveDistance}px`;

		this.moveScrollTop = this.startScrollTop + this.moveDistance;
		this.option.updateMove(`${this.moveScrollTop}px`);
		// update start point
		if (this.moveVelocity < this.scrollVelocity) {
			this.startTime = new Date().getTime();
			this.startTouches = this.moveTouches;
			this.startScrollTop = $this.scrollTop;
		}
		if ($event.$toBottom <= -this.moveScrollTop) {
			this.moveScrollTop = -event.$toBottom;
			this.option.updateMove(`${this.moveScrollTop}px`);
		}
		if ($event.$toTop <= this.moveScrollTop) {
			this.moveScrollTop = $event.$toTop;
			this.option.updateMove(`${this.moveScrollTop}px`);
		}
		return true;
	}

	/**
   *
   * @param event
   */
	moveEnd(event) {
		// let $event            = _private.compatibleFilter(event);
		// init
		// if move velocity max
		//
		this.moveSwitch = false;
		if (this.moveVelocity >= this.option.speedTrigger) {
			// auto scroll
			let $this = this;
			requestAnimationFrame(function() {
				$this.autoScroll($this, event);
			});
			return true;
		}
		this.option.autoEnd(this.moveScrollTop);
		return true;
	}
	/**
   *
   */
	autoScroll($this, event) {
		// scroll over
		if ($this.moveVelocity <= 0) {
			// scroll over
			$this.option.autoEnd($this.moveScrollTop);
			return false;
		}

		let moveScrollTop = $this.moveScrollTop;
		// set scroll
		if ($this.moveDistance > 0) {
			moveScrollTop -= $this.moveVelocity * $this.option.speedScroll;
			$this.option.updateMove(`${moveScrollTop}px`);
		} else {
			moveScrollTop += $this.moveVelocity * $this.option.speedScroll;
			$this.option.updateMove(`${moveScrollTop}px`);
		}
		// update velocity
		$this.moveVelocity -= $this.option.speedSubtract;

		if (moveScrollTop <= 0) {
			// max Top
			// $this.autoScrollOverTop();
		}
		if (event.$toBottom <= -moveScrollTop) {
			// max bottom
			// console.log('到底' );
			// $this.autoScrollOverBottom();
			let bottomHeight = -moveScrollTop - event.$toBottom;
			if (bottomHeight > 50) {
				$this.moveVelocity = 0;
				return 0;
			}
			// $this.option.updateMove( `${-event.$toBottom}px` );
			// $this.option.updateBottom( `${bottomHeight}px` );
			// return 0;
		}
		return requestAnimationFrame(function() {
			$this.autoScroll($this, event);
		});
	}
}

export default AutoScroll;
