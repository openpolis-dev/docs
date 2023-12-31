---
id: updates
title: 💬 Release Updates
sidebar_label: Release Updates
sidebar_position: 1
---

## Release Updates

There are three versions of SeeDAO App.  
The release version provides more stable features for the community to use, and the development team will ensure the availability of data and services.  
The preview version provides the latest features but may be deleted at any time, so you can experience the features in the preview version.  
The development version is for internal use by the development team, for code development and feature verification, and may be deleted at any time.  

Release Version: [https://app.seedao.xyz/](https://app.seedao.xyz/)  
Preview Version: [https://preview.seedao.tech/](https://preview.seedao.tech/)  
Development Version: [https://dev-app.seedao.tech/](https://dev-app.seedao.tech/)  

Notes:
- The current versions only support desktop web version, mobile will be supported in the coming versions.
- You need to click "Allow" when the pop-up window allows notification to receive corresponding notification.
- The datasets in preview version and dev version are subject to change and update at any time.
- The code repo is open source and can be accessed on Github.

### Alpha v0.2.4 - 4 Dec 2023

SeeDAO App Alpha v0.2.4 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:
- Switch to using the Goerli network.
- Support UniPass registration/switching for SNS.
- Optimize login reminders when using the registered SNS feature.
- Add the Profile component.
- Fix the issue where newly registered SNS cannot be read in a timely manner.
- Fix the problem of incomplete content display in the asset distribution record popup.
- Fix the synchronization issue between application package status and application status in certain cases.
- Fix the missing data issue in the application and application package list API.
- Fix the issue on the mobile app where it cannot connect to MetaMask.
- Fix the problem on the mobile app where the successful minting page does not return correctly.
- Fix the issue on the mobile app where the popup is not closed after a successful SNS switching transaction.
- Remove SNS local cache data on the mobile app.

### Alpha v0.2.3 - 1 Dec 2023

SeeDAO App Alpha v0.2.3 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:
- Add SNS registration and switching to use SNS (unipass does not support the current test network)
- Add filtering and searching for vault assets list.
- Add detailed_type query support in application list.
- Return project and guild ID and type fields in the application list.
- Multi-user query interface returns SBT and SEED information.
- Add Prometheus Metrics data interface and service status export.
- Modify the layout of the vault page.
- Enrich the content of points detail popup window.
- Modify the way to remove members from projects/guilds
- Changed the name of the Town Hall member interface to Seasonal Town Hall, and added a link to the governance rules document.
- Show categorization on the Town Hall governance page, and add an entry point for asset issuance.
- Fine-tuned the asset release process to prohibit approval during release.
- Add a detail pop-up window for project closure review
- Modified the UI of the node qualification trial calculation page.
- Modify the UI of the personal profile interface.
- Fix the error of user return in the application list.
- Fix the error of not setting the audit time correctly when the application is rejected.
- Add SNS registration and switching to SNS on mobile terminal (unipass does not support the current test network).


### Alpha v0.2.2 - 24 Nov 2023

SeeDAO App Alpha v0.2.2 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:
- Support mobile version.
- SIP Link check.
- Optimize Treasury page, increase loading speed.
- Update SNS SDK, increase the speed of SNS.
- Update the way to get SEED data, speed up all the data fetching for SEED.
- Update SCR application, add import and export.
- Update Node calculation
- Update timestamp field for all data, supporting multi timezone.

### Alpha v0.2.1 - 17 Nov 2023

SeeDAO App Alpha v0.2.1 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:
- Add cityhall architecture for display.
- Added the function of adjusting cityhall members.
- Added total assets display and application instructions on points registration approval page.
- Optimize the display of project/guild details.
- Fixed a list style problem.
- Expand and collapse buttons in the menu bar are switched according to the status.
- Optimize loading.
- Optimize the display of Seed and SBT in profile.
- Optimize the speed of displaying data in tables.
- Optimize the style of the popup window for reviewing resources and the prompt of login status.
- Modify toast style.
- Optimize the activity page.
- Fix the error of displaying the consumption data of the current quarter on the treasury page.
- Fix an error in the sorting of the audit list of project closure requests.

### Beta v0.2.0 - 15 Nov 2023

After one week of development, SeeDAO App Beta v0.2.0 is released.
The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:
- Add node qualification calculation
- Added Bounty Pub
- Add community resource request list
- Add proposal information display and poll info.
- Add the function to audit the closure of projects.
- Add the function of applying for registration of SCR points.
- Add the function of reviewing SCR points registration information by the city hall.
- Add more filter option to listing AppBundle endpoint
- Add total assets for application form.
- Add SCR, SEED, SBT and social networks to Profile.
- Add application process for projects, unions, incubators, media resources, etc.
- Add function of selecting SeeDAO Node.
- Embed Tally form for applications.
- Add project creating, guild creating, project closing, guild closing, SCR Application etc.
- Replace the UI style of the new version
- Increase the function to audit the closure of guilds
- Update SeeU Network activity display
- Optimize the display of community calendar
- Updated Bounty Tavern to Tavern, optimized display information and UI.
- Adjust loading bar style
- Adjust the member management for projects and guilds.
- Fix change avatar issue.
- Adjust profile page and integrate SeePASS API.
- Adjust the rule of batch application request approval.
- Adjust list of projects/guilds.
- Adjust the detail page for projects/guilds.


### Alpha 0.1.3 - 10 Nov 2023

After one week of development, SeeDAO App Alpha v0.1.3 is released.
The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:
- Add Snapshot for SEED.
- Add function of selecting SeeDAO Node.
- Add poll info.
- Embed Tally form for applications.
- Add project creating, guild creating, project closing, guild closing, SCR Application etc.
- Adjust the member management for projects and guilds.
- Ajust profile page.
- Adjust Loading bar.
- Adjust community calendar.
- Adjust Pub UI.
- Fix change avatar issue.
- Upgrade JoyID to mainnet version.
- Adjust the application template for SCR.
- Add total assets for application form.
- Adjust the rule of batch application request approval.
- Adjust list of projects/guilds.
- Adjust the detail page for projects/guilds.

### Alpha 0.1.2 - 3 Nov 2023

After one week of development, SeeDAO App Alpha v0.1.2 is released.
The version update log can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:
- Replace the UI style of the new version
- Updated Bounty Tavern to Tavern, optimized display information and UI.
- Optimize the display of community calendar
- Add SeeU Network to the community app.
- Update SeeU Network activity display
- Adjust profile and integrate SeePASS API.
- Add SCR, SEED, SBT and social networks to Profile.
- Add application process for projects, unions, incubators, media resources, etc.
- Adjust the content of community exploration, temporarily remove the editing function and closing function of projects and guilds.
- Add the function of applying for registration of SCR points.
- Add the function of reviewing SCR points registration information by the city hall.
- Add the function of creating projects
- Add the function of creating guilds.
- Add the function to audit the closure of projects.
- Increase the function to audit the closure of guilds


### Alpha 0.1.1 - 28 Oct 2023

After four days of development, SeeDAO App Alpha v0.1.1 is released.

Changelog:
- Add community exploration to view current community projects and unions
- Add proposal information display
- Replace part of the UI of the new version
- Add Community Resource Request List
- Added Bounty Pub

### Beta v0.1.0 - 23 Oct 2023

After a few weeks, the SeeDAO App has now completed the development of some of the established features and is now available in an updated version for community use, testing and feedback.

Contents:
- SeeDAO Data Overview
- Offline and community event organizing
- SeeDAO Community Calendar and Calendar Synchronization
- Community Applications
- Community Vault Data Overview
- Community Points Issuance Overview and Detail
- City Hall Management Back Office
- Community brand resource utilization application and management
- Application and management of community conference sharing
- Application and management of community application stationing
- Support multi-wallet login, Metamask, UniPass, JoyID.
- Support the use of SNS - SeeDAO Name Service
- SeeDAO application can be added to desktop
- Push notification to all staff
- Built-in feedback system
