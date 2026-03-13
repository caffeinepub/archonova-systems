import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ConsultationRecord {
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
    phone: string;
    technologyRequirement: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllConsultations(): Promise<Array<ConsultationRecord>>;
    submitConsultation(name: string, company: string, email: string, phone: string, technologyRequirement: string, message: string): Promise<bigint>;
}
