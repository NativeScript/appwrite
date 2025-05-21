import { Application } from '@nativescript/core';

/*
// todo handle oauth
@NativeClass()
@ObjCClass(UISceneDelegate)
class MyUISceneDelegate extends NSObject implements UISceneDelegate {
  sceneOpenURLContexts(scene: UIScene, URLContexts: NSSet<UIOpenURLContext>): void {
    if (URLContexts.count > 0) {
      const first = URLContexts.allObjects.firstObject as UIOpenURLContext;
      if (first && first.URL && first.URL.absoluteString.indexOf('appwrite-callback') > -1) {
        return;
      }

      // handle url
    }
  }
}
  */

Application.run({ moduleName: 'app-root' });
