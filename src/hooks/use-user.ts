import { useMMKVString } from "react-native-mmkv";
import { storage } from "@/lib/mmkvStorage";
import { usePreferences } from "./use-preferences";

export function useUser() {
  const [name, setName] = useMMKVString("userName", storage);
  const [image, setImage] = useMMKVString("userImage", storage);
  const [email, setEmail] = useMMKVString("userEmail", storage);
  const [phone, setPhone] = useMMKVString("userPhone", storage);

  const {
    setNotifyNewsletter,
    setNotifyOffers,
    setNotifyOrderStatus,
    setNotifyPasswordChange,
  } = usePreferences();

  function logout() {
    storage.clearAll();
  }

  function login({ name, email }: { name: string; email: string }) {
    setName(name);
    setEmail(email);

    setNotifyNewsletter("true");
    setNotifyOffers("true");
    setNotifyOrderStatus("true");
    setNotifyPasswordChange("true");
  }

  return {
    user: {
      name,
      image,
      email,
      phone,
      signedIn: !!name?.length && !!email?.length,
    },
    setName,
    setImage,
    setEmail,
    setPhone,
    logout,
    login,
  };
}
