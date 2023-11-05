import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { InvoiceForm } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface IProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Edit invoice",
};

export default async function Page({ params }: IProps) {
  const id = params.id;
  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(id),
  ]);

  if (!invoice) return notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice as InvoiceForm} customers={customers} />
    </main>
  );
}
