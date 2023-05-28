// Q: 文字列の長さを "short", "medium", "long" の３種類に判定する関数の返り値の型を定義してください。
// ヒント: literal types と union types を使うと実現できます。
type StringLength = "short" | "medium" | "long";

const getStringLength = (s: string): StringLength => {
  if (s.length === 0) {
    throw new Error("string length is 0");
  } else if (s.length <= 5) {
    return "short";
  } else if (s.length <= 10) {
    return "medium";
  } else {
    return "long";
  }
};

// Q: 配列 `array` と値 `value` を受け取り、配列の中に `value` が含まれるか判定して boolean
//    を返す、 `includes` という関数の型を定義してください。
//    このとき、配列の要素の型は `value` の型と同じであることを型で表現してください。
// ヒント: Generics を使うと実現できます。

// 以下の行を書き換えて型を与えてください。
const includes = <T>(array: T[], value: T): boolean => {
  // 変更箇所はこの上の行まで
  for (const v of array) {
    if (v === value) {
      return true;
    }
  }
  return false;
};

const includesOk1 = includes([1, 2, 3], 4);
const includesOk2: boolean = includes(["a", "b"], "c");
const includesTypeError1: boolean = includes([1, 2, 3], 4);

// Q: パスワードが条件を満たしているか判定し、条件を満たしているときは "ok", 満たしていないときには
//    "missingNumber", "missingSmallLetter", "missingCapitalLetter" を返す関数
//    `checkPasswordRequirement` の型を定義してください。
//    引数はパスワードが入った文字列に加え、設定のオブジェクトを受け取ることもできます。
//    このとき、設定のオブジェクトの型は `PasswordRequirementOption` で定義されています。
type PasswordRequirementOption = {
  requireNumbers?: boolean;
  requireSmallLetters?: boolean;
  requireCapitalLetters?: boolean;
};

type PasswordRequirementResult =
  | "ok"
  | "missingNumber"
  | "missingSmallLetter"
  | "missingCapitalLetter";

const checkPasswordRequirement = (
  password: string,
  option: Partial<PasswordRequirementOption> = {}
): PasswordRequirementResult => {
  const { requireNumbers, requireSmallLetters, requireCapitalLetters } = option;

  for (const key of Object.keys(option)) {
    if (
      !["requireNumbers", "requireSmallLetters", "requireCapitalLetters"].includes(
        key
      )
    ) {
      throw new Error(`Invalid option: ${key}`);
    }
  }

  if (requireNumbers) {
    if (!/\d/.test(password)) {
      return "missingNumber";
    }
  }
  if (requireSmallLetters) {
    if (!/[a-z]/.test(password)) {
      return "missingSmallLetter";
    }
  }
  if (requireCapitalLetters) {
    if (!/[A-Z]/.test(password)) {
      return "missingCapitalLetter";
    }
  }
  return "ok";
};

const checkPasswordRequirementOk1 = checkPasswordRequirement("password");
const checkPasswordRequirementOk4 = checkPasswordRequirement("password123", {
  requireNumbers: true,
  requireSmallLetters: true,
  requireCapitalLetters: true,
});

const checkPasswordRequirementTypeError1: PasswordRequirementResult = 
checkPasswordRequirement("1");
const checkPasswordRequirementTypeError2: PasswordRequirementResult = 
checkPasswordRequirement("password");
const checkPasswordRequirementTypeError3: PasswordRequirementResult = 
checkPasswordRequirement("password", { requireNumbers: undefined });
const { unknownOptions, ...options } = { unknownOptions: false, ...{} };
const checkPasswordRequirementTypeError4: PasswordRequirementResult =
checkPasswordRequirement("password", options);