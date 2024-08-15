import Form from '@/app/ui/books/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page() {   
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Books', href: '/dashboard/books' },
            {
              label: 'Create book',
              href: '/dashboard/books/create',
              active: true,
            },
          ]}
        />
        <Form/>
      </main>
    );
  }