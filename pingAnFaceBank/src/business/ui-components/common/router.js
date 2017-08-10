import Vue from 'vue';
import Router from 'vue-router';
import UiSpecification from '../pages/ui-specification';
import UiComponents from '../pages/ui-components';
import UiComponentsFb from '../pages/ui-components-fb';

Vue.use(Router);

export default new Router({
	routes: [
		{path: '/', component: UiSpecification},
		{path: '/ui/specification', component: UiSpecification},
		{path: '/ui/components', component: UiComponents},
		{path: '/ui/components-fb', component: UiComponentsFb}
	]
});
