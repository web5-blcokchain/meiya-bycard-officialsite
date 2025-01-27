<template>
  <div flex="~ col" gap-10>
    <div flex="~ lt-md:col-reverse" mx-a max-w-5xl w-full gap-10 px-4>
      <div space-y-4>
        <div text="11 lt-md:6 center" font-semibold>
          Redefining Online Transactions
        </div>
        <div text="5 lt-md:4 center #666">
          Discover the unparalleled features that make ByCard the go-to platform for secure,
          convenient, and efficient online transactions. With our virtual credit cards,
          you can seamlessly shop, subscribe, and transact online,
          all with just a few clicks.
        </div>
      </div>
      <div hidden lt-md:block text="#666 center">
        About US
      </div>
    </div>

    <div flex="~ lt-md:col" gap="7.5" mx-a max-w-7xl w-full items-center px-4>
      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/credit-card.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/credit-card-active.png" size-11>
        </div>
        <div text-6>
          Virtual Credit Cards
        </div>
        <div>
          Say goodbye to the limitations of physical credit cards.
        </div>
      </div>

      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/security.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/security-active.png" size-11>
        </div>
        <div text-6>
          Cutting-Edge Security
        </div>
        <div>
          We employ state-of-the-art encryption and security protocols
          to ensure your financial data is protected at all times.
        </div>
      </div>

      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/coin.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/coin-active.png" size-11>
        </div>
        <div text-6>
          Transparent Fee Structure
        </div>
        <div>
          It maintains a straightforward fee structure,
          ensuring you always know what to expect, with no surprises.
        </div>
      </div>

      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/friendly.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/friendly-active.png" size-11>
        </div>
        <div text-6>
          User-Friendly Interface
        </div>
        <div>
          Our platform boasts an intuitive, user-friendly interface,
          designed for both beginners and experienced users.
        </div>
      </div>
    </div>
  </div>
</template>
