import Text "mo:core/Text";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type Enquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Text.compare(enquiry1.name, enquiry2.name);
    };
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, email : Text, message : Text) : async () {
    let newEnquiry : Enquiry = {
      name;
      phone;
      email;
      message;
    };
    enquiries.add(newEnquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray().sort();
  };
};
