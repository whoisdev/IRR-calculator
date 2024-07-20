import { UniversalActivity } from "snaptrade-typescript-sdk";

const transactions: UniversalActivity[] = [
  {
    id: "2205929a-c7ff-486c-9426-336d96172dd4",
    symbol: {
      description: "Realty Income Corp.",
      id: "871612b0-a5ec-4361-820f-f3407b8ee86f",
      symbol: "O",
      raw_symbol: "O",
      currency: {
        code: "USD",
        name: "US Dollar",
        id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
      },
      exchange: {
        id: "ebd63029-461e-4bed-bd4a-d0595f880b52",
        code: "NYSE",
        mic_code: "XNYS",
        name: "New York Stock Exchange",
        suffix: null,
        timezone: "America/New_York",
        start_time: "09:30:00",
        close_time: "16:00:00",
      },
      logo_url:
        "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/O.png",
      type: {
        id: "515c27d1-8471-4dec-a234-af12184c51d4",
        code: "cs",
        description: "Common Stock",
        is_supported: true,
      },
      figi_code: "BBG000DHPPZ6",
      figi_instrument: {
        figi_code: "BBG000DHPPZ6",
        figi_share_class: "BBG001S884K0",
      },
    },
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "US Dollar",
      id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
    },
    type: "BUY",
    description: "REALTY INCOME CORP WE ACTED AS AGENT",
    amount: -57.91,
    price: 52.9599,
    units: 1,
    fee: -4.95,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-06-20T05:00:00Z",
    trade_date: "2024-06-18T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "26bab459-1533-453d-a8ca-e4fc634a1b57",
    symbol: {
      description: "Schwab Strategic Trust - Schwab US Dividend Equity ETF",
      id: "7cc49f03-3901-43f6-8d00-11018209d4a7",
      symbol: "SCHD",
      raw_symbol: "SCHD",
      currency: {
        code: "USD",
        name: "US Dollar",
        id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
      },
      exchange: {
        id: "9f3ea556-15c5-4321-8983-ad4033ff802b",
        code: "ARCA",
        mic_code: "ARCX",
        name: "NYSE Arca",
        suffix: null,
        timezone: "America/New_York",
        start_time: "09:30:00",
        close_time: "16:00:00",
      },
      logo_url:
        "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/SCHD.png",
      type: {
        id: "8057ceb7-e073-4c77-8635-a1c9bc6442cb",
        code: "et",
        description: "ETF",
        is_supported: true,
      },
      figi_code: "BBG0025RWL17",
      figi_instrument: {
        figi_code: "BBG0025RWL17",
        figi_share_class: "BBG0025RWLM4",
      },
    },
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "US Dollar",
      id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
    },
    type: "SELL",
    description: "SCHWAB STRATEGIC TR US DIVIDEND EQUITY ETF WE ACTED AS AGENT",
    amount: 72.62,
    price: 77.5801,
    units: -1,
    fee: -4.96,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-06-20T05:00:00Z",
    trade_date: "2024-06-18T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "e1c410ea-e54e-435b-a68d-53b6561e7ea6",
    symbol: undefined,
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "US Dollar",
      id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
    },
    type: "DIVIDEND",
    description: "REALTY INCOME CORP DIST ON 1 SHS REC 07/01/24 PAY 07/15/24",
    amount: 0.26,
    price: 0.26,
    units: 0,
    fee: 0,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-07-15T05:00:00Z",
    trade_date: "2024-07-15T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "e18b91d7-e0c7-4119-b59a-dfc024a25d94",
    symbol: undefined,
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "US Dollar",
      id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
    },
    type: "DIVIDEND",
    description:
      "REALTY INCOME CORP NON-RES TAX WITHHELD REC 07/01/24 PAY 07/15/24",
    amount: -0.03,
    price: 15,
    units: 0,
    fee: 0,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-07-15T05:00:00Z",
    trade_date: "2024-07-15T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "0840dde4-49d0-4bd7-99de-c68d3c91540f",
    symbol: undefined,
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "US Dollar",
      id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
    },
    type: "DIVIDEND",
    description:
      "SCHWAB STRATEGIC TR US DIVIDEND EQUITY ETF CASH DIV ON 1 SHS REC 06/26/24 PAY 07/01/24 NON-RES TAX WITHHELD",
    amount: 0.7,
    price: 0,
    units: 0,
    fee: 0,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-07-01T05:00:00Z",
    trade_date: "2024-07-01T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "55165349-9a78-446e-b1e3-80cb9721d707",
    symbol: {
      description: "Schwab Strategic Trust - Schwab US Dividend Equity ETF",
      id: "7cc49f03-3901-43f6-8d00-11018209d4a7",
      symbol: "SCHD",
      raw_symbol: "SCHD",
      currency: {
        code: "USD",
        name: "US Dollar",
        id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
      },
      exchange: {
        id: "9f3ea556-15c5-4321-8983-ad4033ff802b",
        code: "ARCA",
        mic_code: "ARCX",
        name: "NYSE Arca",
        suffix: null,
        timezone: "America/New_York",
        start_time: "09:30:00",
        close_time: "16:00:00",
      },
      logo_url:
        "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/SCHD.png",
      type: {
        id: "8057ceb7-e073-4c77-8635-a1c9bc6442cb",
        code: "et",
        description: "ETF",
        is_supported: true,
      },
      figi_code: "BBG0025RWL17",
      figi_instrument: {
        figi_code: "BBG0025RWL17",
        figi_share_class: "BBG0025RWLM4",
      },
    },
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "US Dollar",
      id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
    },
    type: "BUY",
    description: "SCHWAB STRATEGIC TR US DIVIDEND EQUITY ETF WE ACTED AS AGENT",
    amount: -156.22,
    price: 78.1099,
    units: 2,
    fee: 0,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-06-07T05:00:00Z",
    trade_date: "2024-06-06T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "eab2458c-2d09-4e36-bf7b-8c39ce8b901c",
    symbol: undefined,
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "Canadian Dollar",
      id: "f184bfe7-dd89-4abe-9095-6767bfaec387",
    },
    type: "CONTRIBUTION",
    description: "CONT 5324203511",
    amount: 156.22,
    price: 0,
    units: 0,
    fee: 0,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-06-05T05:00:00Z",
    trade_date: "2024-06-05T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "acbd8b32-c900-4eba-8c47-29dd1e21e3fb",
    symbol: undefined,
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "CAD",
      name: "Canadian Dollar",
      id: "f184bfe7-dd89-4abe-9095-6767bfaec387",
    },
    type: "FX CONVERSION",
    description: "CONVERSION - CAD/USD",
    amount: -216.83,
    price: 0,
    units: 0,
    fee: 0,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-06-06T05:00:00Z",
    trade_date: "2024-06-06T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
  {
    id: "e3f19909-d9ef-4c33-8c79-fc9e6fbbca9b",
    symbol: undefined,
    option_symbol: undefined,
    account: {
      id: "bb2eb4b1-52bb-497b-b0e2-9a9241d11849",
      number: "1e0d8937-9d1e-4322-07b7-036112976b31",
      name: "Individual TFSA",
      sync_status: {
        holdings: {
          last_successful_sync: "2024-07-17 12:22:26.573815+00:00",
          initial_sync_completed: true,
        },
        transactions: {
          last_successful_sync: "2024-07-16",
          first_transaction_date: "2024-06-05",
          initial_sync_completed: true,
        },
      },
    },
    currency: {
      code: "USD",
      name: "US Dollar",
      id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
    },
    type: "FX CONVERSION",
    description: "CONVERSION - CAD/USD",
    amount: 156.22,
    price: 0,
    units: 0,
    fee: 0,
    fx_rate: null,
    external_reference_id: null,
    settlement_date: "2024-06-06T05:00:00Z",
    trade_date: "2024-06-06T05:00:00Z",
    institution: "questrade",
    option_type: "",
  },
];

export default transactions;