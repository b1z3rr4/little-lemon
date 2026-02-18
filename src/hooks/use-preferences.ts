import { useMMKVString } from "react-native-mmkv";
import { storage } from "../lib/mmkvStorage";

export function usePreferences() {
  const [notifyOrderStatus, setNotifyOrderStatus] = useMMKVString(
    "configOrderStatus",
    storage
  );
  const [notifyPasswordChange, setNotifyPasswordChange] = useMMKVString(
    "configPasswordChange",
    storage
  );
  const [notifyOffers, setNotifyOffers] = useMMKVString(
    "configOffers",
    storage
  );
  const [notifyNewsletter, setNotifyNewsletter] = useMMKVString(
    "configNewsletter",
    storage
  );

  return {
    notifyOffers,
    notifyNewsletter,
    notifyOrderStatus,
    notifyPasswordChange,
    setNotifyOffers,
    setNotifyNewsletter,
    setNotifyOrderStatus,
    setNotifyPasswordChange,
  };
}
