![banner](img/Server-Phone-Banner.png)

# Node RED PushBell Node

[![NPM](https://img.shields.io/npm/v/node-red-contrib-pushbell)](https://www.npmjs.com/package/node-red-contrib-pushbell)
[![NPM_downloads](https://img.shields.io/npm/dm/node-red-contrib-pushbell)](https://www.npmjs.com/package/node-red-contrib-pushbell)
[![issues](https://img.shields.io/github/issues/mariuslang/node-red-contrib-pushbell)](https://github.com/MariusLang/node-red-contrib-pushbell/issues)

[![NPM](https://nodei.co/npm/node-red-contrib-pushbell.png?compact=true)](https://nodei.co/npm/node-red-contrib-pushbell/)

The Node RED **PushBell** node you can easily create notifications in Node RED and send them to your iPhone.

## Installation

```
npm install node-red-contrib-pushbell
```

## Quick Start

1. Import the following template
2. Change the node configuration, especially the API key
3. Send [this](#node-input) payload to the node's input
4. If everything was successful the [node state](#node-state) should turn to ***sending*** and after a few seconds to
   ***200 Notification successfully created***

## Getting Started

To get started, download the PushBell app from the App Store. After installation, go ahead and create your own PushBell
account.

Then initialize the node-red-contrib-pushbell node with your API key. Therefore, create a configuration node and
initialize it with your API key.

To create notifications send [this](#node-input) payload to the node's input.

## Node Input

```json
{
  "title": "My Notification Title",
  "description": "My Notification Description"
}
```

## Node State

### Green

### Blue

### Red
