import { Metadata } from "next";
import React from "react";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

interface IProps {
  searchParams?: {
    query?: string;
  };
}

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Customers({ searchParams }: IProps) {
  const query = searchParams?.query || "";
  const filteredCustomers = await fetchFilteredCustomers(query);

  return <CustomersTable customers={filteredCustomers} />;
}
