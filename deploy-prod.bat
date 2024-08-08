@echo off
echo Deploying to Production Environment
xcopy /s /e /y /i C:\Users\sreenivasrao\Desktop\1\my-webapp\build C:\Users\sreenivasrao\Desktop\1\my-webapp\deploy\prod
echo Deployment to Production Environment Complete
