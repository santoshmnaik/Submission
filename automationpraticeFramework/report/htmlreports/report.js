$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("placeOrderandVerify.feature");
formatter.feature({
  "line": 1,
  "name": "Place Order and verify if the order is displayed in Order history",
  "description": "Description : This feature will place the order and verify if the order reference number is displayed in Order History page",
  "id": "place-order-and-verify-if-the-order-is-displayed-in-order-history",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5750212388,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is Logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to Sign in Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Username and Password on Sign in Page",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "someone@example.com",
        "Password123"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is logged in and is on My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "placeOrderandVerify.Given_User_is_on_home_page()"
});
formatter.result({
  "duration": 10409512844,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.When_User_Navigate_to_Sign_in_Page()"
});
formatter.result({
  "duration": 5211502691,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_enters_Username_and_Password_on_Sign_in_Page(DataTable)"
});
formatter.result({
  "duration": 5352121619,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.Then_User_is_logged_in_and_is_on_My_Account_page()"
});
formatter.result({
  "duration": 633792416,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Order T-Shirt and verfiy the Order is displayed in Order History page",
  "description": "",
  "id": "place-order-and-verify-if-the-order-is-displayed-in-order-history;order-t-shirt-and-verfiy-the-order-is-displayed-in-order-history-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User clicks on T-SHIRTS tab",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the first displayed T-shirt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "T-shirt product page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Add to Cart on product page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Product successfully added to your shopping cart message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User clicks on Proceed to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Shopping cart summary page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Proceed to checkout on Summary breadcrumb",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Proceed to checkout on Address breadcrumb",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User agrees to terms and condition on Shipping breadcrumb",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Proceed to checkout on Shipping breadcrumb",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks on Pay by bank wire on payment breadcrumb",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on I confirm my order on Payment breadcrumb",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Order confirmation page along with order reference number is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User clicks on Back to orders link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Order History page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User is able to see the ordered product by verifying the reference number",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User clicks on Sign out",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User is logged out",
  "keyword": "And "
});
formatter.match({
  "location": "placeOrderandVerify.Given_User_clicks_on_TSHIRTS_tab()"
});
formatter.result({
  "duration": 4766045045,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_clicks_on_the_first_displayed_Tshirt()"
});
formatter.result({
  "duration": 8248460798,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.Then_Tshirt_product_page_is_displayedd()"
});
formatter.result({
  "duration": 185521589,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.When_User_clicks_on_Add_to_Cart_on_product_page()"
});
formatter.result({
  "duration": 3310327920,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.Then_Product_successfully_added_to_your_shopping_cart_message_is_displayed()"
});
formatter.result({
  "duration": 940731922,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.When_User_clicks_on_Proceed_to_checkout()"
});
formatter.result({
  "duration": 4700817502,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.Then_Shopping_cart_summary_page_is_displayed()"
});
formatter.result({
  "duration": 218611222,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.When_User_clicks_on_Proceed_to_checkout_on_Summary_breadcrumb()"
});
formatter.result({
  "duration": 4784784189,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_clicks_on_Proceed_to_checkout_on_Address_breadcrumb()"
});
formatter.result({
  "duration": 4492863711,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_agrees_to_terms_and_condition_on_Shipping_breadcrumb()"
});
formatter.result({
  "duration": 3268843064,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_clicks_on_Proceed_to_checkout_on_Shipping_breadcrumb()"
});
formatter.result({
  "duration": 4917698361,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_clicks_on_Pay_by_bank_wire()"
});
formatter.result({
  "duration": 4421770475,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_clicks_on_I_confirm_my_order_on_Payment_breadcrumb()"
});
formatter.result({
  "duration": 4895926766,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.Then_Order_confirmation_page_along_with_order_reference_number_is_displayed()"
});
formatter.result({
  "duration": 871965275,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.When_User_clicks_on_Back_to_orders_link()"
});
formatter.result({
  "duration": 6595713701,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.Then_Order_History_page_is_displayed()"
});
formatter.result({
  "duration": 364088135,
  "status": "passed"
});
formatter.match({
  "location": "placeOrderandVerify.And_User_is_able_to_see_the_ordered_product_by_verifying_the_reference_number()"
});
formatter.result({
  "duration": 372635447,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.When_User_clicks_on_Sign_out()"
});
formatter.result({
  "duration": 4910305247,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.And_User_is_logged_out()"
});
formatter.result({
  "duration": 221333896,
  "status": "passed"
});
formatter.after({
  "duration": 1999037081,
  "status": "passed"
});
formatter.uri("updatePersonalInformation.feature");
formatter.feature({
  "line": 1,
  "name": "Update Personal Information on My Account Page",
  "description": "Description: This feature will test if user is able to update the Personal Information on My Account page",
  "id": "update-personal-information-on-my-account-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Update First Name in Personal Information on My Account Page",
  "description": "",
  "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is logged in and My Account page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on My Personal Information button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User update \"\u003cfirstname\u003e\" with valid allowed name and enter valid \"\u003creenter_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Your personal information has been successfully updated message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Sign out",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is logged out",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "reenter_password"
      ],
      "line": 17,
      "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;;1"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123",
        "changedName",
        "Password123"
      ],
      "line": 18,
      "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;;2"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123",
        "nameChanged",
        "Password123"
      ],
      "line": 19,
      "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;;3"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123",
        "NewName",
        "Password123"
      ],
      "line": 20,
      "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3846160521,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Update First Name in Personal Information on My Account Page",
  "description": "",
  "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is logged in and My Account page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on My Personal Information button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User update \"changedName\" with valid allowed name and enter valid \"Password123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Your personal information has been successfully updated message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Sign out",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is logged out",
  "keyword": "And "
});
formatter.match({
  "location": "updatePersonalInformation.Given_User_navigates_to_home_page()"
});
formatter.result({
  "duration": 10288085595,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.When_User_clicks_on_Sign_in_link()"
});
formatter.result({
  "duration": 5576234172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 39
    }
  ],
  "location": "updatePersonalInformation.And_User_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 5834485120,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.Then_User_is_logged_in_and_My_Account_page_is_displayed()"
});
formatter.result({
  "duration": 605973648,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.When_User_click_on_My_Personal_Information_button()"
});
formatter.result({
  "duration": 4381410892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changedName",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 67
    }
  ],
  "location": "updatePersonalInformation.And_User_update_first_name_with_valid_allowed_name_and_enter_valid_password(String,String)"
});
formatter.result({
  "duration": 711422214,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.And_User_clicks_on_Save()"
});
formatter.result({
  "duration": 3950464688,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.Then_Your_personal_information_has_been_successfully_updated_message_is_displayed()"
});
formatter.result({
  "duration": 630853271,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.When_User_clicks_on_Sign_out()"
});
formatter.result({
  "duration": 4917836921,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.And_User_is_logged_out()"
});
formatter.result({
  "duration": 203303412,
  "status": "passed"
});
formatter.after({
  "duration": 1303047240,
  "status": "passed"
});
formatter.before({
  "duration": 3652575413,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Update First Name in Personal Information on My Account Page",
  "description": "",
  "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is logged in and My Account page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on My Personal Information button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User update \"nameChanged\" with valid allowed name and enter valid \"Password123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Your personal information has been successfully updated message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Sign out",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is logged out",
  "keyword": "And "
});
formatter.match({
  "location": "updatePersonalInformation.Given_User_navigates_to_home_page()"
});
formatter.result({
  "duration": 11427458886,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.When_User_clicks_on_Sign_in_link()"
});
formatter.result({
  "duration": 6390197534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 39
    }
  ],
  "location": "updatePersonalInformation.And_User_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 5144292391,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.Then_User_is_logged_in_and_My_Account_page_is_displayed()"
});
formatter.result({
  "duration": 654932327,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.When_User_click_on_My_Personal_Information_button()"
});
formatter.result({
  "duration": 4301721359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nameChanged",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 67
    }
  ],
  "location": "updatePersonalInformation.And_User_update_first_name_with_valid_allowed_name_and_enter_valid_password(String,String)"
});
formatter.result({
  "duration": 715899045,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.And_User_clicks_on_Save()"
});
formatter.result({
  "duration": 3970350565,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.Then_Your_personal_information_has_been_successfully_updated_message_is_displayed()"
});
formatter.result({
  "duration": 593350256,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.When_User_clicks_on_Sign_out()"
});
formatter.result({
  "duration": 4763607422,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.And_User_is_logged_out()"
});
formatter.result({
  "duration": 188412214,
  "status": "passed"
});
formatter.after({
  "duration": 1284392537,
  "status": "passed"
});
formatter.before({
  "duration": 3805469701,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Update First Name in Personal Information on My Account Page",
  "description": "",
  "id": "update-personal-information-on-my-account-page;update-first-name-in-personal-information-on-my-account-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is logged in and My Account page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on My Personal Information button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User update \"NewName\" with valid allowed name and enter valid \"Password123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Your personal information has been successfully updated message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Sign out",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is logged out",
  "keyword": "And "
});
formatter.match({
  "location": "updatePersonalInformation.Given_User_navigates_to_home_page()"
});
formatter.result({
  "duration": 11500046420,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.When_User_clicks_on_Sign_in_link()"
});
formatter.result({
  "duration": 4991486278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 39
    }
  ],
  "location": "updatePersonalInformation.And_User_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 5290789608,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.Then_User_is_logged_in_and_My_Account_page_is_displayed()"
});
formatter.result({
  "duration": 599342378,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.When_User_click_on_My_Personal_Information_button()"
});
formatter.result({
  "duration": 4529575956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewName",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 63
    }
  ],
  "location": "updatePersonalInformation.And_User_update_first_name_with_valid_allowed_name_and_enter_valid_password(String,String)"
});
formatter.result({
  "duration": 694646698,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.And_User_clicks_on_Save()"
});
formatter.result({
  "duration": 3959378693,
  "status": "passed"
});
formatter.match({
  "location": "updatePersonalInformation.Then_Your_personal_information_has_been_successfully_updated_message_is_displayed()"
});
formatter.result({
  "duration": 677531082,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.When_User_clicks_on_Sign_out()"
});
formatter.result({
  "duration": 4915368505,
  "status": "passed"
});
formatter.match({
  "location": "commonstepDefinitions.And_User_is_logged_out()"
});
formatter.result({
  "duration": 220447487,
  "status": "passed"
});
formatter.after({
  "duration": 1371856340,
  "status": "passed"
});
});