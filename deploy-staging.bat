@echo off
echo Deploying to Staging Environment
xcopy /s /e /y /i C:\Users\sreenivasrao\Desktop\1\my-webapp\build C:\Users\sreenivasrao\Desktop\1\my-webapp\deploy\staging
echo Deployment to Staging Environment Complete
