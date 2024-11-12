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

### Beta v0.7.0 - 12 Nov 2024

SeeDAO App Beta v0.7.0 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:

- Added SBT management tool to support Town Hall member SBT and micro committees
- Added SNS bulk verification governance tool
- Added proposal system to add voted status display on the proposal list
- Contributor level help information
- Added SeeDAO node announcement for the current season.
- Added personal profile search for community members
- Automated distribution of SCR points
- Automated calculation of governance mining

### Beta v0.4.14 - 29 Feb 2024

SeeDAO App Beta v0.4.14 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:

- Proposals
  - Modify the process of selecting a template when creating a proposal
    Refactoring the proposal automation logic to support multiple vote types and automated operations.
  - Refactoring the proposal state transition logic to support a more flexible process.
  - Add SIP display for proposal
  - Add SIP filter to proposal list
  - Add links to proposal voting rules
  - Support filling customized options when creating a proposal
  - Add multiple states for proposals
  - Optimize the style of proposal components
- Project/Guild
  - Refactored project and guild data structure to conform to the new create project/guild and details display.
  - Modified the project/guild creation portal to the Explore page.
  - Removed project closure review from city hall - governance.
  - Added closure feature to guild.
  - Removed the ability for guild moderator to edit guild.
  - Add status tab and category tab to project/guild list.
  - Add search function to project/guild list.
- Adjusted navigation sorting and moved some navigation functions to app list.
- Add Echo in application list.
- Integrate SeeAuth login.
- Add wallet installation guide in login popup dialog.
- Add SNS invitation.
- Update the application import tool to support importing applications with different status.

### Alpha v0.4.13 - 26 Feb 2024

SeeDAO App Alpha v0.4.13 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Fixed the scrolling problem when there is only one comment in the proposal.
- Add common_budget_source when applying for credits
- Add check when filling in the budget of P1/P2 proposal.
- Add the function of uploading pictures to the proposal content
- Remove the function of entering the time limit for the completion of the plan in the proposal component.
- Add SNS invitation function
- Adjust part of the navigation to the application
- Refactor the proposal code and fix stability issues
- Optimize the mechanism of proposal synchronization with OS internal and Metaforo data.

### Alpha v0.4.10 - 8 Feb 2024

SeeDAO App Alpha v0.4.10 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Add a guide to install wallet in the login pop-up window
- Add wait status to submit button when submitting a proposal
- Compatible with Metaforo when new users can't get Metaforo permission when logging in the app.
- Remove the permission that you must be logged in to access the content on mobile.
- Fix the problem that P1 project creation component is missing.
- Fixed the issue that P1 project closure component can't display the project information.
- Fix wrong order of proposal return
- Fix the logic of vote base checking

### Alpha v0.4.9 - 6 Feb 2024

SeeDAO App Alpha v0.4.9 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Modified project/guild creation portal to explore page
- Removed project closure review from Town Hall - Governance
- Added guild closure feature to guilds
- Removed guild leader's ability to edit guilds
- Added status tab to project/guild list
- New create project/guild and details display
- Import project/guild raw data
- Updated template-based proposal creation and voting threshold logic.
- Updated voting status update based on vote base.
- Fixed the issue of proposal status change when there is no vote.

### Alpha v0.4.7 - 4 Feb 2024

SeeDAO App Alpha v0.4.7 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Adjust some styles
- Restore end-of-vote text alerts
- Add SIP display for proposal title
- Add SIP proposal filter in proposal list
- Fix the error of opening links of proposals with other status in the review proposal page.
- Modify the text prompt of the input box in the proposal template does not appear in the text.
- Modify the error message of the proposal component.
- Add a link to the voting rules of the proposal.
- Fix the problem that the avatar of the creator of the proposal is not displayed.
- Remove the template tab for proposals that don't use the template.
- Modify the ordering of components in the project proposal template.
- Fixed the issue that withdrawn proposals automatically go to the next stage in some cases.
- Fix an issue where automated tasks are not triggered properly in some cases.
- Update the rule for same counting result in multi-option voting according to the proposal category.
- Updated rules for counting results when no one is voting
- Fix a timing error in P1 template in some cases.
- Fix the problem that the information of project creation and closure cannot be matched in some cases.

### Alpha v0.4.4 - 30 Jan 2024

SeeDAO App Alpha v0.4.4 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Fixed the problem that the categories and templates were messed up when creating a proposal.
- Fixed a problem that prompts you to log in to metaforo
- Fixed a problem that caused the components to be out of order after creating and editing a proposal.

### Alpha v0.4.3 - 30 Jan 2024

SeeDAO App Alpha v0.4.3 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Modify the categories selected when creating a proposal
- Add a series of proposal templates and redefine the rules for using them.
- Support to create proposals with multiple voting options.
- Add a wait time display after the vote is passed.
- Add template tags to be used in proposal details
- Integrate SeeAuth login

### Beta v0.4.2 - 29 Jan 2024

SeeDAO App Beta v0.4.2 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Addition of the first version of the proposal system
  - Proposals can be created and modified according to different permissions
  - Supports NFT Gate for proposals and NFT Gate for votes.
  - City Council members can review the proposal.
  - The proposal details page can show the details of the proposal
  - Proposals can be voted on and the status of the vote can be viewed
  - Automated execution of voted proposals (partially).
  - Comments and replies can be made in the proposal details
  - View different versions of the proposal
  - You can share the proposal.
  - You can view your personal operation history.
- Replace the wallet connection library to optimize the wallet connection experience
- Replace the link to build a city-state after successful SNS registration.
- Add SeeDAO podcasts to the homepage of the web site.
- Optimize SNS transaction processing on web side.
- Modify the wiki collaboration page on the web side to be private.

### Alpha v0.4.2 - 22 Jan 2024

SeeDAO App Alpha v0.4.2 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

- Added support for creating multi-option polls with percentages
- Updated data model to support multiple voting options and result calculation
- Updated automation task types and trigger conditions
- Added the associated proposal component of the web-based proposal system.
- Added the display of related proposal components on the proposal detail page of cell phone.
- Add "Create New Proposal (Multiple Options)" function to restrict its use to Town Hall members only.
- Modify the wiki collaboration page to be private
- Optimize the error message when registering SNS
- Optimize the proposal function
- Fixed known issues

### Alpha v0.4.1 - 15 Jan 2024

SeeDAO App Alpha v0.4.1 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:

- Replaced the link for successful co-building of city-states through SNS registration.
- Fixed the version missing bug in propsal with multiple edit histories.
- Updated the style of the voting module.
- Updated the display of rejection messages when proposals are rejected multiple times.
- Updated the display and editing of associated proposals in automatically created project/guild detail page.
- Optimized the opening and collapsing of comment input boxes.
- Optimized the display of project/guild lists.
- Fixed some text errors.
- Added proposal widget for uploading file.
- Added styles for proposal widgets in web to be displayed in two columns, three columns, or full screen.
- Added compatibility for proposal widgets on mobile devices.
- Implemetned the proposal system on mobile devices.
- Added automated tasks for reward applications.
- Added loading Metaforo configuration information from the configuration file.
- Fixed permission errors when creating projects.

### Alpha v0.4.0 - 8 Jan 2024

SeeDAO App Alpha v0.4.0 is released. The release note can be viewed at https://docs.seedao.tech/seedao-app/updates

Changelog:

- Add proposal system
- SeeDAO podcast added to homepage
- Optimized wallet connection and SNS trading technology

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
