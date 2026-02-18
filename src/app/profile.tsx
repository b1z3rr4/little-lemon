import { useHeaderHeight } from "@react-navigation/elements";
import { Checkbox } from "expo-checkbox";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "expo-router";
import { useCallback, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";
import { AvatarPlaceholder } from "../components/avatar-placeholder";
import { Field } from "../components/field";
import { useUser } from "../hooks/use-user";
import { mmkvStorage } from "../lib/mmkvStorage";

export default function Profile() {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();

  const {
    user: {
      email: defaultEmail,
      image: defatulImage,
      name: defaultName,
      phone: defaultPhone,
    },
    setEmail: saveEmail,
    setName: saveName,
    setImage: saveProfile,
    setPhone: savePhone,
  } = useUser();

  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState(defaultPhone);
  const [profile, setProfile] = useState(defatulImage);

  const [notifyOrderStatus, setNotifyOrderStatus] = useState(true);
  const [notifyPasswordChange, setNotifyPasswordChange] = useState(true);
  const [notifyOffers, setNotifyOffers] = useState(true);
  const [notifyNewsletter, setNotifyNewsletter] = useState(true);

  const hasProfileImage = !!profile?.length;

  const handleSave = useCallback(() => {
    navigation.setOptions({ headerRight: undefined });

    saveEmail(email);
    saveName(name);
    saveProfile(profile);
    savePhone(phone);
  }, [
    navigation,
    name,
    email,
    profile,
    phone,
    savePhone,
    saveEmail,
    saveName,
    saveProfile,
  ]);

  const handlePickImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.7,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setProfile(uri);
    }
  }, []);

  const notifItems = [
    {
      label: "Status dos pedidos",
      value: notifyOrderStatus,
      setter: setNotifyOrderStatus,
    },
    {
      label: "Mudancas de senha",
      value: notifyPasswordChange,
      setter: setNotifyPasswordChange,
    },
    {
      label: "Ofertas especiais",
      value: notifyOffers,
      setter: setNotifyOffers,
    },
    {
      label: "Newsletter",
      value: notifyNewsletter,
      setter: setNotifyNewsletter,
    },
  ];

  return (
    <Container safeArea={headerHeight === 0}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarSection}>
          {hasProfileImage ? (
            <Image
              style={styles.avatar}
              source={{ uri: profile }}
            />
          ) : (
            <AvatarPlaceholder name={name ?? ""} />
          )}
          <Pressable
            style={styles.changePhotoButton}
            onPress={handlePickImage}
          >
            <Text style={styles.changePhotoText}>Alterar foto</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Field
            label="Nome"
            value={name ?? ""}
            onChangeText={setName}
            placeholder="João Silva"
          />
          <View style={styles.divider} />
          <Field
            label="Email"
            value={email ?? ""}
            onChangeText={setEmail}
            placeholder="joao@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.divider} />
          <Field
            label="Telefone"
            value={phone ?? ""}
            onChangeText={setPhone}
            placeholder="+55 00 00000-0000"
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.sectionTitle}>Notificacoes por email</Text>
        <View style={styles.card}>
          {notifItems.map(({ label, value, setter }, index) => (
            <View key={label}>
              <Pressable
                style={styles.checkboxRow}
                onPress={() => setter(!value)}
              >
                <Checkbox
                  value={value}
                  onValueChange={setter}
                  style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>{label}</Text>
              </Pressable>
              {index < notifItems.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.saveButton,
            pressed && styles.saveButtonPressed,
          ]}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Salvar alterações</Text>
        </Pressable>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    padding: 16,
    gap: 20,
    flexGrow: 1,
  },
  avatarSection: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    objectFit: "cover",
  },
  avatarPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: {
    color: theme.colors.primaryForeground,
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 1,
  },
  changePhotoButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  changePhotoText: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: "500",
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: "hidden",
    backgroundColor: theme.colors.card,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginHorizontal: 14,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  checkbox: {
    borderRadius: 4,
  },
  checkboxLabel: {
    color: theme.colors.foreground,
    fontSize: 15,
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  saveButtonPressed: {
    opacity: 0.7,
  },
  saveButtonText: {
    color: theme.colors.primaryForeground,
    fontSize: 15,
    fontWeight: "600",
  },
  headerSaveButton: {
    paddingHorizontal: 4,
  },
  headerSaveText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    color: theme.colors.foreground,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.8,
    opacity: 0.45,
    textTransform: "uppercase",
    paddingHorizontal: 4,
    marginTop: 8,
    marginBottom: 2,
  },
}));
