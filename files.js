1.Write a blog on Difference between HTTP1.1 vs HTTP2:
HTTP/1.1 vs. HTTP/2: Evolution of Web Protocols
HTTP/1.1
HTTP/1.1 has been the backbone of the World Wide Web for many years. It operates on a request-response model where each request from the client establishes a new connection to the server. This connection is closed once the response is received. Consequently, if a web page requires multiple resources (such as images, stylesheets, or scripts), multiple connections are required, leading to inefficiency due to overheads like latency and resource contention.

HTTP/2
HTTP/2, a significant improvement over its predecessor, aims to address the limitations of HTTP/1.1. One of its primary features is multiplexing, which allows multiple requests and responses to be sent and received on the same connection simultaneously. This reduces latency and optimizes resource utilization. Additionally, HTTP/2 introduces header compression, server push, and prioritization mechanisms, further enhancing performance and efficiency.

In essence, while HTTP/1.1 operates on a single request-response per connection model, HTTP/2 enables multiplexing, header compression, and other optimizations to improve speed and efficiency, making it more suitable for modern web applications.
2.Write a blog about objects and its internal representation in Javascript
codekata practice:
Exploring JavaScript Objects
JavaScript, often hailed as the language of the web, boasts a powerful and flexible object-oriented programming model. In JavaScript, objects are fundamental entities, representing a collection of key-value pairs.

Internal Representation
Internally, JavaScript objects are typically implemented using hash tables or similar data structures. Each property of an object is stored as a key-value pair within this hash table, allowing for efficient access and manipulation. Moreover, JavaScript objects can be dynamically modified, meaning properties can be added, updated, or deleted at runtime, providing flexibility and versatility.
  // Creating a JavaScript object
let person = {
    name: "John",
    age: 30,
    profession: "Developer"
};

// Accessing properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Adding a new property
person.location = "New York";
console.log(person.location); // Output: New York

// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31

// Deleting a property
delete person.profession;
console.log(person); // Output: { name: "John", age: 31, location: "New York" }
3.Read about IP address, port, HTTP methods, MAC address:
Understanding Web Essentials in JavaScript
IP Address
In JavaScript, you can interact with IP addresses using various APIs, such as the window.location object or third-party libraries like ip. IP addresses are crucial for networking tasks, such as identifying clients and servers in a networked environment.

Port
Ports are endpoints used in networking to facilitate communication between a client and a server. In JavaScript, you can specify ports when making network requests using methods like fetch or XMLHttpRequest.

HTTP Methods
HTTP methods, such as GET, POST, PUT, and DELETE, dictate the type of operation to be performed on a resource. In JavaScript, you can utilize these methods when making AJAX requests or interacting with web APIs.

MAC Address
MAC (Media Access Control) addresses are unique identifiers assigned to network interfaces. Unlike IP addresses, accessing MAC addresses directly from JavaScript is typically not possible due to security and privacy restrictions imposed by web browsers.

Conclusion
In this blog, we've explored the disparities between HTTP/1.1 and HTTP/2 protocols, delved into the intricacies of JavaScript objects and their internal representations, and touched upon essential web concepts like IP addresses, ports, HTTP methods, and MAC addresses. By understanding these fundamentals, developers can wield the power of web technologies more effectively, enabling them to build robust and efficient web applications.
