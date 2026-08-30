import {
  agarbattiStick,
  attar,
  cafon,
  cotton,
  handGloves,
  karpoor,
  luban,
  roseWater,
  tissuPaper,
  male1,
  male2,
  female1,
  female2,
  soap,
} from "../assets";

export type Gender = "male" | "female";

export type Product = {
  id: string;
  name: string;
  description?: string;
  details?: string;
  maleDetails?: string;
  femaleDetails?: string;
  price?: number;
  category: string;
  gender: Gender;
  image: string;
  images?: string[];
};

export const products: Product[] = [
  {
    id: "0",
    name: "পুরুষ কাফন বক্স",
    details:
      "আলবিদা কোম্পানির বিশেষ পুরুষ কাফন বক্স — জমজম পানি ব্যবহৃত সম্পূর্ণ হালাল প্রসেসে তৈরি।",
    category: "কাফন বক্স",
    gender: "male",
    image: male1,
    images: [male1, male2],
  },
  {
    id: "00",
    name: "মহিলা কাফন বক্স",
    details:
      "আলবিদা কোম্পানির বিশেষ মহিলা কাফন বক্স — জমজম পানি ব্যবহৃত সম্পূর্ণ হালাল প্রসেসে তৈরি।",
    category: "কাফন বক্স",
    gender: "female",
    image: female1,
    images: [female1, female2],
  },
  {
    id: "1",
    name: "আতর",
    details:
      "এটি আলবিদা কোম্পানি নিজস্ব তৈরি করা আতর এখানে কোন প্রকার অ্যালকোহলের ব্যবহার করা হয়নি। সম্পূর্ণ হালাল প্রসেসে কোম্পানি তৈরি করেছেন (ইঃ আঃ)",
    category: "আতর",
    gender: "female",
    image: attar,
  },
  {
    id: "2",
    name: "লুবান",
    details: "এটি আলবিদা কোম্পানির লুবান এটি গুঁড়ো করে রেডি করা আছে।",
    category: "লুবান",
    gender: "male",
    image: luban,
  },
  {
    id: "3",
    name: "ধূপ",
    details:
      "এটি আলবিদা কোম্পানির হালাল প্রসেসে তৈরি করা ধূপকাঠি। এখানে কোন প্রকার গোবর বা অপ্রয়োজনীয় জিনিস ব্যবহার করা হয়নি।",
    category: "ধূপ",
    gender: "female",
    image: agarbattiStick,
  },
  {
    id: "4",
    name: "গোলাপ পানি",
    details:
      "এটি আলবিদা কোম্পানির নিজস্ব গোলাপ পানি, এটি বাইরে আপনি কোথাও পাবেন না। আলবিদা কোম্পানি হালাল প্রসেসে এটিকে রেডি করেছে।",
    category: "গোলাপ পানি",
    gender: "female",
    image: roseWater,
  },
  {
    id: "5",
    name: "তুলো",
    details:
      "আলবীদা কোম্পানি মাইয়েতের গোসলের সময় নাকে এবং কানে ব্যবহারের জন্য তুলো দিয়ে দিয়েছেন।",
    category: "তুলো",
    gender: "male",
    image: cotton,
  },
  {
    id: "6",
    name: "কর্পূর",
    details: "এটি আলবিদা কোম্পানির ভুল করে ব্যবহারের উপযুক্ত করে দিয়েছেন।",
    category: "কর্পূর",
    gender: "male",
    image: karpoor,
  },
  {
    id: "7",
    name: "কাফন কাপড়",
    maleDetails:
      "এটি পুরুষের আলবীদা কোম্পানির জম জম পানি ব্যবহৃত কাফনের কাপড়। এখানে তিনটি কাপড় আছে, একজন প্রাপ্তবয়স্ক পুরুষের সাইজ অনুযায়ী কাটা আছে।",
    femaleDetails:
      "এটি মহিলাদের আলবিদা কোম্পানির জমজম পানি ব্যবহৃত কাফনের কাপড়। এখানে মহিলাদের পাঁচটি কাফনের পিস আছে এবং মহিলাদের মাথার টুপি সাইজ অনুযায়ী কেটে সেলাই করে রেডি করা আছে।",
    category: "কাফন বক্স",
    gender: "female",
    image: cafon,
  },
  {
    id: "8",
    name: "হাত কভার",
    details:
      "আলবিদা কোম্পানি মাইয়েতের গোসলের সুবিদার্থে চার পিস হাত কভার দিয়ে দিয়েছেন।",
    category: "হাত কভার",
    gender: "male",
    image: handGloves,
  },
  {
    id: "9",
    name: "টিসু পেপার",
    details:
      "আলবীদা কোম্পানি মাইয়েতের স্তেঞ্জার জন্য টিসু পেপার দিয়ে দিয়েছেন।",
    category: "টিসু পেপার",
    gender: "female",
    image: tissuPaper,
  },
  {
    id: "10",
    name: "সাবান",
    details:
      "আলবিদা কোম্পানির বিশেষ সাবান — মাইয়েতের গোসলের জন্য হালাল প্রসেসে তৈরি। কোনো চর্বি বা অ্যালকোহল ব্যবহার করা হয়নি।",
    category: "সাবান",
    gender: "male",
    image: soap,
  },
  {
    id: "11",
    name: "সাবান",
    details:
      "আলবিদা কোম্পানির বিশেষ সাবান — মাইয়েতের গোসলের জন্য হালাল প্রসেসে তৈরি। কোনো চর্বি বা অ্যালকোহল ব্যবহার করা হয়নি।",
    category: "সাবান",
    gender: "female",
    image: soap,
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id);
