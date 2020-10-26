// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   host: "http://192.168.1.135/sm/apim/web/index.php?r=",
//   hostB: "http://192.168.1.135/sm/apiw/web/index.php?r=",
//   hostFile: "http://192.168.1.135/sm/apiw/web/index.php?r=",
//   envType: '本地'
// };

export const environment = {
  production: true,
  host: "http://www.assetin.cn/sm/apim/web/index.php?r=",
  hostB: "http://www.assetin.cn/sm/apiw/web/index.php?r=",
  hostFile: "http://39.100.206.227/fileHandleCN/apiw/web/index.php?r=",
  envType: '测试'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
