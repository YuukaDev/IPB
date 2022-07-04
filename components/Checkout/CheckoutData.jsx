const CheckoutData = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    address,
    setAddress,
    city,
    setCity,
    cardNum,
    setCardNum,
    cardName,
    setName,
    expDate,
    setExpDate,
    zipCode,
    setZipCode,
  } = props;
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="firstName"
        >
          Full Name
        </label>
        <input
          required
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          required
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="w-full px-3">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="email"
        >
          Email adress
        </label>
        <input
          required
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="email"
          type="text"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="address"
        >
          Adress
        </label>
        <input
          required
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="address"
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="city"
        >
          City
        </label>
        <input
          required
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="city"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="w-full px-3">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="cardNumber"
        >
          Card Number
        </label>
        <input
          required
          maxLength={16}
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="cardNumber"
          type="text"
          placeholder="4242 4242 4242 4242"
          value={cardNum}
          onChange={(e) => setCardNum(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="expirationDate"
        >
          Expiration Date
        </label>
        <input
          required
          maxLength={4}
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="expirationDate"
          type="text"
          placeholder="MM / YY"
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
          htmlFor="zipCode"
        >
          Zip Code
        </label>
        <input
          required
          className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
          id="zipCode"
          type="text"
          placeholder="94107"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CheckoutData;
