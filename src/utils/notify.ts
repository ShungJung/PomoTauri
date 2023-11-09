import { invoke } from "@tauri-apps/api";
import { isPermissionGranted, requestPermission, sendNotification } from "@tauri-apps/api/notification";

async function notify(message: string) {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
    }

    if (permissionGranted) {
        sendNotification(message);
        try {
            await invoke("sing_notification_sound")
        } catch (error) {
            console.log(error)
        }
    }
}

export default notify