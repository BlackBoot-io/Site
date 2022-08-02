<template>
  <v-container fluid class="content-container">
    <v-container>
      <v-row class="content">
        <v-col cols="12" class="text-center">
          <h1 class="title-main dot-yellow">
            <span>Frequently Asked Questions</span>
          </h1>
          <!-- <p class="title-sub">
          </p> -->
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col cols="12" md="6" lg="5">
          <template v-for="i in 2">
            <BaseFAQ :title="faqs[i-1].name" :items="faqs[i-1].questions" :key="i" />
          </template>
        </v-col>
        <v-col cols="12" md="6" lg="5 offset-lg-2">
          <template v-for="i in 3">
            <BaseFAQ v-if="i > 1" :title="faqs[i].name" :items="faqs[i].questions" :key="i" />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'FAQ',
  data: () => ({
    faqs: [
     {
      name: "The Basics",
      questions: [
        {
          question: "Is it true you can trade 24/7?",
          answer: "Yes, you can place an order at 11 a.m. Sunday or any other day and time. Many cryptocurrencies trade 24 hours a day, seven days a week."
        },
        {
          question: "What is a crypto wallet?",
          answer: "Simply put, crypto wallets are places to store digital assets more securely than just on an exchange. You can establish an online or “hot” wallet that is internet connected—to your desktop, table or mobile phone."
        },
        {
          question: "I have U.S. dollars — how do I purchase token?",
          answer: "There are a couple of methods, but the simplest and least expensive is via an online cryptocurrency exchange. You establish an account and from there, you transfer in cash and purchase the cryptocurrency of your choice. The exchange will allow you to buy cryptocurrency like Tether or Bitcoin or Ethereum. After that you can buy our token from this URL:"
        },
        {
          question: "I hear cryptocurrencies are used for illicit/illegal activities; is this true?",
          answer: "Since cryptocurrency operates on a decentralized network that lacks a central authority, it is possible to exchange cryptocurrency without registering an identity. Yes, since the start there have been criminal activities with cryptocurrencies. However, the blockchain publicly records every transaction, and while names are not assigned to addresses, you can trace activity back to a crypto exchange, which knows the end user. The estimates vary for how many transactions are for illegal activities and proponents of cryptocurrency point to illegal activity with traditional currencies. (Source: NY Times article Jan 2020)"
        },
        {
          question: "Help me with the lingo — crypto, coins, tokens, ICOs.",
          answer: "Here’s a brief glossary - Crypto: umbrella term for all digital and/or virtual currencies. Coins: Generally, any cryptocurrency that has its own separate blockchain. Tokens: Generally, any cryptocurrency that is built on top of existing blockchain, e.g., some companies issue their own cryptocurrencies, called tokens, which can be used to purchase goods or services specifically from issuing company. ICO: Short for Initial Coin Offering, this is analogous to a privately held company going public via an initial public offering (IPO)—a way to raise funds for a new cryptocurrency or expand services for existing coins."
        },
      ]
     },
     {
      name: "Manage your NFTs and soul bound tokens",
      questions: [
        {
          question: "Are blockchain and cryptocurrencies the same?",
          answer: "No. Blockchain is the technology that allows for cryptocurrencies to work. It is a decentralized and digital ledger of transactions used for cryptocurrencies and other assets/functions. It is important to separate the technology behind cryptocurrencies from the actual cryptocurrencies."
        },
        {
          question: "Can I transfer my token to other wallets?",
          answer: "Yes, you can transfer tokens to other wallets."
        },
        {
          question: "Why do I have to wait for confirmation?",
          answer: "There is a delay before the network begins to confirm your transaction by including it in a block. A confirmation means that there is a consensus on the network that the token you received haven't been sent to anyone else and are considered your property. Once your transaction has been included in one block, it will continue to be buried under every block after it."
        },
      ]
     },
     {
      name: "Using Avanod",
      questions: [
        {
          question: "What is AVN Token?",
          answer: "AVN is the core utility token of the Avanod platform. The token is structured as a deflationary supply token facilitated by Buyback & LP."
        },
        {
          question: "What is Metamask and Trustwallet?",
          answer: "MetaMask is a cryptocurrency software wallet. It allows users to access their wallets through a browser extension (Chrome) or mobile app, which can then be used to interact with decentralized applications. Similarly, Trust Wallet is a decentralised wallet that encrypts the keys to your cryptocurrency wallet. It is a user-controlled wallet, with the user having the sole access to their funds. You can use these wallets to make the payments on the Avanod Token sales platform and to receive the AVN tokens."
        },
        {
          question: "When Will I Receive my AVN Token?",
          answer: "Token Sales investors will get their purchased AVN Tokens directly in their Wallets after the conclusion of the Token Sales on 5th Sep 2023. However, soon after the Token purchase the bought AVN Tokens will be displayed in your User Account."
        },
      ]
     },
     {
      name: "Security & Privacy",
      questions: [
        {
          question: "Why my password and email is not working?",
          answer: "After registration an email is sent on your registered Email ID for verifying your email. Kindly verify your email before logging in. In case, you did not get the email, please check your spam folder. Alternatively write to us at info@avanod.io and share your email, we will send it again. If your account is still not accessible, please try to reset your password."
        }
      ]
     },
    ],
  }),
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";


</style>