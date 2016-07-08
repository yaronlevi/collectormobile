package com.collectormobile;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import io.realm.react.RealmReactPackage;

import java.util.Arrays;
import java.util.List;

//---- Added as part of facebook login sdk   
import android.os.Bundle;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;  
//---------

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = new CallbackManager.Factory().create();

  @Override
  public void onCreate() {
    FacebookSdk.sdkInitialize(this);
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {

      mCallbackManager = new CallbackManager.Factory().create();
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RealmReactPackage(),
            new VectorIconsPackage(),
            new FBSDKPackage(mCallbackManager)
        );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }

  public static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }
}
