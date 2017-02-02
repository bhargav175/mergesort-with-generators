'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _toConsumableArray2=require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);exports.default=mergesort;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function combine(arr1,arr2){var i=0,j=0;var res=[];while(i<arr1.length||j<arr2.length){if(i<arr1.length&&j<arr2.length){if(arr1[i]<=arr2[j]){res.push(arr1[i]);i++;break}else{res.push(arr2[j]);j++;break}}else{if(i==arr1.length){res.push.apply(res,(0,_toConsumableArray3.default)(arr2.slice(j)));j=arr2.length;break}else{res.push.apply(res,(0,_toConsumableArray3.default)(arr1.slice(i)));i=arr1.length;break}}}return res}function _mergesort(arr,startIndex,endIndex){console.log('mergesort',startIndex,endIndex);if(endIndex-startIndex<0){return[]}if(startIndex==endIndex){return[arr[startIndex]]}else if(endIndex-startIndex==1){if(arr[startIndex]<=arr[endIndex]){return[arr[startIndex],arr[endIndex]]}else{return[arr[endIndex],arr[startIndex]]}}else{var diff=endIndex-startIndex;var mid=void 0;if(diff%2==0){mid=(endIndex+startIndex)/2}else{mid=Math.floor((endIndex+startIndex)/2)}var a1=_mergesort(arr,startIndex,mid);var a2=_mergesort(arr,mid+1,endIndex);return combine(a1,a2)}}function mergesort(arr){if(!Array.isArray(arr)){throw new TypeError('expected array')}return _mergesort(arr,0,arr.length-1)}module.exports=exports['default'];