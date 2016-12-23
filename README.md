# Similar Image Searcher

This bookmarklet adds the ability to click on an image on any web page in order to easily search for similar images (via Google). It's useful for when trying to locate additional photos of the same content.

The latest version is `1.0.0`.

![Screenshot](./screenshot.gif)

## What is a Bookmarklet

A bookmarklet is a browser bookmark that runs code. It allows developers to extend browser functionality. Learn more [here](https://en.wikipedia.org/wiki/Bookmarklet).

## Use Case

This bookmarklet can come in handy in the following scenarios:

- You see a photo and want to find others like it (other angles, similar stock photos, etc.).
- You find a photo of a person and would like to find out who they are.

![Screenshot](./screenshot2.gif)

## Current Support

- Image files that exist on a server are fully supported.
- Images that are rendered as bitmap data are not supported.
- Anchor tags with images (as CSS backgrounds) are not supported.

## Install/Use It

Install via [Bookmarklet Installer](http://grafluxe.com/asset/bmk?title=similar-imgs&path=bit.ly%2F2hx1n73).

## How To Use

When on a web page, if you see an image that you would like to find similar images for, do the following:

- Click the bookmarklet (in your bookmarks bar/folder).
  - A new section-bar will be added to the window of current site.
- Click on any image you want to search.
  - The section-bar will update with a thumbnail and a "Search" and "Cancel" button.
  - If the image can't be processed, you'll be notified.
  - Note that on some sites, images may click-through (depending on how the site was developed).

To determine the version you're running, *hover* over the info (i) button. If you're version is outdated, delete your bookmarklet and revisit the [setup](#setup) process.

## License

Copyright (c) 2013-2016 Leandro Silva (http://grafluxe.com)

Released under the MIT License.

See LICENSE.md for entire terms.
