# @boilertown/react-ui-boilerplate

## 0.12.2

### Patch Changes

- Fix withoutCloseButton prop not working in updateNotification

  - Removed redundant prop assignments in updateNotification function
  - Fixed prop precedence by placing spread operator after required props
  - withoutCloseButton now works correctly when updating notifications

## 0.12.1

### Patch Changes

- Fix crash in updateNotification function

  - Fixed incorrect toastProps.toastProps.closeToast access that was causing runtime errors
  - Changed to use toastProps.closeToast directly in updateNotification function
  - Resolves crash when using the new dynamic toast update functionality

## 0.12.0

### Minor Changes

- Add dynamic toast update functionality to Notification component

  - Added `updateNotification` function to support dynamically changing toast content
  - Modified `showNotification` to return toast ID for updates
  - Added `UpdateNotificationProps` interface for type safety
  - Supports updating title, description, variant, and all toast options
  - Enables use cases like loading states that transform to success/error notifications

### Patch Changes

- update notification

## 0.0.1

### Patch Changes

- 93e5422: First release ever!
