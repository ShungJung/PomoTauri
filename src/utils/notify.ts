import { isPermissionGranted, requestPermission, sendNotification } from "@tauri-apps/api/notification";

async function notify(message: string) {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
    }

    if (permissionGranted) {
        sendNotification(message);
    }
}

export default notify