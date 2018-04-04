/**
 * localStorage 和 sessionStorage 接口
 * 注意，只能作浅拷贝存储数据，如遇数据引用，麻烦先在 callbefore() 中作深拷贝并返回
 * @file xStorage.js
 * @author Yangholmes 2017-10-18
 */

export default {
    lStorage: {
        setData(key, data, callbefore) {
            if (!key) {
                return false;
            }
            data = callbefore ? callbefore(data) : data;
            localStorage.setItem(key, JSON.stringify(data));
            // --------------本地传播时间
            // let setItemEvent = new Event('localStorage');
            // setItemEvent.newValue = JSON.stringify(data);
            // window.dispatchEvent(setItemEvent);
            // --------------本地传播时间
            return true;
        },

        getData(key, callback) {
            if (!key) {
                return false;
            }
            let data = JSON.parse(localStorage.getItem(key));
            callback && callback(data);
            return data;
        },

        removeData(key, callback) {
            if (!key) {
                return false;
            }
            localStorage.removeItem(key);
            callback && callback();
        }
    },

    sStorage: {
        setData(key, data, callbefore) {
            if (!key) {
                return false;
            }
            data = callbefore ? callbefore(data) : data;
            sessionStorage.setItem(key, JSON.stringify(data));
            return true;
        },

        getData(key, callback) {
            if (!key) {
                return false;
            }
            let data = JSON.parse(sessionStorage.getItem(key));
            callback && callback(data);
            return data;
        },

        removeData(key, callback) {
            if (!key) {
                return false;
            }
            sessionStorage.removeItem(key);
            callback && callback();
        }
    }

};
