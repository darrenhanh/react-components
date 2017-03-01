/**
 * Created by darren on 2017/2/28 0028.
 */
import Promise from 'promise';
import 'jquery';
import 'whatwg-fetch';

const $ = window.$;

const ajaxService = function () {

};

const fetchService = function (url,param) {
    const body='data='+JSON.stringify(param);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
};

export default function service() {

};