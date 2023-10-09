

# Keleya Pregnancy App

Application emulating simple onboarding process

## Features
- All screens are implemented
- Email/Password/Name fields validation
- Date input validation
- Screenshot E2E test is implemented for the home screen on Android using Detox
- Translation for EN/DE depending on the phone language
- API mocks and loading functionality


## To run app
1. Make sure you are in the project's main directory
2. Run ```yarn``` to install dependencies
3. For iOS run: `yarn ios`
4.  For Android run: `yarn android`
5. You also can run the project using Expo GO.  For this just run `yarn start`
6. To execute screenshot e2e test run: ```yarn e2e:android```. For the e2e test please make sure you have the required device simulator/emulator installed.
7. You can also execute e2e test for iOS ```yarn e2e:ios```. There is no screenshot test for iOS, just test the appropriate element is shown.

## Final thoughts

 -  The screenshot test for iOS is not implemented as there is an issue with running `xcrun simctl status_bar ...` on iOS versions > 15. Further debugging would take more time and installing later emulators so decided to skip it due to the timeline. We need to use `simctl` to make sure we always have static StatusBar
 - The app is using Expo as the most convenient way to test/deliver small apps. I get access to native code with `expo prebuild` command as I do with Detox. Nowadays it convenient way to start an app as we can do any native stuff if we need. Besides that, I utilized EAS build and integrated Detox text into the build pipeline
 - Regarding the implementation of Onboarding I had thoughts about implementing it with ViewPager with some animation and swipe. Still, I decided to stick to Stack Navigator as the screens provided look like separate screens.
 - One image provided didn't include a blur effect for the transition so I used LinearGradient.
 - Also I included some API mocks and loading functionality for buttons to emulate network requests

## Small demo


https://github.com/tikhonNikita/keleya-pregnancy-app/assets/29158136/f3b2e376-60e8-4c7f-9e18-cdc938bf029c

