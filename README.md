*📸 ApiFlash Screenshot App*

Submitted by: **Tarina Muna**

This web app: **is a simple React app that lets users capture high-quality website screenshots using the ApiFlash API. Users can enter a website URL and customize parameters like width and height. The app displays the screenshot immediately and keeps a history of all previously captured images.**

Time spent: **1.5** hours spent in total

## Required Features

The following **required** functionality is completed: 
- [x] Allow the user to add at least three parameters to a query to the ApiFlash API
- [x] Display the screenshot returned by the ApiFlash call on the page
- [x] On a separate part of the page, display all the images the user has queried thus far

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='/assets/Untitled.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with keynote 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Loading screenshots correctly was tricky due to caching and invalid URLs. Adding a timestamp to the image URL and validating user input helped fix display issues. Debugging also involved testing API links directly in the browser.

## License

    Copyright [2025] [Tarina Muna]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
