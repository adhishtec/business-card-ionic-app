# business-card

Prerequisites
Before you begin, make sure you have the following installed on your system:

Node.js and npm
Ionic CLI
Capacitor
Android Studio (for Android development) or Xcode (for iOS development) if you plan to run the app on a mobile device.


- Clone this repository to your local machine:
  git clone https://github.com/adhishtec/business-card.git
- Navigate to the project directory:
  cd business-card
- Install the project dependencies:
  npm install
- To run the app in your web browser for development purposes, use the following command:
  ionic serve

  Running the App on Android Emulator or Device
  To run the app on an Android emulator or device, follow these steps:

- Add Android platform to your project (if not already added):
  ionic capacitor add android
- Build the app for Android:
  ionic build
- Run the app on the Android emulator or device:
  ionic capacitor run android


Running the App on iOS Simulator or Device
To run the app on an iOS simulator or device, follow these steps:

- Add iOS platform to your project (if not already added):
  ionic capacitor add ios
- Build the app for iOS:
  ionic build
- Run the app on the iOS simulator (requires Xcode and a macOS machine):
  ionic capacitor run ios





