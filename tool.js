const get = (url, params) => {
  return new Promise((resolve,reject)=>{
  	uni.request({
  		url: "http://localhost:8080"+url,
  		method:'get',
  		data: params
  	}).then(res => {
  		if(res[1].data.code == 0) {
  			resolve(res[1].data);
  		} else {
  			reject(res[1].data.msg);
  		}
  	}).catch(err => {
  		reject(err);
  	});
  })
};

const post = (url, params) => {
 return new Promise((resolve,reject)=>{
 	uni.request({
 		url: "http://localhost:8080"+url,
 		method:'get',
 		data: params
 	}).then(res => {
 		if(res[1].data.code == 0) {
 			uni.showToast({
 				title: res[1].data.msg,
 				icon: 'none',
 				// mask: true,
 			});
 			resolve(res[1].data);
 		} else {
 			reject(res[1].data.msg);
 			uni.showToast({
 				title: res[1].data.msg,
 				icon: 'none',
 				// mask: true,
 			});
 		}
 	}).catch(err => {
 		reject(err);
 		uni.showModal({
 			content: err.errMsg,
 			showCancel: false
 		});
 	});
 })
};



export {
  get,
  post
}
