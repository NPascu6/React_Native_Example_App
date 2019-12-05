SETTING UP EMVIROMENT:
 
 WINDOWS ---- ANDROID 
 
 
 --INSTALL CHOCHO package manager from: https://chocolatey.org/;
 --RUN FOLLOWING COMMAND: choco install -y nodejs.install python2 jdk8; //WILL INSTALL NECCESARY PACKAGES AND SET SYSTEM VARIABLES
 --DOWNLOAD AND INSTALL ANDROID STUDIO: https://developer.android.com/studio/index.html
 
 --ANDROID STUDIO SDK MANAGER => Appearance & Behavior → System Settings → Android SDK.
 ==> LOOK FOR AND INSTALL: Android SDK Platform 28
                           Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
                           

 --Configure the ANDROID_HOME environment variable:
 
Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK.

the SDK is installed, by default, at the following location: c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
 
 
-- INSTALL GIT BASH

OPEN COMMAND PROMPT:
TYPE FOLLOWING COMMAND: git clone https://github.com/NPascu6/React_Native_App_V2.git

--RUN A NEW ANDROID EMULATED DEVICE FROM AVD MANAGER

!-- If ERRORS --!
--OPEN TERMINAL IN PROJECT DIRECTORY:
RUN npm install
RUN npm install -g react-native
RUN npm install redux


If you get weird regex error:
--Copy contents of nodeFix into node_modules/metro-config/src/defaults/backlist.js and overwrite what is there allready :D
 
 # React_Native_App_V2
