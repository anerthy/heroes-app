import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumb = ({ breadcrumbs, currentPage }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map(({ label, to }) => (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={label}>
                <BreadcrumbLink href={to}>{label}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
