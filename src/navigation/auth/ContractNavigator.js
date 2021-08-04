import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import UserAgreementScreen from "../../screens/auth/UserAgreementScreen";
import UserDataProtectionPolicyScreen from "../../screens/auth/UserDataProtectionPolicyScreen";
import routes from "../routes";

const Tab = createMaterialTopTabNavigator();

function ContractNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.USERAGREEMENT}
        component={UserAgreementScreen}
        options={{ title: "Kullanıcı Sözleşmesi" }}
      />
      <Tab.Screen
        name={routes.USERDATEPROTECTIONPOLICY}
        component={UserDataProtectionPolicyScreen}
        options={{ title: "Kişisel Verilerin Korunması Politakası" }}
      />
    </Tab.Navigator>
  );
}

export default ContractNavigator;
