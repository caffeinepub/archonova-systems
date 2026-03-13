import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";

actor {
  // Consultation Record Type
  type ConsultationRecord = {
    name : Text;
    company : Text;
    email : Text;
    phone : Text;
    technologyRequirement : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Store consultations in a map with incremental IDs
  let consultations = Map.empty<Nat, ConsultationRecord>();
  var nextId = 0;

  // Submit a new consultation/lead form
  public shared ({ caller }) func submitConsultation(
    name : Text,
    company : Text,
    email : Text,
    phone : Text,
    technologyRequirement : Text,
    message : Text,
  ) : async Nat {
    let id = nextId;
    nextId += 1;

    let record : ConsultationRecord = {
      name;
      company;
      email;
      phone;
      technologyRequirement;
      message;
      timestamp = Time.now();
    };

    consultations.add(id, record);
    id;
  };

  // Retrieve all consultation records (admin use)
  public query ({ caller }) func getAllConsultations() : async [ConsultationRecord] {
    consultations.values().toArray();
  };
};
