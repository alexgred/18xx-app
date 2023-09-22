interface CompanyItem {
  id: number;
  name: string;
}

interface Company extends CompanyItem {
  total: number;
  director?: number;
}
