import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'Sample Retail', type: 'elasticube' };

interface DimCountriesDimension extends Dimension {
    CountryName: Attribute;
    rank: Attribute;
    Region: Attribute;
    Region_Compare: Attribute;
}
export const DimCountries = createDimension({
    name: 'DimCountries',
    CountryName: createAttribute({
        name: 'CountryName',
        type: 'text-attribute',
        expression: '[DimCountries.CountryName]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    rank: createAttribute({
        name: 'rank',
        type: 'numeric-attribute',
        expression: '[DimCountries.rank]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Region: createAttribute({
        name: 'Region',
        type: 'text-attribute',
        expression: '[DimCountries.Region]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Region_Compare: createAttribute({
        name: 'Region_Compare',
        type: 'text-attribute',
        expression: '[DimCountries.Region_Compare]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as DimCountriesDimension;

interface DimCustomersDimension extends Dimension {
    CustomerID: Attribute;
    StoreID: Attribute;
    TerritoryID: Attribute;
}
export const DimCustomers = createDimension({
    name: 'DimCustomers',
    CustomerID: createAttribute({
        name: 'CustomerID',
        type: 'numeric-attribute',
        expression: '[DimCustomers.CustomerID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    StoreID: createAttribute({
        name: 'StoreID',
        type: 'numeric-attribute',
        expression: '[DimCustomers.StoreID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    TerritoryID: createAttribute({
        name: 'TerritoryID',
        type: 'numeric-attribute',
        expression: '[DimCustomers.TerritoryID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as DimCustomersDimension;

interface DimDateDimension extends Dimension {
    Month_year: Attribute;
    Year: Attribute;
    Date: DateDimension;
    Date_Compare: DateDimension;
}
export const DimDate = createDimension({
    name: 'DimDate',
    Month_year: createAttribute({
        name: 'Month_year',
        type: 'numeric-attribute',
        expression: '[DimDate.Month_year]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Year: createAttribute({
        name: 'Year',
        type: 'numeric-attribute',
        expression: '[DimDate.Year]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Date: createDateDimension({
        name: 'Date',
        expression: '[DimDate.Date (Calendar)]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Date_Compare: createDateDimension({
        name: 'Date_Compare',
        expression: '[DimDate.Date_Compare (Calendar)]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as DimDateDimension;

interface DimEmployeesDimension extends Dimension {
    Employee_Email: Attribute;
    EmployeeID: Attribute;
    EmployeeName: Attribute;
    EmployeeNameNullExample: Attribute;
    TeamID: Attribute;
    TeamManger: Attribute;
}
export const DimEmployees = createDimension({
    name: 'DimEmployees',
    Employee_Email: createAttribute({
        name: 'Employee_Email',
        type: 'text-attribute',
        expression: '[DimEmployees.Employee_Email]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    EmployeeID: createAttribute({
        name: 'EmployeeID',
        type: 'numeric-attribute',
        expression: '[DimEmployees.EmployeeID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    EmployeeName: createAttribute({
        name: 'EmployeeName',
        type: 'text-attribute',
        expression: '[DimEmployees.EmployeeName]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    EmployeeNameNullExample: createAttribute({
        name: 'EmployeeNameNullExample',
        type: 'text-attribute',
        expression: '[DimEmployees.EmployeeNameNullExample]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    TeamID: createAttribute({
        name: 'TeamID',
        type: 'numeric-attribute',
        expression: '[DimEmployees.TeamID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    TeamManger: createAttribute({
        name: 'TeamManger',
        type: 'text-attribute',
        expression: '[DimEmployees.TeamManger]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as DimEmployeesDimension;

interface DimProductsDimension extends Dimension {
    CategoryID: Attribute;
    CategoryName: Attribute;
    CategoryName_Compare: Attribute;
    CategoryNameNullExample: Attribute;
    Color: Attribute;
    Dummy_text: Attribute;
    Price: Attribute;
    ProductName: Attribute;
}
export const DimProducts = createDimension({
    name: 'DimProducts',
    CategoryID: createAttribute({
        name: 'CategoryID',
        type: 'numeric-attribute',
        expression: '[DimProducts.CategoryID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    CategoryName: createAttribute({
        name: 'CategoryName',
        type: 'text-attribute',
        expression: '[DimProducts.CategoryName]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    CategoryName_Compare: createAttribute({
        name: 'CategoryName_Compare',
        type: 'text-attribute',
        expression: '[DimProducts.CategoryName_Compare]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    CategoryNameNullExample: createAttribute({
        name: 'CategoryNameNullExample',
        type: 'text-attribute',
        expression: '[DimProducts.CategoryNameNullExample]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Color: createAttribute({
        name: 'Color',
        type: 'text-attribute',
        expression: '[DimProducts.Color]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Dummy_text: createAttribute({
        name: 'Dummy_text',
        type: 'text-attribute',
        expression: '[DimProducts.Dummy_text]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Price: createAttribute({
        name: 'Price',
        type: 'numeric-attribute',
        expression: '[DimProducts.Price]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    ProductName: createAttribute({
        name: 'ProductName',
        type: 'text-attribute',
        expression: '[DimProducts.ProductName]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as DimProductsDimension;

interface Fact_Purchase_OrdersDimension extends Dimension {
    CountryName: Attribute;
    EmployeeID: Attribute;
    PurchaseCost: Attribute;
    PurchaseDiscount: Attribute;
    PurchaseOrderID: Attribute;
    PurchasePrice: Attribute;
    Region: Attribute;
    StockedQty: Attribute;
    TerritoryID: Attribute;
    VendorName: Attribute;
}
export const Fact_Purchase_Orders = createDimension({
    name: 'Fact_Purchase_Orders',
    CountryName: createAttribute({
        name: 'CountryName',
        type: 'text-attribute',
        expression: '[Fact_Purchase_Orders.CountryName]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    EmployeeID: createAttribute({
        name: 'EmployeeID',
        type: 'numeric-attribute',
        expression: '[Fact_Purchase_Orders.EmployeeID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    PurchaseCost: createAttribute({
        name: 'PurchaseCost',
        type: 'numeric-attribute',
        expression: '[Fact_Purchase_Orders.PurchaseCost]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    PurchaseDiscount: createAttribute({
        name: 'PurchaseDiscount',
        type: 'numeric-attribute',
        expression: '[Fact_Purchase_Orders.PurchaseDiscount]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    PurchaseOrderID: createAttribute({
        name: 'PurchaseOrderID',
        type: 'numeric-attribute',
        expression: '[Fact_Purchase_Orders.PurchaseOrderID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    PurchasePrice: createAttribute({
        name: 'PurchasePrice',
        type: 'numeric-attribute',
        expression: '[Fact_Purchase_Orders.PurchasePrice]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Region: createAttribute({
        name: 'Region',
        type: 'text-attribute',
        expression: '[Fact_Purchase_Orders.Region]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    StockedQty: createAttribute({
        name: 'StockedQty',
        type: 'numeric-attribute',
        expression: '[Fact_Purchase_Orders.StockedQty]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    TerritoryID: createAttribute({
        name: 'Territory ID',
        type: 'numeric-attribute',
        expression: '[Fact_Purchase_Orders.Territory ID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    VendorName: createAttribute({
        name: 'VendorName',
        type: 'text-attribute',
        expression: '[Fact_Purchase_Orders.VendorName]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as Fact_Purchase_OrdersDimension;

interface Fact_Sale_ordersDimension extends Dimension {
    EmployeeID: Attribute;
    Freight: Attribute;
    OnlineOrderFlag: Attribute;
    OrderQty: Attribute;
    OrderRevenue: Attribute;
    Region: Attribute;
    SalesOrderID: Attribute;
    UnitPrice: Attribute;
    UnitPriceDiscount: Attribute;
}
export const Fact_Sale_orders = createDimension({
    name: 'Fact_Sale_orders',
    EmployeeID: createAttribute({
        name: 'EmployeeID',
        type: 'numeric-attribute',
        expression: '[Fact_Sale_orders.EmployeeID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Freight: createAttribute({
        name: 'Freight',
        type: 'numeric-attribute',
        expression: '[Fact_Sale_orders.Freight]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    OnlineOrderFlag: createAttribute({
        name: 'OnlineOrderFlag',
        type: 'text-attribute',
        expression: '[Fact_Sale_orders.OnlineOrderFlag]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    OrderQty: createAttribute({
        name: 'OrderQty',
        type: 'numeric-attribute',
        expression: '[Fact_Sale_orders.OrderQty]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    OrderRevenue: createAttribute({
        name: 'OrderRevenue',
        type: 'numeric-attribute',
        expression: '[Fact_Sale_orders.OrderRevenue]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Region: createAttribute({
        name: 'Region',
        type: 'text-attribute',
        expression: '[Fact_Sale_orders.Region]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    SalesOrderID: createAttribute({
        name: 'SalesOrderID',
        type: 'numeric-attribute',
        expression: '[Fact_Sale_orders.SalesOrderID]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    UnitPrice: createAttribute({
        name: 'UnitPrice',
        type: 'numeric-attribute',
        expression: '[Fact_Sale_orders.UnitPrice]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    UnitPriceDiscount: createAttribute({
        name: 'UnitPriceDiscount',
        type: 'numeric-attribute',
        expression: '[Fact_Sale_orders.UnitPriceDiscount]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as Fact_Sale_ordersDimension;

interface NewCustomTableDimension extends Dimension {
    CountryCode: Attribute;
    CountryName: Attribute;
    rank: Attribute;
    Region: Attribute;
    Region_Compare: Attribute;
}
export const NewCustomTable = createDimension({
    name: 'New Custom Table',
    CountryCode: createAttribute({
        name: 'CountryCode',
        type: 'text-attribute',
        expression: '[New Custom Table.CountryCode]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    CountryName: createAttribute({
        name: 'CountryName',
        type: 'text-attribute',
        expression: '[New Custom Table.CountryName]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    rank: createAttribute({
        name: 'rank',
        type: 'numeric-attribute',
        expression: '[New Custom Table.rank]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Region: createAttribute({
        name: 'Region',
        type: 'text-attribute',
        expression: '[New Custom Table.Region]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
    Region_Compare: createAttribute({
        name: 'Region_Compare',
        type: 'text-attribute',
        expression: '[New Custom Table.Region_Compare]',
        dataSource: { title: 'Sample Retail', live: false },
    }),
}) as NewCustomTableDimension;
