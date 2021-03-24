import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
		stages: [
			{ target: 100, duration: '30s'},
			{ target: 100, duration: '1m'},
			{ target: 0, duration: '30s'},
		]
};

export default function() {

	group("page_1 - http://localhost:3000/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "http://localhost:3000/",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Cache-Control": "max-age=0",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"sec-ch-ua-mobile": "?0",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"Sec-Fetch-Site": "none",
					"Sec-Fetch-Mode": "navigate",
					"Sec-Fetch-User": "?1",
					"Sec-Fetch-Dest": "document",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"4ec-1785183f2a4\"",
					"If-Modified-Since": "Sat, 20 Mar 2021 21:21:45 GMT"
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/bundle.js",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"If-None-Match": "W/\"1b1e4f-17851a7d2ed\"",
					"If-Modified-Since": "Sat, 20 Mar 2021 22:00:56 GMT",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Sec-Fetch-Dest": "script",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"539-C0U+L40M2ZYsoHJxFuB3zLVMZuY\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/1/styles",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"2ff1-oAyPhKMfyKTHI1i76I6E71clObg\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/1/related",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"9-liMY168TIyaIMsCcF2YOKfZKdv0\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/1",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"131-ZC1MDnTVLoze02Orj3DYwhJyjt8\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/2",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"19a-4IafJzY3yp8q4XUL0Q6/0jjtRaw\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/3",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"14a-8qE5epJrARZapIuCqgw85urpUj8\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/8",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"189-2oqLkCMzeXGsysuFa1zePJk1uNE\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/7",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"16d-Yz76ca4UUi+WgE5b0SkfqbdQHmQ\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/2/styles",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"1f-kLIOnX2JlnQWcMIJ66/YaZzgvgc\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/3/styles",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"2a09-7eStECJ14zqVkyTYyr9u4NJKLng\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/8/styles",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"29e1-XDUxO71O5+kI+ZgiWv3Y+pBOKVA\""
				}
			}
		},{
			"method": "get",
			"url": "http://localhost:3000/products/7/styles",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Accept": "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Referer": "http://localhost:3000/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"137c-E9GMI/dIuj0nwpsT2Sxb0u2KpcY\""
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});
}
