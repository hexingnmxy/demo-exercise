upstream {
	server　127.0.0.1:3006
}

server {
	listen 80;
	server_name ice.zhenjinke.com;
}

location /{
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
	proxy_set_header Host $http_host;
	proxy_set_header X-Nginx-Proxy true;

	proxy_pass http://ice;
	proxy_redirect off;
}