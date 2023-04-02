function Footer (){


    return (

<footer className="bg-gray-100">
  <div className="container mx-auto py-6 px-4">
    <div className="md:flex md:justify-between md:items-center">
      <div className="mb-6 md:mb-0">
        <h3 className="text-lg font-semibold mb-2">About Us</h3>
        <p className="text-gray-600 leading-relaxed">We are a leading hotel booking platform with a vast network of hotels around the world. Our mission is to provide our customers with the best possible booking experience and to help them find the perfect hotel for their needs.</p>
      </div>
      <div className="md:flex md:flex-wrap md:-mx-4">
        <div className="mb-6 md:mb-0 md:px-4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-600 leading-relaxed">Wilson Business Park<br/>Nairobi, Kenya 🇰🇪<br/>info@yourhotelbookingapp.com<br/>+254799330305</p>
        </div>
        <div className="mb-6 md:mb-0 md:px-4">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li><a href="https://en.wikipedia.org/wiki/FAQ">Terms &amp; Conditions</a></li>
            <li><a href="https://www.worldbank.org/en/about/legal/terms-and-conditions">Privacy Policy</a></li>
            <li><a href="https://en.wikipedia.org/wiki/FAQ">FAQs</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 md:px-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="flex">
            <li><a href="https://www.facebook.com/login/" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook fa-lg"></i></a></li>
            <li className="ml-6"><a href="https://twitter.com/i/flow/login" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter fa-lg"></i></a></li>
            <li className="ml-6"><a href="https://www.instagram.com/_.febias/" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-6 border-t border-gray-300 pt-4">
      <p className="text-sm text-gray-600">© 2023 Your Hotel Booking App. All rights reserved.</p>
    </div>
  </div>
</footer>



    )
}

export default Footer