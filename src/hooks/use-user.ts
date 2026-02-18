import { useMMKVString } from "react-native-mmkv";
import { storage } from "../lib/mmkvStorage";

export function useUser() {
  const [name, setName] = useMMKVString("userName", storage);
  const [image, setImage] = useMMKVString("userImage", storage);
  const [email, setEmail] = useMMKVString("userEmail", storage);
  const [phone, setPhone] = useMMKVString("userPhone", storage);

  function logout() {
    storage.clearAll();
  }

  function login({ name, email }: { name: string; email: string }) {
    setName(name);
    setEmail(email);
  }

  return {
    user: {
      name,
      image,
      email,
      phone,
    },
    setName,
    setImage,
    setEmail,
    setPhone,
    logout,
    login,
  };
}
