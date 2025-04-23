
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Interview
 * 
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>
/**
 * Model InterviewParticipant
 * 
 */
export type InterviewParticipant = $Result.DefaultSelection<Prisma.$InterviewParticipantPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model RatingItem
 * 
 */
export type RatingItem = $Result.DefaultSelection<Prisma.$RatingItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  INTERVIEWER: 'INTERVIEWER',
  INTERVIEWEE: 'INTERVIEWEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ExperienceIn: {
  MONTHS: 'MONTHS',
  YEARS: 'YEARS'
};

export type ExperienceIn = (typeof ExperienceIn)[keyof typeof ExperienceIn]


export const InterviewType: {
  TECHNICAL: 'TECHNICAL',
  BEHAVIORAL: 'BEHAVIORAL',
  TECHNICAL_AND_BEHAVIORAL: 'TECHNICAL_AND_BEHAVIORAL',
  SYSTEM_DESIGN: 'SYSTEM_DESIGN',
  HR: 'HR',
  PROBLEM_SOLVING: 'PROBLEM_SOLVING'
};

export type InterviewType = (typeof InterviewType)[keyof typeof InterviewType]


export const InterviewDifficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type InterviewDifficulty = (typeof InterviewDifficulty)[keyof typeof InterviewDifficulty]


export const Status: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const InterviewStatus: {
  PENDING: 'PENDING',
  CREATED: 'CREATED',
  EXPIRED: 'EXPIRED'
};

export type InterviewStatus = (typeof InterviewStatus)[keyof typeof InterviewStatus]


export const Group: {
  MANUAL: 'MANUAL',
  AI_BASED: 'AI_BASED'
};

export type Group = (typeof Group)[keyof typeof Group]


export const AssessmentType: {
  MCQ_BASED: 'MCQ_BASED',
  VOICE_BASED: 'VOICE_BASED'
};

export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType]


export const InterviewCategory: {
  JOB: 'JOB',
  MOCK: 'MOCK'
};

export type InterviewCategory = (typeof InterviewCategory)[keyof typeof InterviewCategory]


export const CreatedByRole: {
  INTERVIEWER: 'INTERVIEWER',
  INTERVIEWEE: 'INTERVIEWEE'
};

export type CreatedByRole = (typeof CreatedByRole)[keyof typeof CreatedByRole]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ExperienceIn = $Enums.ExperienceIn

export const ExperienceIn: typeof $Enums.ExperienceIn

export type InterviewType = $Enums.InterviewType

export const InterviewType: typeof $Enums.InterviewType

export type InterviewDifficulty = $Enums.InterviewDifficulty

export const InterviewDifficulty: typeof $Enums.InterviewDifficulty

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type InterviewStatus = $Enums.InterviewStatus

export const InterviewStatus: typeof $Enums.InterviewStatus

export type Group = $Enums.Group

export const Group: typeof $Enums.Group

export type AssessmentType = $Enums.AssessmentType

export const AssessmentType: typeof $Enums.AssessmentType

export type InterviewCategory = $Enums.InterviewCategory

export const InterviewCategory: typeof $Enums.InterviewCategory

export type CreatedByRole = $Enums.CreatedByRole

export const CreatedByRole: typeof $Enums.CreatedByRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewParticipant`: Exposes CRUD operations for the **InterviewParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewParticipants
    * const interviewParticipants = await prisma.interviewParticipant.findMany()
    * ```
    */
  get interviewParticipant(): Prisma.InterviewParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratingItem`: Exposes CRUD operations for the **RatingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatingItems
    * const ratingItems = await prisma.ratingItem.findMany()
    * ```
    */
  get ratingItem(): Prisma.RatingItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Interview: 'Interview',
    InterviewParticipant: 'InterviewParticipant',
    Question: 'Question',
    Feedback: 'Feedback',
    RatingItem: 'RatingItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "interview" | "interviewParticipant" | "question" | "feedback" | "ratingItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Interview: {
        payload: Prisma.$InterviewPayload<ExtArgs>
        fields: Prisma.InterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findFirst: {
            args: Prisma.InterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findMany: {
            args: Prisma.InterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          create: {
            args: Prisma.InterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          createMany: {
            args: Prisma.InterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          delete: {
            args: Prisma.InterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          update: {
            args: Prisma.InterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          deleteMany: {
            args: Prisma.InterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          upsert: {
            args: Prisma.InterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterview>
          }
          groupBy: {
            args: Prisma.InterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number
          }
        }
      }
      InterviewParticipant: {
        payload: Prisma.$InterviewParticipantPayload<ExtArgs>
        fields: Prisma.InterviewParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>
          }
          findFirst: {
            args: Prisma.InterviewParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>
          }
          findMany: {
            args: Prisma.InterviewParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>[]
          }
          create: {
            args: Prisma.InterviewParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>
          }
          createMany: {
            args: Prisma.InterviewParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>[]
          }
          delete: {
            args: Prisma.InterviewParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>
          }
          update: {
            args: Prisma.InterviewParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>
          }
          deleteMany: {
            args: Prisma.InterviewParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>[]
          }
          upsert: {
            args: Prisma.InterviewParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewParticipantPayload>
          }
          aggregate: {
            args: Prisma.InterviewParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewParticipant>
          }
          groupBy: {
            args: Prisma.InterviewParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewParticipantCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      RatingItem: {
        payload: Prisma.$RatingItemPayload<ExtArgs>
        fields: Prisma.RatingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>
          }
          findFirst: {
            args: Prisma.RatingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>
          }
          findMany: {
            args: Prisma.RatingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>[]
          }
          create: {
            args: Prisma.RatingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>
          }
          createMany: {
            args: Prisma.RatingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>[]
          }
          delete: {
            args: Prisma.RatingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>
          }
          update: {
            args: Prisma.RatingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>
          }
          deleteMany: {
            args: Prisma.RatingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>[]
          }
          upsert: {
            args: Prisma.RatingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingItemPayload>
          }
          aggregate: {
            args: Prisma.RatingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatingItem>
          }
          groupBy: {
            args: Prisma.RatingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingItemCountArgs<ExtArgs>
            result: $Utils.Optional<RatingItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    interview?: InterviewOmit
    interviewParticipant?: InterviewParticipantOmit
    question?: QuestionOmit
    feedback?: FeedbackOmit
    ratingItem?: RatingItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdInterviews: number
    participatedInterviews: number
    feedbacks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdInterviews?: boolean | UserCountOutputTypeCountCreatedInterviewsArgs
    participatedInterviews?: boolean | UserCountOutputTypeCountParticipatedInterviewsArgs
    feedbacks?: boolean | UserCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipatedInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type InterviewCountOutputType
   */

  export type InterviewCountOutputType = {
    questions: number
    participants: number
    feedbacks: number
  }

  export type InterviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | InterviewCountOutputTypeCountQuestionsArgs
    participants?: boolean | InterviewCountOutputTypeCountParticipantsArgs
    feedbacks?: boolean | InterviewCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewCountOutputType
     */
    select?: InterviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewParticipantWhereInput
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type InterviewParticipantCountOutputType
   */

  export type InterviewParticipantCountOutputType = {
    feedbacks: number
  }

  export type InterviewParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | InterviewParticipantCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * InterviewParticipantCountOutputType without action
   */
  export type InterviewParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipantCountOutputType
     */
    select?: InterviewParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewParticipantCountOutputType without action
   */
  export type InterviewParticipantCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type FeedbackCountOutputType
   */

  export type FeedbackCountOutputType = {
    rating: number
  }

  export type FeedbackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rating?: boolean | FeedbackCountOutputTypeCountRatingArgs
  }

  // Custom InputTypes
  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCountOutputType
     */
    select?: FeedbackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    experience: number | null
    coins: number | null
  }

  export type UserSumAggregateOutputType = {
    experience: number | null
    coins: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    companyName: string | null
    position: string | null
    mobile: string | null
    experience: number | null
    experienceIn: $Enums.ExperienceIn | null
    bio: string | null
    linkedIn: string | null
    gitHub: string | null
    location: string | null
    resume: string | null
    coins: number | null
    verified: boolean | null
    verifiedAt: Date | null
    lastLogin: Date | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    companyName: string | null
    position: string | null
    mobile: string | null
    experience: number | null
    experienceIn: $Enums.ExperienceIn | null
    bio: string | null
    linkedIn: string | null
    gitHub: string | null
    location: string | null
    resume: string | null
    coins: number | null
    verified: boolean | null
    verifiedAt: Date | null
    lastLogin: Date | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    companyName: number
    position: number
    mobile: number
    experience: number
    experienceIn: number
    bio: number
    linkedIn: number
    gitHub: number
    location: number
    resume: number
    coins: number
    verified: number
    verifiedAt: number
    lastLogin: number
    verificationToken: number
    verificationTokenExpiresAt: number
    resetPasswordToken: number
    resetPasswordTokenExpiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    experience?: true
    coins?: true
  }

  export type UserSumAggregateInputType = {
    experience?: true
    coins?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    companyName?: true
    position?: true
    mobile?: true
    experience?: true
    experienceIn?: true
    bio?: true
    linkedIn?: true
    gitHub?: true
    location?: true
    resume?: true
    coins?: true
    verified?: true
    verifiedAt?: true
    lastLogin?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    companyName?: true
    position?: true
    mobile?: true
    experience?: true
    experienceIn?: true
    bio?: true
    linkedIn?: true
    gitHub?: true
    location?: true
    resume?: true
    coins?: true
    verified?: true
    verifiedAt?: true
    lastLogin?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    companyName?: true
    position?: true
    mobile?: true
    experience?: true
    experienceIn?: true
    bio?: true
    linkedIn?: true
    gitHub?: true
    location?: true
    resume?: true
    coins?: true
    verified?: true
    verifiedAt?: true
    lastLogin?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    email: string
    password: string | null
    role: $Enums.Role | null
    companyName: string | null
    position: string | null
    mobile: string | null
    experience: number
    experienceIn: $Enums.ExperienceIn | null
    bio: string | null
    linkedIn: string | null
    gitHub: string | null
    location: string | null
    resume: string | null
    coins: number
    verified: boolean
    verifiedAt: Date | null
    lastLogin: Date | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyName?: boolean
    position?: boolean
    mobile?: boolean
    experience?: boolean
    experienceIn?: boolean
    bio?: boolean
    linkedIn?: boolean
    gitHub?: boolean
    location?: boolean
    resume?: boolean
    coins?: boolean
    verified?: boolean
    verifiedAt?: boolean
    lastLogin?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdInterviews?: boolean | User$createdInterviewsArgs<ExtArgs>
    participatedInterviews?: boolean | User$participatedInterviewsArgs<ExtArgs>
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyName?: boolean
    position?: boolean
    mobile?: boolean
    experience?: boolean
    experienceIn?: boolean
    bio?: boolean
    linkedIn?: boolean
    gitHub?: boolean
    location?: boolean
    resume?: boolean
    coins?: boolean
    verified?: boolean
    verifiedAt?: boolean
    lastLogin?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyName?: boolean
    position?: boolean
    mobile?: boolean
    experience?: boolean
    experienceIn?: boolean
    bio?: boolean
    linkedIn?: boolean
    gitHub?: boolean
    location?: boolean
    resume?: boolean
    coins?: boolean
    verified?: boolean
    verifiedAt?: boolean
    lastLogin?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyName?: boolean
    position?: boolean
    mobile?: boolean
    experience?: boolean
    experienceIn?: boolean
    bio?: boolean
    linkedIn?: boolean
    gitHub?: boolean
    location?: boolean
    resume?: boolean
    coins?: boolean
    verified?: boolean
    verifiedAt?: boolean
    lastLogin?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "companyName" | "position" | "mobile" | "experience" | "experienceIn" | "bio" | "linkedIn" | "gitHub" | "location" | "resume" | "coins" | "verified" | "verifiedAt" | "lastLogin" | "verificationToken" | "verificationTokenExpiresAt" | "resetPasswordToken" | "resetPasswordTokenExpiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdInterviews?: boolean | User$createdInterviewsArgs<ExtArgs>
    participatedInterviews?: boolean | User$participatedInterviewsArgs<ExtArgs>
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdInterviews: Prisma.$InterviewPayload<ExtArgs>[]
      participatedInterviews: Prisma.$InterviewParticipantPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      email: string
      password: string | null
      role: $Enums.Role | null
      companyName: string | null
      position: string | null
      mobile: string | null
      experience: number
      experienceIn: $Enums.ExperienceIn | null
      bio: string | null
      linkedIn: string | null
      gitHub: string | null
      location: string | null
      resume: string | null
      coins: number
      verified: boolean
      verifiedAt: Date | null
      lastLogin: Date | null
      verificationToken: string | null
      verificationTokenExpiresAt: Date | null
      resetPasswordToken: string | null
      resetPasswordTokenExpiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdInterviews<T extends User$createdInterviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdInterviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participatedInterviews<T extends User$participatedInterviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$participatedInterviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends User$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly position: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly experienceIn: FieldRef<"User", 'ExperienceIn'>
    readonly bio: FieldRef<"User", 'String'>
    readonly linkedIn: FieldRef<"User", 'String'>
    readonly gitHub: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly resume: FieldRef<"User", 'String'>
    readonly coins: FieldRef<"User", 'Int'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdInterviews
   */
  export type User$createdInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    cursor?: InterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * User.participatedInterviews
   */
  export type User$participatedInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    where?: InterviewParticipantWhereInput
    orderBy?: InterviewParticipantOrderByWithRelationInput | InterviewParticipantOrderByWithRelationInput[]
    cursor?: InterviewParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewParticipantScalarFieldEnum | InterviewParticipantScalarFieldEnum[]
  }

  /**
   * User.feedbacks
   */
  export type User$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewAvgAggregateOutputType = {
    duration: number | null
    experience: number | null
    noOfQuestions: number | null
  }

  export type InterviewSumAggregateOutputType = {
    duration: number | null
    experience: number | null
    noOfQuestions: number | null
  }

  export type InterviewMinAggregateOutputType = {
    id: string | null
    createdById: string | null
    createdByRole: $Enums.CreatedByRole | null
    type: $Enums.InterviewType | null
    duration: number | null
    difficulty: $Enums.InterviewDifficulty | null
    experience: number | null
    experienceIn: $Enums.ExperienceIn | null
    role: string | null
    description: string | null
    keywords: string | null
    topic: string | null
    companyName: string | null
    companyLogo: string | null
    group: $Enums.Group | null
    assessmentType: $Enums.AssessmentType | null
    noOfQuestions: number | null
    status: $Enums.InterviewStatus | null
    validateTill: Date | null
    category: $Enums.InterviewCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: string | null
    createdById: string | null
    createdByRole: $Enums.CreatedByRole | null
    type: $Enums.InterviewType | null
    duration: number | null
    difficulty: $Enums.InterviewDifficulty | null
    experience: number | null
    experienceIn: $Enums.ExperienceIn | null
    role: string | null
    description: string | null
    keywords: string | null
    topic: string | null
    companyName: string | null
    companyLogo: string | null
    group: $Enums.Group | null
    assessmentType: $Enums.AssessmentType | null
    noOfQuestions: number | null
    status: $Enums.InterviewStatus | null
    validateTill: Date | null
    category: $Enums.InterviewCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    createdById: number
    createdByRole: number
    type: number
    duration: number
    difficulty: number
    experience: number
    experienceIn: number
    role: number
    description: number
    keywords: number
    topic: number
    companyName: number
    companyLogo: number
    group: number
    assessmentType: number
    noOfQuestions: number
    status: number
    validateTill: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewAvgAggregateInputType = {
    duration?: true
    experience?: true
    noOfQuestions?: true
  }

  export type InterviewSumAggregateInputType = {
    duration?: true
    experience?: true
    noOfQuestions?: true
  }

  export type InterviewMinAggregateInputType = {
    id?: true
    createdById?: true
    createdByRole?: true
    type?: true
    duration?: true
    difficulty?: true
    experience?: true
    experienceIn?: true
    role?: true
    description?: true
    keywords?: true
    topic?: true
    companyName?: true
    companyLogo?: true
    group?: true
    assessmentType?: true
    noOfQuestions?: true
    status?: true
    validateTill?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    createdById?: true
    createdByRole?: true
    type?: true
    duration?: true
    difficulty?: true
    experience?: true
    experienceIn?: true
    role?: true
    description?: true
    keywords?: true
    topic?: true
    companyName?: true
    companyLogo?: true
    group?: true
    assessmentType?: true
    noOfQuestions?: true
    status?: true
    validateTill?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    createdById?: true
    createdByRole?: true
    type?: true
    duration?: true
    difficulty?: true
    experience?: true
    experienceIn?: true
    role?: true
    description?: true
    keywords?: true
    topic?: true
    companyName?: true
    companyLogo?: true
    group?: true
    assessmentType?: true
    noOfQuestions?: true
    status?: true
    validateTill?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interview to aggregate.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithAggregationInput | InterviewOrderByWithAggregationInput[]
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _avg?: InterviewAvgAggregateInputType
    _sum?: InterviewSumAggregateInputType
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }

  export type InterviewGroupByOutputType = {
    id: string
    createdById: string
    createdByRole: $Enums.CreatedByRole
    type: $Enums.InterviewType
    duration: number
    difficulty: $Enums.InterviewDifficulty
    experience: number
    experienceIn: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic: string | null
    companyName: string | null
    companyLogo: string | null
    group: $Enums.Group
    assessmentType: $Enums.AssessmentType
    noOfQuestions: number
    status: $Enums.InterviewStatus
    validateTill: Date | null
    category: $Enums.InterviewCategory
    createdAt: Date
    updatedAt: Date
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdById?: boolean
    createdByRole?: boolean
    type?: boolean
    duration?: boolean
    difficulty?: boolean
    experience?: boolean
    experienceIn?: boolean
    role?: boolean
    description?: boolean
    keywords?: boolean
    topic?: boolean
    companyName?: boolean
    companyLogo?: boolean
    group?: boolean
    assessmentType?: boolean
    noOfQuestions?: boolean
    status?: boolean
    validateTill?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Interview$questionsArgs<ExtArgs>
    participants?: boolean | Interview$participantsArgs<ExtArgs>
    feedbacks?: boolean | Interview$feedbacksArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdById?: boolean
    createdByRole?: boolean
    type?: boolean
    duration?: boolean
    difficulty?: boolean
    experience?: boolean
    experienceIn?: boolean
    role?: boolean
    description?: boolean
    keywords?: boolean
    topic?: boolean
    companyName?: boolean
    companyLogo?: boolean
    group?: boolean
    assessmentType?: boolean
    noOfQuestions?: boolean
    status?: boolean
    validateTill?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdById?: boolean
    createdByRole?: boolean
    type?: boolean
    duration?: boolean
    difficulty?: boolean
    experience?: boolean
    experienceIn?: boolean
    role?: boolean
    description?: boolean
    keywords?: boolean
    topic?: boolean
    companyName?: boolean
    companyLogo?: boolean
    group?: boolean
    assessmentType?: boolean
    noOfQuestions?: boolean
    status?: boolean
    validateTill?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectScalar = {
    id?: boolean
    createdById?: boolean
    createdByRole?: boolean
    type?: boolean
    duration?: boolean
    difficulty?: boolean
    experience?: boolean
    experienceIn?: boolean
    role?: boolean
    description?: boolean
    keywords?: boolean
    topic?: boolean
    companyName?: boolean
    companyLogo?: boolean
    group?: boolean
    assessmentType?: boolean
    noOfQuestions?: boolean
    status?: boolean
    validateTill?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdById" | "createdByRole" | "type" | "duration" | "difficulty" | "experience" | "experienceIn" | "role" | "description" | "keywords" | "topic" | "companyName" | "companyLogo" | "group" | "assessmentType" | "noOfQuestions" | "status" | "validateTill" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["interview"]>
  export type InterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Interview$questionsArgs<ExtArgs>
    participants?: boolean | Interview$participantsArgs<ExtArgs>
    feedbacks?: boolean | Interview$feedbacksArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interview"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      participants: Prisma.$InterviewParticipantPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdById: string
      createdByRole: $Enums.CreatedByRole
      type: $Enums.InterviewType
      duration: number
      difficulty: $Enums.InterviewDifficulty
      experience: number
      experienceIn: $Enums.ExperienceIn
      role: string
      description: string
      keywords: string
      topic: string | null
      companyName: string | null
      companyLogo: string | null
      group: $Enums.Group
      assessmentType: $Enums.AssessmentType
      noOfQuestions: number
      status: $Enums.InterviewStatus
      validateTill: Date | null
      category: $Enums.InterviewCategory
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interview"]>
    composites: {}
  }

  type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = $Result.GetResult<Prisma.$InterviewPayload, S>

  type InterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewCountAggregateInputType | true
    }

  export interface InterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interview'], meta: { name: 'Interview' } }
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewFindUniqueArgs>(args: SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewFindFirstArgs>(args?: SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewFindManyArgs>(args?: SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
     */
    create<T extends InterviewCreateArgs>(args: SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interviews.
     * @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewCreateManyArgs>(args?: SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {InterviewCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
     */
    delete<T extends InterviewDeleteArgs>(args: SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewUpdateArgs>(args: SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewDeleteManyArgs>(args?: SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewUpdateManyArgs>(args: SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews and returns the data updated in the database.
     * @param {InterviewUpdateManyAndReturnArgs} args - Arguments to update many Interviews.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     */
    upsert<T extends InterviewUpsertArgs>(args: SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interview model
   */
  readonly fields: InterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Interview$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Interview$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Interview$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Interview$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends Interview$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Interview$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interview model
   */
  interface InterviewFieldRefs {
    readonly id: FieldRef<"Interview", 'String'>
    readonly createdById: FieldRef<"Interview", 'String'>
    readonly createdByRole: FieldRef<"Interview", 'CreatedByRole'>
    readonly type: FieldRef<"Interview", 'InterviewType'>
    readonly duration: FieldRef<"Interview", 'Int'>
    readonly difficulty: FieldRef<"Interview", 'InterviewDifficulty'>
    readonly experience: FieldRef<"Interview", 'Int'>
    readonly experienceIn: FieldRef<"Interview", 'ExperienceIn'>
    readonly role: FieldRef<"Interview", 'String'>
    readonly description: FieldRef<"Interview", 'String'>
    readonly keywords: FieldRef<"Interview", 'String'>
    readonly topic: FieldRef<"Interview", 'String'>
    readonly companyName: FieldRef<"Interview", 'String'>
    readonly companyLogo: FieldRef<"Interview", 'String'>
    readonly group: FieldRef<"Interview", 'Group'>
    readonly assessmentType: FieldRef<"Interview", 'AssessmentType'>
    readonly noOfQuestions: FieldRef<"Interview", 'Int'>
    readonly status: FieldRef<"Interview", 'InterviewStatus'>
    readonly validateTill: FieldRef<"Interview", 'DateTime'>
    readonly category: FieldRef<"Interview", 'InterviewCategory'>
    readonly createdAt: FieldRef<"Interview", 'DateTime'>
    readonly updatedAt: FieldRef<"Interview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interview findUnique
   */
  export type InterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findFirst
   */
  export type InterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interviews to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview create
   */
  export type InterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Interview.
     */
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }

  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interview createManyAndReturn
   */
  export type InterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview update
   */
  export type InterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Interview.
     */
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
  }

  /**
   * Interview updateManyAndReturn
   */
  export type InterviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Interview to update in case it exists.
     */
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     */
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }

  /**
   * Interview delete
   */
  export type InterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter which Interview to delete.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interviews to delete
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to delete.
     */
    limit?: number
  }

  /**
   * Interview.questions
   */
  export type Interview$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Interview.participants
   */
  export type Interview$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    where?: InterviewParticipantWhereInput
    orderBy?: InterviewParticipantOrderByWithRelationInput | InterviewParticipantOrderByWithRelationInput[]
    cursor?: InterviewParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewParticipantScalarFieldEnum | InterviewParticipantScalarFieldEnum[]
  }

  /**
   * Interview.feedbacks
   */
  export type Interview$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Interview without action
   */
  export type InterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
  }


  /**
   * Model InterviewParticipant
   */

  export type AggregateInterviewParticipant = {
    _count: InterviewParticipantCountAggregateOutputType | null
    _min: InterviewParticipantMinAggregateOutputType | null
    _max: InterviewParticipantMaxAggregateOutputType | null
  }

  export type InterviewParticipantMinAggregateOutputType = {
    id: string | null
    interviewId: string | null
    intervieweeId: string | null
    status: $Enums.Status | null
    startedAt: Date | null
    completedAt: Date | null
    timeTaken: string | null
  }

  export type InterviewParticipantMaxAggregateOutputType = {
    id: string | null
    interviewId: string | null
    intervieweeId: string | null
    status: $Enums.Status | null
    startedAt: Date | null
    completedAt: Date | null
    timeTaken: string | null
  }

  export type InterviewParticipantCountAggregateOutputType = {
    id: number
    interviewId: number
    intervieweeId: number
    status: number
    startedAt: number
    completedAt: number
    timeTaken: number
    _all: number
  }


  export type InterviewParticipantMinAggregateInputType = {
    id?: true
    interviewId?: true
    intervieweeId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    timeTaken?: true
  }

  export type InterviewParticipantMaxAggregateInputType = {
    id?: true
    interviewId?: true
    intervieweeId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    timeTaken?: true
  }

  export type InterviewParticipantCountAggregateInputType = {
    id?: true
    interviewId?: true
    intervieweeId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    timeTaken?: true
    _all?: true
  }

  export type InterviewParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewParticipant to aggregate.
     */
    where?: InterviewParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewParticipants to fetch.
     */
    orderBy?: InterviewParticipantOrderByWithRelationInput | InterviewParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewParticipants
    **/
    _count?: true | InterviewParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewParticipantMaxAggregateInputType
  }

  export type GetInterviewParticipantAggregateType<T extends InterviewParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewParticipant[P]>
      : GetScalarType<T[P], AggregateInterviewParticipant[P]>
  }




  export type InterviewParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewParticipantWhereInput
    orderBy?: InterviewParticipantOrderByWithAggregationInput | InterviewParticipantOrderByWithAggregationInput[]
    by: InterviewParticipantScalarFieldEnum[] | InterviewParticipantScalarFieldEnum
    having?: InterviewParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewParticipantCountAggregateInputType | true
    _min?: InterviewParticipantMinAggregateInputType
    _max?: InterviewParticipantMaxAggregateInputType
  }

  export type InterviewParticipantGroupByOutputType = {
    id: string
    interviewId: string
    intervieweeId: string
    status: $Enums.Status
    startedAt: Date | null
    completedAt: Date | null
    timeTaken: string | null
    _count: InterviewParticipantCountAggregateOutputType | null
    _min: InterviewParticipantMinAggregateOutputType | null
    _max: InterviewParticipantMaxAggregateOutputType | null
  }

  type GetInterviewParticipantGroupByPayload<T extends InterviewParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewParticipantGroupByOutputType[P]>
        }
      >
    >


  export type InterviewParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    intervieweeId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeTaken?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    interviewee?: boolean | UserDefaultArgs<ExtArgs>
    feedbacks?: boolean | InterviewParticipant$feedbacksArgs<ExtArgs>
    _count?: boolean | InterviewParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewParticipant"]>

  export type InterviewParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    intervieweeId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeTaken?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    interviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewParticipant"]>

  export type InterviewParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    intervieweeId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeTaken?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    interviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewParticipant"]>

  export type InterviewParticipantSelectScalar = {
    id?: boolean
    interviewId?: boolean
    intervieweeId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeTaken?: boolean
  }

  export type InterviewParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "intervieweeId" | "status" | "startedAt" | "completedAt" | "timeTaken", ExtArgs["result"]["interviewParticipant"]>
  export type InterviewParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    interviewee?: boolean | UserDefaultArgs<ExtArgs>
    feedbacks?: boolean | InterviewParticipant$feedbacksArgs<ExtArgs>
    _count?: boolean | InterviewParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    interviewee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterviewParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    interviewee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InterviewParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewParticipant"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
      interviewee: Prisma.$UserPayload<ExtArgs>
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewId: string
      intervieweeId: string
      status: $Enums.Status
      startedAt: Date | null
      completedAt: Date | null
      timeTaken: string | null
    }, ExtArgs["result"]["interviewParticipant"]>
    composites: {}
  }

  type InterviewParticipantGetPayload<S extends boolean | null | undefined | InterviewParticipantDefaultArgs> = $Result.GetResult<Prisma.$InterviewParticipantPayload, S>

  type InterviewParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewParticipantCountAggregateInputType | true
    }

  export interface InterviewParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewParticipant'], meta: { name: 'InterviewParticipant' } }
    /**
     * Find zero or one InterviewParticipant that matches the filter.
     * @param {InterviewParticipantFindUniqueArgs} args - Arguments to find a InterviewParticipant
     * @example
     * // Get one InterviewParticipant
     * const interviewParticipant = await prisma.interviewParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewParticipantFindUniqueArgs>(args: SelectSubset<T, InterviewParticipantFindUniqueArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewParticipantFindUniqueOrThrowArgs} args - Arguments to find a InterviewParticipant
     * @example
     * // Get one InterviewParticipant
     * const interviewParticipant = await prisma.interviewParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewParticipantFindFirstArgs} args - Arguments to find a InterviewParticipant
     * @example
     * // Get one InterviewParticipant
     * const interviewParticipant = await prisma.interviewParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewParticipantFindFirstArgs>(args?: SelectSubset<T, InterviewParticipantFindFirstArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewParticipantFindFirstOrThrowArgs} args - Arguments to find a InterviewParticipant
     * @example
     * // Get one InterviewParticipant
     * const interviewParticipant = await prisma.interviewParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewParticipants
     * const interviewParticipants = await prisma.interviewParticipant.findMany()
     * 
     * // Get first 10 InterviewParticipants
     * const interviewParticipants = await prisma.interviewParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewParticipantWithIdOnly = await prisma.interviewParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewParticipantFindManyArgs>(args?: SelectSubset<T, InterviewParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewParticipant.
     * @param {InterviewParticipantCreateArgs} args - Arguments to create a InterviewParticipant.
     * @example
     * // Create one InterviewParticipant
     * const InterviewParticipant = await prisma.interviewParticipant.create({
     *   data: {
     *     // ... data to create a InterviewParticipant
     *   }
     * })
     * 
     */
    create<T extends InterviewParticipantCreateArgs>(args: SelectSubset<T, InterviewParticipantCreateArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewParticipants.
     * @param {InterviewParticipantCreateManyArgs} args - Arguments to create many InterviewParticipants.
     * @example
     * // Create many InterviewParticipants
     * const interviewParticipant = await prisma.interviewParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewParticipantCreateManyArgs>(args?: SelectSubset<T, InterviewParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewParticipants and returns the data saved in the database.
     * @param {InterviewParticipantCreateManyAndReturnArgs} args - Arguments to create many InterviewParticipants.
     * @example
     * // Create many InterviewParticipants
     * const interviewParticipant = await prisma.interviewParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewParticipants and only return the `id`
     * const interviewParticipantWithIdOnly = await prisma.interviewParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewParticipant.
     * @param {InterviewParticipantDeleteArgs} args - Arguments to delete one InterviewParticipant.
     * @example
     * // Delete one InterviewParticipant
     * const InterviewParticipant = await prisma.interviewParticipant.delete({
     *   where: {
     *     // ... filter to delete one InterviewParticipant
     *   }
     * })
     * 
     */
    delete<T extends InterviewParticipantDeleteArgs>(args: SelectSubset<T, InterviewParticipantDeleteArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewParticipant.
     * @param {InterviewParticipantUpdateArgs} args - Arguments to update one InterviewParticipant.
     * @example
     * // Update one InterviewParticipant
     * const interviewParticipant = await prisma.interviewParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewParticipantUpdateArgs>(args: SelectSubset<T, InterviewParticipantUpdateArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewParticipants.
     * @param {InterviewParticipantDeleteManyArgs} args - Arguments to filter InterviewParticipants to delete.
     * @example
     * // Delete a few InterviewParticipants
     * const { count } = await prisma.interviewParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewParticipantDeleteManyArgs>(args?: SelectSubset<T, InterviewParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewParticipants
     * const interviewParticipant = await prisma.interviewParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewParticipantUpdateManyArgs>(args: SelectSubset<T, InterviewParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewParticipants and returns the data updated in the database.
     * @param {InterviewParticipantUpdateManyAndReturnArgs} args - Arguments to update many InterviewParticipants.
     * @example
     * // Update many InterviewParticipants
     * const interviewParticipant = await prisma.interviewParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewParticipants and only return the `id`
     * const interviewParticipantWithIdOnly = await prisma.interviewParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewParticipant.
     * @param {InterviewParticipantUpsertArgs} args - Arguments to update or create a InterviewParticipant.
     * @example
     * // Update or create a InterviewParticipant
     * const interviewParticipant = await prisma.interviewParticipant.upsert({
     *   create: {
     *     // ... data to create a InterviewParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewParticipant we want to update
     *   }
     * })
     */
    upsert<T extends InterviewParticipantUpsertArgs>(args: SelectSubset<T, InterviewParticipantUpsertArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewParticipantCountArgs} args - Arguments to filter InterviewParticipants to count.
     * @example
     * // Count the number of InterviewParticipants
     * const count = await prisma.interviewParticipant.count({
     *   where: {
     *     // ... the filter for the InterviewParticipants we want to count
     *   }
     * })
    **/
    count<T extends InterviewParticipantCountArgs>(
      args?: Subset<T, InterviewParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewParticipantAggregateArgs>(args: Subset<T, InterviewParticipantAggregateArgs>): Prisma.PrismaPromise<GetInterviewParticipantAggregateType<T>>

    /**
     * Group by InterviewParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewParticipantGroupByArgs['orderBy'] }
        : { orderBy?: InterviewParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewParticipant model
   */
  readonly fields: InterviewParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interviewee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feedbacks<T extends InterviewParticipant$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, InterviewParticipant$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewParticipant model
   */
  interface InterviewParticipantFieldRefs {
    readonly id: FieldRef<"InterviewParticipant", 'String'>
    readonly interviewId: FieldRef<"InterviewParticipant", 'String'>
    readonly intervieweeId: FieldRef<"InterviewParticipant", 'String'>
    readonly status: FieldRef<"InterviewParticipant", 'Status'>
    readonly startedAt: FieldRef<"InterviewParticipant", 'DateTime'>
    readonly completedAt: FieldRef<"InterviewParticipant", 'DateTime'>
    readonly timeTaken: FieldRef<"InterviewParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InterviewParticipant findUnique
   */
  export type InterviewParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * Filter, which InterviewParticipant to fetch.
     */
    where: InterviewParticipantWhereUniqueInput
  }

  /**
   * InterviewParticipant findUniqueOrThrow
   */
  export type InterviewParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * Filter, which InterviewParticipant to fetch.
     */
    where: InterviewParticipantWhereUniqueInput
  }

  /**
   * InterviewParticipant findFirst
   */
  export type InterviewParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * Filter, which InterviewParticipant to fetch.
     */
    where?: InterviewParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewParticipants to fetch.
     */
    orderBy?: InterviewParticipantOrderByWithRelationInput | InterviewParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewParticipants.
     */
    cursor?: InterviewParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewParticipants.
     */
    distinct?: InterviewParticipantScalarFieldEnum | InterviewParticipantScalarFieldEnum[]
  }

  /**
   * InterviewParticipant findFirstOrThrow
   */
  export type InterviewParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * Filter, which InterviewParticipant to fetch.
     */
    where?: InterviewParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewParticipants to fetch.
     */
    orderBy?: InterviewParticipantOrderByWithRelationInput | InterviewParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewParticipants.
     */
    cursor?: InterviewParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewParticipants.
     */
    distinct?: InterviewParticipantScalarFieldEnum | InterviewParticipantScalarFieldEnum[]
  }

  /**
   * InterviewParticipant findMany
   */
  export type InterviewParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * Filter, which InterviewParticipants to fetch.
     */
    where?: InterviewParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewParticipants to fetch.
     */
    orderBy?: InterviewParticipantOrderByWithRelationInput | InterviewParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewParticipants.
     */
    cursor?: InterviewParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewParticipants.
     */
    skip?: number
    distinct?: InterviewParticipantScalarFieldEnum | InterviewParticipantScalarFieldEnum[]
  }

  /**
   * InterviewParticipant create
   */
  export type InterviewParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewParticipant.
     */
    data: XOR<InterviewParticipantCreateInput, InterviewParticipantUncheckedCreateInput>
  }

  /**
   * InterviewParticipant createMany
   */
  export type InterviewParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewParticipants.
     */
    data: InterviewParticipantCreateManyInput | InterviewParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewParticipant createManyAndReturn
   */
  export type InterviewParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewParticipants.
     */
    data: InterviewParticipantCreateManyInput | InterviewParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewParticipant update
   */
  export type InterviewParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewParticipant.
     */
    data: XOR<InterviewParticipantUpdateInput, InterviewParticipantUncheckedUpdateInput>
    /**
     * Choose, which InterviewParticipant to update.
     */
    where: InterviewParticipantWhereUniqueInput
  }

  /**
   * InterviewParticipant updateMany
   */
  export type InterviewParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewParticipants.
     */
    data: XOR<InterviewParticipantUpdateManyMutationInput, InterviewParticipantUncheckedUpdateManyInput>
    /**
     * Filter which InterviewParticipants to update
     */
    where?: InterviewParticipantWhereInput
    /**
     * Limit how many InterviewParticipants to update.
     */
    limit?: number
  }

  /**
   * InterviewParticipant updateManyAndReturn
   */
  export type InterviewParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * The data used to update InterviewParticipants.
     */
    data: XOR<InterviewParticipantUpdateManyMutationInput, InterviewParticipantUncheckedUpdateManyInput>
    /**
     * Filter which InterviewParticipants to update
     */
    where?: InterviewParticipantWhereInput
    /**
     * Limit how many InterviewParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewParticipant upsert
   */
  export type InterviewParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewParticipant to update in case it exists.
     */
    where: InterviewParticipantWhereUniqueInput
    /**
     * In case the InterviewParticipant found by the `where` argument doesn't exist, create a new InterviewParticipant with this data.
     */
    create: XOR<InterviewParticipantCreateInput, InterviewParticipantUncheckedCreateInput>
    /**
     * In case the InterviewParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewParticipantUpdateInput, InterviewParticipantUncheckedUpdateInput>
  }

  /**
   * InterviewParticipant delete
   */
  export type InterviewParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    /**
     * Filter which InterviewParticipant to delete.
     */
    where: InterviewParticipantWhereUniqueInput
  }

  /**
   * InterviewParticipant deleteMany
   */
  export type InterviewParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewParticipants to delete
     */
    where?: InterviewParticipantWhereInput
    /**
     * Limit how many InterviewParticipants to delete.
     */
    limit?: number
  }

  /**
   * InterviewParticipant.feedbacks
   */
  export type InterviewParticipant$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * InterviewParticipant without action
   */
  export type InterviewParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    interviewId: string | null
    question: string | null
    codeEditorRequired: boolean | null
    questionType: string | null
    options: string | null
    answer: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    interviewId: string | null
    question: string | null
    codeEditorRequired: boolean | null
    questionType: string | null
    options: string | null
    answer: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    interviewId: number
    question: number
    codeEditorRequired: number
    questionType: number
    options: number
    answer: number
    explanation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    interviewId?: true
    question?: true
    codeEditorRequired?: true
    questionType?: true
    options?: true
    answer?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    interviewId?: true
    question?: true
    codeEditorRequired?: true
    questionType?: true
    options?: true
    answer?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    interviewId?: true
    question?: true
    codeEditorRequired?: true
    questionType?: true
    options?: true
    answer?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    interviewId: string
    question: string
    codeEditorRequired: boolean
    questionType: string
    options: string | null
    answer: string | null
    explanation: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    question?: boolean
    codeEditorRequired?: boolean
    questionType?: boolean
    options?: boolean
    answer?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    question?: boolean
    codeEditorRequired?: boolean
    questionType?: boolean
    options?: boolean
    answer?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    question?: boolean
    codeEditorRequired?: boolean
    questionType?: boolean
    options?: boolean
    answer?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    interviewId?: boolean
    question?: boolean
    codeEditorRequired?: boolean
    questionType?: boolean
    options?: boolean
    answer?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "question" | "codeEditorRequired" | "questionType" | "options" | "answer" | "explanation" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewId: string
      question: string
      codeEditorRequired: boolean
      questionType: string
      options: string | null
      answer: string | null
      explanation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly interviewId: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
    readonly codeEditorRequired: FieldRef<"Question", 'Boolean'>
    readonly questionType: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'String'>
    readonly answer: FieldRef<"Question", 'String'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    totalRating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    totalRating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    interviewId: string | null
    interviewParticipantId: string | null
    totalRating: number | null
    summary: string | null
    strengths: string | null
    weaknesses: string | null
    improvements: string | null
    assessment: string | null
    recommendedForJob: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    interviewId: string | null
    interviewParticipantId: string | null
    totalRating: number | null
    summary: string | null
    strengths: string | null
    weaknesses: string | null
    improvements: string | null
    assessment: string | null
    recommendedForJob: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    interviewId: number
    interviewParticipantId: number
    totalRating: number
    summary: number
    strengths: number
    weaknesses: number
    improvements: number
    assessment: number
    recommendedForJob: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    totalRating?: true
  }

  export type FeedbackSumAggregateInputType = {
    totalRating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    interviewId?: true
    interviewParticipantId?: true
    totalRating?: true
    summary?: true
    strengths?: true
    weaknesses?: true
    improvements?: true
    assessment?: true
    recommendedForJob?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    interviewId?: true
    interviewParticipantId?: true
    totalRating?: true
    summary?: true
    strengths?: true
    weaknesses?: true
    improvements?: true
    assessment?: true
    recommendedForJob?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    interviewId?: true
    interviewParticipantId?: true
    totalRating?: true
    summary?: true
    strengths?: true
    weaknesses?: true
    improvements?: true
    assessment?: true
    recommendedForJob?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    userId: string
    interviewId: string
    interviewParticipantId: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt: Date
    updatedAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    interviewId?: boolean
    interviewParticipantId?: boolean
    totalRating?: boolean
    summary?: boolean
    strengths?: boolean
    weaknesses?: boolean
    improvements?: boolean
    assessment?: boolean
    recommendedForJob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    InterviewParticipant?: boolean | Feedback$InterviewParticipantArgs<ExtArgs>
    rating?: boolean | Feedback$ratingArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    interviewId?: boolean
    interviewParticipantId?: boolean
    totalRating?: boolean
    summary?: boolean
    strengths?: boolean
    weaknesses?: boolean
    improvements?: boolean
    assessment?: boolean
    recommendedForJob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    InterviewParticipant?: boolean | Feedback$InterviewParticipantArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    interviewId?: boolean
    interviewParticipantId?: boolean
    totalRating?: boolean
    summary?: boolean
    strengths?: boolean
    weaknesses?: boolean
    improvements?: boolean
    assessment?: boolean
    recommendedForJob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    InterviewParticipant?: boolean | Feedback$InterviewParticipantArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    interviewId?: boolean
    interviewParticipantId?: boolean
    totalRating?: boolean
    summary?: boolean
    strengths?: boolean
    weaknesses?: boolean
    improvements?: boolean
    assessment?: boolean
    recommendedForJob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "interviewId" | "interviewParticipantId" | "totalRating" | "summary" | "strengths" | "weaknesses" | "improvements" | "assessment" | "recommendedForJob" | "createdAt" | "updatedAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    InterviewParticipant?: boolean | Feedback$InterviewParticipantArgs<ExtArgs>
    rating?: boolean | Feedback$ratingArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    InterviewParticipant?: boolean | Feedback$InterviewParticipantArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    InterviewParticipant?: boolean | Feedback$InterviewParticipantArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      interview: Prisma.$InterviewPayload<ExtArgs>
      InterviewParticipant: Prisma.$InterviewParticipantPayload<ExtArgs> | null
      rating: Prisma.$RatingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      interviewId: string
      interviewParticipantId: string | null
      totalRating: number
      summary: string
      strengths: string
      weaknesses: string
      improvements: string
      assessment: string
      recommendedForJob: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    InterviewParticipant<T extends Feedback$InterviewParticipantArgs<ExtArgs> = {}>(args?: Subset<T, Feedback$InterviewParticipantArgs<ExtArgs>>): Prisma__InterviewParticipantClient<$Result.GetResult<Prisma.$InterviewParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rating<T extends Feedback$ratingArgs<ExtArgs> = {}>(args?: Subset<T, Feedback$ratingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly userId: FieldRef<"Feedback", 'String'>
    readonly interviewId: FieldRef<"Feedback", 'String'>
    readonly interviewParticipantId: FieldRef<"Feedback", 'String'>
    readonly totalRating: FieldRef<"Feedback", 'Float'>
    readonly summary: FieldRef<"Feedback", 'String'>
    readonly strengths: FieldRef<"Feedback", 'String'>
    readonly weaknesses: FieldRef<"Feedback", 'String'>
    readonly improvements: FieldRef<"Feedback", 'String'>
    readonly assessment: FieldRef<"Feedback", 'String'>
    readonly recommendedForJob: FieldRef<"Feedback", 'Boolean'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
    readonly updatedAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback.InterviewParticipant
   */
  export type Feedback$InterviewParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewParticipant
     */
    select?: InterviewParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewParticipant
     */
    omit?: InterviewParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewParticipantInclude<ExtArgs> | null
    where?: InterviewParticipantWhereInput
  }

  /**
   * Feedback.rating
   */
  export type Feedback$ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    where?: RatingItemWhereInput
    orderBy?: RatingItemOrderByWithRelationInput | RatingItemOrderByWithRelationInput[]
    cursor?: RatingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingItemScalarFieldEnum | RatingItemScalarFieldEnum[]
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model RatingItem
   */

  export type AggregateRatingItem = {
    _count: RatingItemCountAggregateOutputType | null
    _avg: RatingItemAvgAggregateOutputType | null
    _sum: RatingItemSumAggregateOutputType | null
    _min: RatingItemMinAggregateOutputType | null
    _max: RatingItemMaxAggregateOutputType | null
  }

  export type RatingItemAvgAggregateOutputType = {
    score: number | null
  }

  export type RatingItemSumAggregateOutputType = {
    score: number | null
  }

  export type RatingItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    score: number | null
    comment: string | null
    feedbackId: string | null
  }

  export type RatingItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    score: number | null
    comment: string | null
    feedbackId: string | null
  }

  export type RatingItemCountAggregateOutputType = {
    id: number
    name: number
    score: number
    comment: number
    feedbackId: number
    _all: number
  }


  export type RatingItemAvgAggregateInputType = {
    score?: true
  }

  export type RatingItemSumAggregateInputType = {
    score?: true
  }

  export type RatingItemMinAggregateInputType = {
    id?: true
    name?: true
    score?: true
    comment?: true
    feedbackId?: true
  }

  export type RatingItemMaxAggregateInputType = {
    id?: true
    name?: true
    score?: true
    comment?: true
    feedbackId?: true
  }

  export type RatingItemCountAggregateInputType = {
    id?: true
    name?: true
    score?: true
    comment?: true
    feedbackId?: true
    _all?: true
  }

  export type RatingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingItem to aggregate.
     */
    where?: RatingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingItems to fetch.
     */
    orderBy?: RatingItemOrderByWithRelationInput | RatingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatingItems
    **/
    _count?: true | RatingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingItemMaxAggregateInputType
  }

  export type GetRatingItemAggregateType<T extends RatingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRatingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatingItem[P]>
      : GetScalarType<T[P], AggregateRatingItem[P]>
  }




  export type RatingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingItemWhereInput
    orderBy?: RatingItemOrderByWithAggregationInput | RatingItemOrderByWithAggregationInput[]
    by: RatingItemScalarFieldEnum[] | RatingItemScalarFieldEnum
    having?: RatingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingItemCountAggregateInputType | true
    _avg?: RatingItemAvgAggregateInputType
    _sum?: RatingItemSumAggregateInputType
    _min?: RatingItemMinAggregateInputType
    _max?: RatingItemMaxAggregateInputType
  }

  export type RatingItemGroupByOutputType = {
    id: string
    name: string
    score: number
    comment: string
    feedbackId: string
    _count: RatingItemCountAggregateOutputType | null
    _avg: RatingItemAvgAggregateOutputType | null
    _sum: RatingItemSumAggregateOutputType | null
    _min: RatingItemMinAggregateOutputType | null
    _max: RatingItemMaxAggregateOutputType | null
  }

  type GetRatingItemGroupByPayload<T extends RatingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingItemGroupByOutputType[P]>
            : GetScalarType<T[P], RatingItemGroupByOutputType[P]>
        }
      >
    >


  export type RatingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    score?: boolean
    comment?: boolean
    feedbackId?: boolean
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingItem"]>

  export type RatingItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    score?: boolean
    comment?: boolean
    feedbackId?: boolean
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingItem"]>

  export type RatingItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    score?: boolean
    comment?: boolean
    feedbackId?: boolean
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingItem"]>

  export type RatingItemSelectScalar = {
    id?: boolean
    name?: boolean
    score?: boolean
    comment?: boolean
    feedbackId?: boolean
  }

  export type RatingItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "score" | "comment" | "feedbackId", ExtArgs["result"]["ratingItem"]>
  export type RatingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
  }
  export type RatingItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
  }
  export type RatingItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
  }

  export type $RatingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatingItem"
    objects: {
      feedback: Prisma.$FeedbackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      score: number
      comment: string
      feedbackId: string
    }, ExtArgs["result"]["ratingItem"]>
    composites: {}
  }

  type RatingItemGetPayload<S extends boolean | null | undefined | RatingItemDefaultArgs> = $Result.GetResult<Prisma.$RatingItemPayload, S>

  type RatingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingItemCountAggregateInputType | true
    }

  export interface RatingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatingItem'], meta: { name: 'RatingItem' } }
    /**
     * Find zero or one RatingItem that matches the filter.
     * @param {RatingItemFindUniqueArgs} args - Arguments to find a RatingItem
     * @example
     * // Get one RatingItem
     * const ratingItem = await prisma.ratingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingItemFindUniqueArgs>(args: SelectSubset<T, RatingItemFindUniqueArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RatingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingItemFindUniqueOrThrowArgs} args - Arguments to find a RatingItem
     * @example
     * // Get one RatingItem
     * const ratingItem = await prisma.ratingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingItemFindFirstArgs} args - Arguments to find a RatingItem
     * @example
     * // Get one RatingItem
     * const ratingItem = await prisma.ratingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingItemFindFirstArgs>(args?: SelectSubset<T, RatingItemFindFirstArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingItemFindFirstOrThrowArgs} args - Arguments to find a RatingItem
     * @example
     * // Get one RatingItem
     * const ratingItem = await prisma.ratingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RatingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatingItems
     * const ratingItems = await prisma.ratingItem.findMany()
     * 
     * // Get first 10 RatingItems
     * const ratingItems = await prisma.ratingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingItemWithIdOnly = await prisma.ratingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingItemFindManyArgs>(args?: SelectSubset<T, RatingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RatingItem.
     * @param {RatingItemCreateArgs} args - Arguments to create a RatingItem.
     * @example
     * // Create one RatingItem
     * const RatingItem = await prisma.ratingItem.create({
     *   data: {
     *     // ... data to create a RatingItem
     *   }
     * })
     * 
     */
    create<T extends RatingItemCreateArgs>(args: SelectSubset<T, RatingItemCreateArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RatingItems.
     * @param {RatingItemCreateManyArgs} args - Arguments to create many RatingItems.
     * @example
     * // Create many RatingItems
     * const ratingItem = await prisma.ratingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingItemCreateManyArgs>(args?: SelectSubset<T, RatingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RatingItems and returns the data saved in the database.
     * @param {RatingItemCreateManyAndReturnArgs} args - Arguments to create many RatingItems.
     * @example
     * // Create many RatingItems
     * const ratingItem = await prisma.ratingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RatingItems and only return the `id`
     * const ratingItemWithIdOnly = await prisma.ratingItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RatingItem.
     * @param {RatingItemDeleteArgs} args - Arguments to delete one RatingItem.
     * @example
     * // Delete one RatingItem
     * const RatingItem = await prisma.ratingItem.delete({
     *   where: {
     *     // ... filter to delete one RatingItem
     *   }
     * })
     * 
     */
    delete<T extends RatingItemDeleteArgs>(args: SelectSubset<T, RatingItemDeleteArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RatingItem.
     * @param {RatingItemUpdateArgs} args - Arguments to update one RatingItem.
     * @example
     * // Update one RatingItem
     * const ratingItem = await prisma.ratingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingItemUpdateArgs>(args: SelectSubset<T, RatingItemUpdateArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RatingItems.
     * @param {RatingItemDeleteManyArgs} args - Arguments to filter RatingItems to delete.
     * @example
     * // Delete a few RatingItems
     * const { count } = await prisma.ratingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingItemDeleteManyArgs>(args?: SelectSubset<T, RatingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatingItems
     * const ratingItem = await prisma.ratingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingItemUpdateManyArgs>(args: SelectSubset<T, RatingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingItems and returns the data updated in the database.
     * @param {RatingItemUpdateManyAndReturnArgs} args - Arguments to update many RatingItems.
     * @example
     * // Update many RatingItems
     * const ratingItem = await prisma.ratingItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RatingItems and only return the `id`
     * const ratingItemWithIdOnly = await prisma.ratingItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RatingItem.
     * @param {RatingItemUpsertArgs} args - Arguments to update or create a RatingItem.
     * @example
     * // Update or create a RatingItem
     * const ratingItem = await prisma.ratingItem.upsert({
     *   create: {
     *     // ... data to create a RatingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatingItem we want to update
     *   }
     * })
     */
    upsert<T extends RatingItemUpsertArgs>(args: SelectSubset<T, RatingItemUpsertArgs<ExtArgs>>): Prisma__RatingItemClient<$Result.GetResult<Prisma.$RatingItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RatingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingItemCountArgs} args - Arguments to filter RatingItems to count.
     * @example
     * // Count the number of RatingItems
     * const count = await prisma.ratingItem.count({
     *   where: {
     *     // ... the filter for the RatingItems we want to count
     *   }
     * })
    **/
    count<T extends RatingItemCountArgs>(
      args?: Subset<T, RatingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingItemAggregateArgs>(args: Subset<T, RatingItemAggregateArgs>): Prisma.PrismaPromise<GetRatingItemAggregateType<T>>

    /**
     * Group by RatingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingItemGroupByArgs['orderBy'] }
        : { orderBy?: RatingItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatingItem model
   */
  readonly fields: RatingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends FeedbackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackDefaultArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RatingItem model
   */
  interface RatingItemFieldRefs {
    readonly id: FieldRef<"RatingItem", 'String'>
    readonly name: FieldRef<"RatingItem", 'String'>
    readonly score: FieldRef<"RatingItem", 'Float'>
    readonly comment: FieldRef<"RatingItem", 'String'>
    readonly feedbackId: FieldRef<"RatingItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RatingItem findUnique
   */
  export type RatingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * Filter, which RatingItem to fetch.
     */
    where: RatingItemWhereUniqueInput
  }

  /**
   * RatingItem findUniqueOrThrow
   */
  export type RatingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * Filter, which RatingItem to fetch.
     */
    where: RatingItemWhereUniqueInput
  }

  /**
   * RatingItem findFirst
   */
  export type RatingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * Filter, which RatingItem to fetch.
     */
    where?: RatingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingItems to fetch.
     */
    orderBy?: RatingItemOrderByWithRelationInput | RatingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingItems.
     */
    cursor?: RatingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingItems.
     */
    distinct?: RatingItemScalarFieldEnum | RatingItemScalarFieldEnum[]
  }

  /**
   * RatingItem findFirstOrThrow
   */
  export type RatingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * Filter, which RatingItem to fetch.
     */
    where?: RatingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingItems to fetch.
     */
    orderBy?: RatingItemOrderByWithRelationInput | RatingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingItems.
     */
    cursor?: RatingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingItems.
     */
    distinct?: RatingItemScalarFieldEnum | RatingItemScalarFieldEnum[]
  }

  /**
   * RatingItem findMany
   */
  export type RatingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * Filter, which RatingItems to fetch.
     */
    where?: RatingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingItems to fetch.
     */
    orderBy?: RatingItemOrderByWithRelationInput | RatingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatingItems.
     */
    cursor?: RatingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingItems.
     */
    skip?: number
    distinct?: RatingItemScalarFieldEnum | RatingItemScalarFieldEnum[]
  }

  /**
   * RatingItem create
   */
  export type RatingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RatingItem.
     */
    data: XOR<RatingItemCreateInput, RatingItemUncheckedCreateInput>
  }

  /**
   * RatingItem createMany
   */
  export type RatingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatingItems.
     */
    data: RatingItemCreateManyInput | RatingItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatingItem createManyAndReturn
   */
  export type RatingItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * The data used to create many RatingItems.
     */
    data: RatingItemCreateManyInput | RatingItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatingItem update
   */
  export type RatingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RatingItem.
     */
    data: XOR<RatingItemUpdateInput, RatingItemUncheckedUpdateInput>
    /**
     * Choose, which RatingItem to update.
     */
    where: RatingItemWhereUniqueInput
  }

  /**
   * RatingItem updateMany
   */
  export type RatingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatingItems.
     */
    data: XOR<RatingItemUpdateManyMutationInput, RatingItemUncheckedUpdateManyInput>
    /**
     * Filter which RatingItems to update
     */
    where?: RatingItemWhereInput
    /**
     * Limit how many RatingItems to update.
     */
    limit?: number
  }

  /**
   * RatingItem updateManyAndReturn
   */
  export type RatingItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * The data used to update RatingItems.
     */
    data: XOR<RatingItemUpdateManyMutationInput, RatingItemUncheckedUpdateManyInput>
    /**
     * Filter which RatingItems to update
     */
    where?: RatingItemWhereInput
    /**
     * Limit how many RatingItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatingItem upsert
   */
  export type RatingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RatingItem to update in case it exists.
     */
    where: RatingItemWhereUniqueInput
    /**
     * In case the RatingItem found by the `where` argument doesn't exist, create a new RatingItem with this data.
     */
    create: XOR<RatingItemCreateInput, RatingItemUncheckedCreateInput>
    /**
     * In case the RatingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingItemUpdateInput, RatingItemUncheckedUpdateInput>
  }

  /**
   * RatingItem delete
   */
  export type RatingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
    /**
     * Filter which RatingItem to delete.
     */
    where: RatingItemWhereUniqueInput
  }

  /**
   * RatingItem deleteMany
   */
  export type RatingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingItems to delete
     */
    where?: RatingItemWhereInput
    /**
     * Limit how many RatingItems to delete.
     */
    limit?: number
  }

  /**
   * RatingItem without action
   */
  export type RatingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingItem
     */
    select?: RatingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingItem
     */
    omit?: RatingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    companyName: 'companyName',
    position: 'position',
    mobile: 'mobile',
    experience: 'experience',
    experienceIn: 'experienceIn',
    bio: 'bio',
    linkedIn: 'linkedIn',
    gitHub: 'gitHub',
    location: 'location',
    resume: 'resume',
    coins: 'coins',
    verified: 'verified',
    verifiedAt: 'verifiedAt',
    lastLogin: 'lastLogin',
    verificationToken: 'verificationToken',
    verificationTokenExpiresAt: 'verificationTokenExpiresAt',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordTokenExpiresAt: 'resetPasswordTokenExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
    id: 'id',
    createdById: 'createdById',
    createdByRole: 'createdByRole',
    type: 'type',
    duration: 'duration',
    difficulty: 'difficulty',
    experience: 'experience',
    experienceIn: 'experienceIn',
    role: 'role',
    description: 'description',
    keywords: 'keywords',
    topic: 'topic',
    companyName: 'companyName',
    companyLogo: 'companyLogo',
    group: 'group',
    assessmentType: 'assessmentType',
    noOfQuestions: 'noOfQuestions',
    status: 'status',
    validateTill: 'validateTill',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const InterviewParticipantScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    intervieweeId: 'intervieweeId',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    timeTaken: 'timeTaken'
  };

  export type InterviewParticipantScalarFieldEnum = (typeof InterviewParticipantScalarFieldEnum)[keyof typeof InterviewParticipantScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    question: 'question',
    codeEditorRequired: 'codeEditorRequired',
    questionType: 'questionType',
    options: 'options',
    answer: 'answer',
    explanation: 'explanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    interviewId: 'interviewId',
    interviewParticipantId: 'interviewParticipantId',
    totalRating: 'totalRating',
    summary: 'summary',
    strengths: 'strengths',
    weaknesses: 'weaknesses',
    improvements: 'improvements',
    assessment: 'assessment',
    recommendedForJob: 'recommendedForJob',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const RatingItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    score: 'score',
    comment: 'comment',
    feedbackId: 'feedbackId'
  };

  export type RatingItemScalarFieldEnum = (typeof RatingItemScalarFieldEnum)[keyof typeof RatingItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ExperienceIn'
   */
  export type EnumExperienceInFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceIn'>
    


  /**
   * Reference to a field of type 'ExperienceIn[]'
   */
  export type ListEnumExperienceInFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceIn[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CreatedByRole'
   */
  export type EnumCreatedByRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreatedByRole'>
    


  /**
   * Reference to a field of type 'CreatedByRole[]'
   */
  export type ListEnumCreatedByRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreatedByRole[]'>
    


  /**
   * Reference to a field of type 'InterviewType'
   */
  export type EnumInterviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewType'>
    


  /**
   * Reference to a field of type 'InterviewType[]'
   */
  export type ListEnumInterviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewType[]'>
    


  /**
   * Reference to a field of type 'InterviewDifficulty'
   */
  export type EnumInterviewDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewDifficulty'>
    


  /**
   * Reference to a field of type 'InterviewDifficulty[]'
   */
  export type ListEnumInterviewDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewDifficulty[]'>
    


  /**
   * Reference to a field of type 'Group'
   */
  export type EnumGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Group'>
    


  /**
   * Reference to a field of type 'Group[]'
   */
  export type ListEnumGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Group[]'>
    


  /**
   * Reference to a field of type 'AssessmentType'
   */
  export type EnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType'>
    


  /**
   * Reference to a field of type 'AssessmentType[]'
   */
  export type ListEnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType[]'>
    


  /**
   * Reference to a field of type 'InterviewStatus'
   */
  export type EnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus'>
    


  /**
   * Reference to a field of type 'InterviewStatus[]'
   */
  export type ListEnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus[]'>
    


  /**
   * Reference to a field of type 'InterviewCategory'
   */
  export type EnumInterviewCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewCategory'>
    


  /**
   * Reference to a field of type 'InterviewCategory[]'
   */
  export type ListEnumInterviewCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewCategory[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    companyName?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    experience?: IntFilter<"User"> | number
    experienceIn?: EnumExperienceInNullableFilter<"User"> | $Enums.ExperienceIn | null
    bio?: StringNullableFilter<"User"> | string | null
    linkedIn?: StringNullableFilter<"User"> | string | null
    gitHub?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    resume?: StringNullableFilter<"User"> | string | null
    coins?: IntFilter<"User"> | number
    verified?: BoolFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdInterviews?: InterviewListRelationFilter
    participatedInterviews?: InterviewParticipantListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    experience?: SortOrder
    experienceIn?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    gitHub?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    resume?: SortOrderInput | SortOrder
    coins?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdInterviews?: InterviewOrderByRelationAggregateInput
    participatedInterviews?: InterviewParticipantOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    companyName?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    experience?: IntFilter<"User"> | number
    experienceIn?: EnumExperienceInNullableFilter<"User"> | $Enums.ExperienceIn | null
    bio?: StringNullableFilter<"User"> | string | null
    linkedIn?: StringNullableFilter<"User"> | string | null
    gitHub?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    resume?: StringNullableFilter<"User"> | string | null
    coins?: IntFilter<"User"> | number
    verified?: BoolFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdInterviews?: InterviewListRelationFilter
    participatedInterviews?: InterviewParticipantListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    experience?: SortOrder
    experienceIn?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    gitHub?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    resume?: SortOrderInput | SortOrder
    coins?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    position?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    experience?: IntWithAggregatesFilter<"User"> | number
    experienceIn?: EnumExperienceInNullableWithAggregatesFilter<"User"> | $Enums.ExperienceIn | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedIn?: StringNullableWithAggregatesFilter<"User"> | string | null
    gitHub?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    resume?: StringNullableWithAggregatesFilter<"User"> | string | null
    coins?: IntWithAggregatesFilter<"User"> | number
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InterviewWhereInput = {
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    id?: StringFilter<"Interview"> | string
    createdById?: StringFilter<"Interview"> | string
    createdByRole?: EnumCreatedByRoleFilter<"Interview"> | $Enums.CreatedByRole
    type?: EnumInterviewTypeFilter<"Interview"> | $Enums.InterviewType
    duration?: IntFilter<"Interview"> | number
    difficulty?: EnumInterviewDifficultyFilter<"Interview"> | $Enums.InterviewDifficulty
    experience?: IntFilter<"Interview"> | number
    experienceIn?: EnumExperienceInFilter<"Interview"> | $Enums.ExperienceIn
    role?: StringFilter<"Interview"> | string
    description?: StringFilter<"Interview"> | string
    keywords?: StringFilter<"Interview"> | string
    topic?: StringNullableFilter<"Interview"> | string | null
    companyName?: StringNullableFilter<"Interview"> | string | null
    companyLogo?: StringNullableFilter<"Interview"> | string | null
    group?: EnumGroupFilter<"Interview"> | $Enums.Group
    assessmentType?: EnumAssessmentTypeFilter<"Interview"> | $Enums.AssessmentType
    noOfQuestions?: IntFilter<"Interview"> | number
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    validateTill?: DateTimeNullableFilter<"Interview"> | Date | string | null
    category?: EnumInterviewCategoryFilter<"Interview"> | $Enums.InterviewCategory
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuestionListRelationFilter
    participants?: InterviewParticipantListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    createdById?: SortOrder
    createdByRole?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    role?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    topic?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    group?: SortOrder
    assessmentType?: SortOrder
    noOfQuestions?: SortOrder
    status?: SortOrder
    validateTill?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    participants?: InterviewParticipantOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    createdById?: StringFilter<"Interview"> | string
    createdByRole?: EnumCreatedByRoleFilter<"Interview"> | $Enums.CreatedByRole
    type?: EnumInterviewTypeFilter<"Interview"> | $Enums.InterviewType
    duration?: IntFilter<"Interview"> | number
    difficulty?: EnumInterviewDifficultyFilter<"Interview"> | $Enums.InterviewDifficulty
    experience?: IntFilter<"Interview"> | number
    experienceIn?: EnumExperienceInFilter<"Interview"> | $Enums.ExperienceIn
    role?: StringFilter<"Interview"> | string
    description?: StringFilter<"Interview"> | string
    keywords?: StringFilter<"Interview"> | string
    topic?: StringNullableFilter<"Interview"> | string | null
    companyName?: StringNullableFilter<"Interview"> | string | null
    companyLogo?: StringNullableFilter<"Interview"> | string | null
    group?: EnumGroupFilter<"Interview"> | $Enums.Group
    assessmentType?: EnumAssessmentTypeFilter<"Interview"> | $Enums.AssessmentType
    noOfQuestions?: IntFilter<"Interview"> | number
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    validateTill?: DateTimeNullableFilter<"Interview"> | Date | string | null
    category?: EnumInterviewCategoryFilter<"Interview"> | $Enums.InterviewCategory
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuestionListRelationFilter
    participants?: InterviewParticipantListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id">

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    createdById?: SortOrder
    createdByRole?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    role?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    topic?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    group?: SortOrder
    assessmentType?: SortOrder
    noOfQuestions?: SortOrder
    status?: SortOrder
    validateTill?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _avg?: InterviewAvgOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
    _sum?: InterviewSumOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    OR?: InterviewScalarWhereWithAggregatesInput[]
    NOT?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interview"> | string
    createdById?: StringWithAggregatesFilter<"Interview"> | string
    createdByRole?: EnumCreatedByRoleWithAggregatesFilter<"Interview"> | $Enums.CreatedByRole
    type?: EnumInterviewTypeWithAggregatesFilter<"Interview"> | $Enums.InterviewType
    duration?: IntWithAggregatesFilter<"Interview"> | number
    difficulty?: EnumInterviewDifficultyWithAggregatesFilter<"Interview"> | $Enums.InterviewDifficulty
    experience?: IntWithAggregatesFilter<"Interview"> | number
    experienceIn?: EnumExperienceInWithAggregatesFilter<"Interview"> | $Enums.ExperienceIn
    role?: StringWithAggregatesFilter<"Interview"> | string
    description?: StringWithAggregatesFilter<"Interview"> | string
    keywords?: StringWithAggregatesFilter<"Interview"> | string
    topic?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    companyLogo?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    group?: EnumGroupWithAggregatesFilter<"Interview"> | $Enums.Group
    assessmentType?: EnumAssessmentTypeWithAggregatesFilter<"Interview"> | $Enums.AssessmentType
    noOfQuestions?: IntWithAggregatesFilter<"Interview"> | number
    status?: EnumInterviewStatusWithAggregatesFilter<"Interview"> | $Enums.InterviewStatus
    validateTill?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    category?: EnumInterviewCategoryWithAggregatesFilter<"Interview"> | $Enums.InterviewCategory
    createdAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
  }

  export type InterviewParticipantWhereInput = {
    AND?: InterviewParticipantWhereInput | InterviewParticipantWhereInput[]
    OR?: InterviewParticipantWhereInput[]
    NOT?: InterviewParticipantWhereInput | InterviewParticipantWhereInput[]
    id?: StringFilter<"InterviewParticipant"> | string
    interviewId?: StringFilter<"InterviewParticipant"> | string
    intervieweeId?: StringFilter<"InterviewParticipant"> | string
    status?: EnumStatusFilter<"InterviewParticipant"> | $Enums.Status
    startedAt?: DateTimeNullableFilter<"InterviewParticipant"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"InterviewParticipant"> | Date | string | null
    timeTaken?: StringNullableFilter<"InterviewParticipant"> | string | null
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    interviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
    feedbacks?: FeedbackListRelationFilter
  }

  export type InterviewParticipantOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    intervieweeId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    timeTaken?: SortOrderInput | SortOrder
    interview?: InterviewOrderByWithRelationInput
    interviewee?: UserOrderByWithRelationInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type InterviewParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    interviewId_intervieweeId?: InterviewParticipantInterviewIdIntervieweeIdCompoundUniqueInput
    AND?: InterviewParticipantWhereInput | InterviewParticipantWhereInput[]
    OR?: InterviewParticipantWhereInput[]
    NOT?: InterviewParticipantWhereInput | InterviewParticipantWhereInput[]
    interviewId?: StringFilter<"InterviewParticipant"> | string
    intervieweeId?: StringFilter<"InterviewParticipant"> | string
    status?: EnumStatusFilter<"InterviewParticipant"> | $Enums.Status
    startedAt?: DateTimeNullableFilter<"InterviewParticipant"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"InterviewParticipant"> | Date | string | null
    timeTaken?: StringNullableFilter<"InterviewParticipant"> | string | null
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    interviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
    feedbacks?: FeedbackListRelationFilter
  }, "id" | "interviewId_intervieweeId">

  export type InterviewParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    intervieweeId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    timeTaken?: SortOrderInput | SortOrder
    _count?: InterviewParticipantCountOrderByAggregateInput
    _max?: InterviewParticipantMaxOrderByAggregateInput
    _min?: InterviewParticipantMinOrderByAggregateInput
  }

  export type InterviewParticipantScalarWhereWithAggregatesInput = {
    AND?: InterviewParticipantScalarWhereWithAggregatesInput | InterviewParticipantScalarWhereWithAggregatesInput[]
    OR?: InterviewParticipantScalarWhereWithAggregatesInput[]
    NOT?: InterviewParticipantScalarWhereWithAggregatesInput | InterviewParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewParticipant"> | string
    interviewId?: StringWithAggregatesFilter<"InterviewParticipant"> | string
    intervieweeId?: StringWithAggregatesFilter<"InterviewParticipant"> | string
    status?: EnumStatusWithAggregatesFilter<"InterviewParticipant"> | $Enums.Status
    startedAt?: DateTimeNullableWithAggregatesFilter<"InterviewParticipant"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"InterviewParticipant"> | Date | string | null
    timeTaken?: StringNullableWithAggregatesFilter<"InterviewParticipant"> | string | null
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    interviewId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    codeEditorRequired?: BoolFilter<"Question"> | boolean
    questionType?: StringFilter<"Question"> | string
    options?: StringNullableFilter<"Question"> | string | null
    answer?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    codeEditorRequired?: SortOrder
    questionType?: SortOrder
    options?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    interview?: InterviewOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    interviewId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    codeEditorRequired?: BoolFilter<"Question"> | boolean
    questionType?: StringFilter<"Question"> | string
    options?: StringNullableFilter<"Question"> | string | null
    answer?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    codeEditorRequired?: SortOrder
    questionType?: SortOrder
    options?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    interviewId?: StringWithAggregatesFilter<"Question"> | string
    question?: StringWithAggregatesFilter<"Question"> | string
    codeEditorRequired?: BoolWithAggregatesFilter<"Question"> | boolean
    questionType?: StringWithAggregatesFilter<"Question"> | string
    options?: StringNullableWithAggregatesFilter<"Question"> | string | null
    answer?: StringNullableWithAggregatesFilter<"Question"> | string | null
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    interviewId?: StringFilter<"Feedback"> | string
    interviewParticipantId?: StringNullableFilter<"Feedback"> | string | null
    totalRating?: FloatFilter<"Feedback"> | number
    summary?: StringFilter<"Feedback"> | string
    strengths?: StringFilter<"Feedback"> | string
    weaknesses?: StringFilter<"Feedback"> | string
    improvements?: StringFilter<"Feedback"> | string
    assessment?: StringFilter<"Feedback"> | string
    recommendedForJob?: BoolFilter<"Feedback"> | boolean
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    InterviewParticipant?: XOR<InterviewParticipantNullableScalarRelationFilter, InterviewParticipantWhereInput> | null
    rating?: RatingItemListRelationFilter
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    interviewId?: SortOrder
    interviewParticipantId?: SortOrderInput | SortOrder
    totalRating?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    improvements?: SortOrder
    assessment?: SortOrder
    recommendedForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    interview?: InterviewOrderByWithRelationInput
    InterviewParticipant?: InterviewParticipantOrderByWithRelationInput
    rating?: RatingItemOrderByRelationAggregateInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: StringFilter<"Feedback"> | string
    interviewId?: StringFilter<"Feedback"> | string
    interviewParticipantId?: StringNullableFilter<"Feedback"> | string | null
    totalRating?: FloatFilter<"Feedback"> | number
    summary?: StringFilter<"Feedback"> | string
    strengths?: StringFilter<"Feedback"> | string
    weaknesses?: StringFilter<"Feedback"> | string
    improvements?: StringFilter<"Feedback"> | string
    assessment?: StringFilter<"Feedback"> | string
    recommendedForJob?: BoolFilter<"Feedback"> | boolean
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    InterviewParticipant?: XOR<InterviewParticipantNullableScalarRelationFilter, InterviewParticipantWhereInput> | null
    rating?: RatingItemListRelationFilter
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    interviewId?: SortOrder
    interviewParticipantId?: SortOrderInput | SortOrder
    totalRating?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    improvements?: SortOrder
    assessment?: SortOrder
    recommendedForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    userId?: StringWithAggregatesFilter<"Feedback"> | string
    interviewId?: StringWithAggregatesFilter<"Feedback"> | string
    interviewParticipantId?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    totalRating?: FloatWithAggregatesFilter<"Feedback"> | number
    summary?: StringWithAggregatesFilter<"Feedback"> | string
    strengths?: StringWithAggregatesFilter<"Feedback"> | string
    weaknesses?: StringWithAggregatesFilter<"Feedback"> | string
    improvements?: StringWithAggregatesFilter<"Feedback"> | string
    assessment?: StringWithAggregatesFilter<"Feedback"> | string
    recommendedForJob?: BoolWithAggregatesFilter<"Feedback"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type RatingItemWhereInput = {
    AND?: RatingItemWhereInput | RatingItemWhereInput[]
    OR?: RatingItemWhereInput[]
    NOT?: RatingItemWhereInput | RatingItemWhereInput[]
    id?: StringFilter<"RatingItem"> | string
    name?: StringFilter<"RatingItem"> | string
    score?: FloatFilter<"RatingItem"> | number
    comment?: StringFilter<"RatingItem"> | string
    feedbackId?: StringFilter<"RatingItem"> | string
    feedback?: XOR<FeedbackScalarRelationFilter, FeedbackWhereInput>
  }

  export type RatingItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    feedbackId?: SortOrder
    feedback?: FeedbackOrderByWithRelationInput
  }

  export type RatingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingItemWhereInput | RatingItemWhereInput[]
    OR?: RatingItemWhereInput[]
    NOT?: RatingItemWhereInput | RatingItemWhereInput[]
    name?: StringFilter<"RatingItem"> | string
    score?: FloatFilter<"RatingItem"> | number
    comment?: StringFilter<"RatingItem"> | string
    feedbackId?: StringFilter<"RatingItem"> | string
    feedback?: XOR<FeedbackScalarRelationFilter, FeedbackWhereInput>
  }, "id">

  export type RatingItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    feedbackId?: SortOrder
    _count?: RatingItemCountOrderByAggregateInput
    _avg?: RatingItemAvgOrderByAggregateInput
    _max?: RatingItemMaxOrderByAggregateInput
    _min?: RatingItemMinOrderByAggregateInput
    _sum?: RatingItemSumOrderByAggregateInput
  }

  export type RatingItemScalarWhereWithAggregatesInput = {
    AND?: RatingItemScalarWhereWithAggregatesInput | RatingItemScalarWhereWithAggregatesInput[]
    OR?: RatingItemScalarWhereWithAggregatesInput[]
    NOT?: RatingItemScalarWhereWithAggregatesInput | RatingItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RatingItem"> | string
    name?: StringWithAggregatesFilter<"RatingItem"> | string
    score?: FloatWithAggregatesFilter<"RatingItem"> | number
    comment?: StringWithAggregatesFilter<"RatingItem"> | string
    feedbackId?: StringWithAggregatesFilter<"RatingItem"> | string
  }

  export type UserCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdInterviews?: InterviewCreateNestedManyWithoutCreatedByInput
    participatedInterviews?: InterviewParticipantCreateNestedManyWithoutIntervieweeInput
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdInterviews?: InterviewUncheckedCreateNestedManyWithoutCreatedByInput
    participatedInterviews?: InterviewParticipantUncheckedCreateNestedManyWithoutIntervieweeInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdInterviews?: InterviewUpdateManyWithoutCreatedByNestedInput
    participatedInterviews?: InterviewParticipantUpdateManyWithoutIntervieweeNestedInput
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdInterviews?: InterviewUncheckedUpdateManyWithoutCreatedByNestedInput
    participatedInterviews?: InterviewParticipantUncheckedUpdateManyWithoutIntervieweeNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateInput = {
    id?: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedInterviewsInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
    participants?: InterviewParticipantCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateInput = {
    id?: string
    createdById: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
    participants?: InterviewParticipantUncheckedCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedInterviewsNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
    participants?: InterviewParticipantUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
    participants?: InterviewParticipantUncheckedUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateManyInput = {
    id?: string
    createdById: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewParticipantCreateInput = {
    id?: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
    interview: InterviewCreateNestedOneWithoutParticipantsInput
    interviewee: UserCreateNestedOneWithoutParticipatedInterviewsInput
    feedbacks?: FeedbackCreateNestedManyWithoutInterviewParticipantInput
  }

  export type InterviewParticipantUncheckedCreateInput = {
    id?: string
    interviewId: string
    intervieweeId: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutInterviewParticipantInput
  }

  export type InterviewParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
    interview?: InterviewUpdateOneRequiredWithoutParticipantsNestedInput
    interviewee?: UserUpdateOneRequiredWithoutParticipatedInterviewsNestedInput
    feedbacks?: FeedbackUpdateManyWithoutInterviewParticipantNestedInput
  }

  export type InterviewParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    intervieweeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutInterviewParticipantNestedInput
  }

  export type InterviewParticipantCreateManyInput = {
    id?: string
    interviewId: string
    intervieweeId: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
  }

  export type InterviewParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    intervieweeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCreateInput = {
    id?: string
    question: string
    codeEditorRequired?: boolean
    questionType: string
    options?: string | null
    answer?: string | null
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interview: InterviewCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    interviewId: string
    question: string
    codeEditorRequired?: boolean
    questionType: string
    options?: string | null
    answer?: string | null
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    codeEditorRequired?: BoolFieldUpdateOperationsInput | boolean
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    codeEditorRequired?: BoolFieldUpdateOperationsInput | boolean
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    interviewId: string
    question: string
    codeEditorRequired?: boolean
    questionType: string
    options?: string | null
    answer?: string | null
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    codeEditorRequired?: BoolFieldUpdateOperationsInput | boolean
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    codeEditorRequired?: BoolFieldUpdateOperationsInput | boolean
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
    interview: InterviewCreateNestedOneWithoutFeedbacksInput
    InterviewParticipant?: InterviewParticipantCreateNestedOneWithoutFeedbacksInput
    rating?: RatingItemCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    userId: string
    interviewId: string
    interviewParticipantId?: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: RatingItemUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    interview?: InterviewUpdateOneRequiredWithoutFeedbacksNestedInput
    InterviewParticipant?: InterviewParticipantUpdateOneWithoutFeedbacksNestedInput
    rating?: RatingItemUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    interviewParticipantId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingItemUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackCreateManyInput = {
    id?: string
    userId: string
    interviewId: string
    interviewParticipantId?: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    interviewParticipantId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingItemCreateInput = {
    id?: string
    name: string
    score: number
    comment: string
    feedback: FeedbackCreateNestedOneWithoutRatingInput
  }

  export type RatingItemUncheckedCreateInput = {
    id?: string
    name: string
    score: number
    comment: string
    feedbackId: string
  }

  export type RatingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    feedback?: FeedbackUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    feedbackId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingItemCreateManyInput = {
    id?: string
    name: string
    score: number
    comment: string
    feedbackId: string
  }

  export type RatingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RatingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    feedbackId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumExperienceInNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExperienceInNullableFilter<$PrismaModel> | $Enums.ExperienceIn | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InterviewListRelationFilter = {
    every?: InterviewWhereInput
    some?: InterviewWhereInput
    none?: InterviewWhereInput
  }

  export type InterviewParticipantListRelationFilter = {
    every?: InterviewParticipantWhereInput
    some?: InterviewParticipantWhereInput
    none?: InterviewParticipantWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    mobile?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    gitHub?: SortOrder
    location?: SortOrder
    resume?: SortOrder
    coins?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    lastLogin?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    experience?: SortOrder
    coins?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    mobile?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    gitHub?: SortOrder
    location?: SortOrder
    resume?: SortOrder
    coins?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    lastLogin?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    mobile?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    gitHub?: SortOrder
    location?: SortOrder
    resume?: SortOrder
    coins?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    lastLogin?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    experience?: SortOrder
    coins?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumExperienceInNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExperienceInNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceIn | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExperienceInNullableFilter<$PrismaModel>
    _max?: NestedEnumExperienceInNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCreatedByRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByRole | EnumCreatedByRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCreatedByRoleFilter<$PrismaModel> | $Enums.CreatedByRole
  }

  export type EnumInterviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeFilter<$PrismaModel> | $Enums.InterviewType
  }

  export type EnumInterviewDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewDifficulty | EnumInterviewDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewDifficultyFilter<$PrismaModel> | $Enums.InterviewDifficulty
  }

  export type EnumExperienceInFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceInFilter<$PrismaModel> | $Enums.ExperienceIn
  }

  export type EnumGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.Group | EnumGroupFieldRefInput<$PrismaModel>
    in?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupFilter<$PrismaModel> | $Enums.Group
  }

  export type EnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type EnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus
  }

  export type EnumInterviewCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewCategory | EnumInterviewCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewCategoryFilter<$PrismaModel> | $Enums.InterviewCategory
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    createdByRole?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    role?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    topic?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    group?: SortOrder
    assessmentType?: SortOrder
    noOfQuestions?: SortOrder
    status?: SortOrder
    validateTill?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewAvgOrderByAggregateInput = {
    duration?: SortOrder
    experience?: SortOrder
    noOfQuestions?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    createdByRole?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    role?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    topic?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    group?: SortOrder
    assessmentType?: SortOrder
    noOfQuestions?: SortOrder
    status?: SortOrder
    validateTill?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    createdByRole?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    experience?: SortOrder
    experienceIn?: SortOrder
    role?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    topic?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    group?: SortOrder
    assessmentType?: SortOrder
    noOfQuestions?: SortOrder
    status?: SortOrder
    validateTill?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewSumOrderByAggregateInput = {
    duration?: SortOrder
    experience?: SortOrder
    noOfQuestions?: SortOrder
  }

  export type EnumCreatedByRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByRole | EnumCreatedByRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCreatedByRoleWithAggregatesFilter<$PrismaModel> | $Enums.CreatedByRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreatedByRoleFilter<$PrismaModel>
    _max?: NestedEnumCreatedByRoleFilter<$PrismaModel>
  }

  export type EnumInterviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewTypeFilter<$PrismaModel>
    _max?: NestedEnumInterviewTypeFilter<$PrismaModel>
  }

  export type EnumInterviewDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewDifficulty | EnumInterviewDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.InterviewDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewDifficultyFilter<$PrismaModel>
    _max?: NestedEnumInterviewDifficultyFilter<$PrismaModel>
  }

  export type EnumExperienceInWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceInWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceIn
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceInFilter<$PrismaModel>
    _max?: NestedEnumExperienceInFilter<$PrismaModel>
  }

  export type EnumGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Group | EnumGroupFieldRefInput<$PrismaModel>
    in?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupWithAggregatesFilter<$PrismaModel> | $Enums.Group
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupFilter<$PrismaModel>
    _max?: NestedEnumGroupFilter<$PrismaModel>
  }

  export type EnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }

  export type EnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewStatusFilter<$PrismaModel>
    _max?: NestedEnumInterviewStatusFilter<$PrismaModel>
  }

  export type EnumInterviewCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewCategory | EnumInterviewCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InterviewCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewCategoryFilter<$PrismaModel>
    _max?: NestedEnumInterviewCategoryFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type InterviewScalarRelationFilter = {
    is?: InterviewWhereInput
    isNot?: InterviewWhereInput
  }

  export type InterviewParticipantInterviewIdIntervieweeIdCompoundUniqueInput = {
    interviewId: string
    intervieweeId: string
  }

  export type InterviewParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    intervieweeId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeTaken?: SortOrder
  }

  export type InterviewParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    intervieweeId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeTaken?: SortOrder
  }

  export type InterviewParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    intervieweeId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeTaken?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    codeEditorRequired?: SortOrder
    questionType?: SortOrder
    options?: SortOrder
    answer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    codeEditorRequired?: SortOrder
    questionType?: SortOrder
    options?: SortOrder
    answer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    codeEditorRequired?: SortOrder
    questionType?: SortOrder
    options?: SortOrder
    answer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InterviewParticipantNullableScalarRelationFilter = {
    is?: InterviewParticipantWhereInput | null
    isNot?: InterviewParticipantWhereInput | null
  }

  export type RatingItemListRelationFilter = {
    every?: RatingItemWhereInput
    some?: RatingItemWhereInput
    none?: RatingItemWhereInput
  }

  export type RatingItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interviewId?: SortOrder
    interviewParticipantId?: SortOrder
    totalRating?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    improvements?: SortOrder
    assessment?: SortOrder
    recommendedForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    totalRating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interviewId?: SortOrder
    interviewParticipantId?: SortOrder
    totalRating?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    improvements?: SortOrder
    assessment?: SortOrder
    recommendedForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interviewId?: SortOrder
    interviewParticipantId?: SortOrder
    totalRating?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    improvements?: SortOrder
    assessment?: SortOrder
    recommendedForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    totalRating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FeedbackScalarRelationFilter = {
    is?: FeedbackWhereInput
    isNot?: FeedbackWhereInput
  }

  export type RatingItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    feedbackId?: SortOrder
  }

  export type RatingItemAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RatingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    feedbackId?: SortOrder
  }

  export type RatingItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    feedbackId?: SortOrder
  }

  export type RatingItemSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type InterviewCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InterviewCreateWithoutCreatedByInput, InterviewUncheckedCreateWithoutCreatedByInput> | InterviewCreateWithoutCreatedByInput[] | InterviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCreatedByInput | InterviewCreateOrConnectWithoutCreatedByInput[]
    createMany?: InterviewCreateManyCreatedByInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type InterviewParticipantCreateNestedManyWithoutIntervieweeInput = {
    create?: XOR<InterviewParticipantCreateWithoutIntervieweeInput, InterviewParticipantUncheckedCreateWithoutIntervieweeInput> | InterviewParticipantCreateWithoutIntervieweeInput[] | InterviewParticipantUncheckedCreateWithoutIntervieweeInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutIntervieweeInput | InterviewParticipantCreateOrConnectWithoutIntervieweeInput[]
    createMany?: InterviewParticipantCreateManyIntervieweeInputEnvelope
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InterviewCreateWithoutCreatedByInput, InterviewUncheckedCreateWithoutCreatedByInput> | InterviewCreateWithoutCreatedByInput[] | InterviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCreatedByInput | InterviewCreateOrConnectWithoutCreatedByInput[]
    createMany?: InterviewCreateManyCreatedByInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type InterviewParticipantUncheckedCreateNestedManyWithoutIntervieweeInput = {
    create?: XOR<InterviewParticipantCreateWithoutIntervieweeInput, InterviewParticipantUncheckedCreateWithoutIntervieweeInput> | InterviewParticipantCreateWithoutIntervieweeInput[] | InterviewParticipantUncheckedCreateWithoutIntervieweeInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutIntervieweeInput | InterviewParticipantCreateOrConnectWithoutIntervieweeInput[]
    createMany?: InterviewParticipantCreateManyIntervieweeInputEnvelope
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumExperienceInFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceIn | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InterviewUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InterviewCreateWithoutCreatedByInput, InterviewUncheckedCreateWithoutCreatedByInput> | InterviewCreateWithoutCreatedByInput[] | InterviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCreatedByInput | InterviewCreateOrConnectWithoutCreatedByInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutCreatedByInput | InterviewUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InterviewCreateManyCreatedByInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutCreatedByInput | InterviewUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutCreatedByInput | InterviewUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type InterviewParticipantUpdateManyWithoutIntervieweeNestedInput = {
    create?: XOR<InterviewParticipantCreateWithoutIntervieweeInput, InterviewParticipantUncheckedCreateWithoutIntervieweeInput> | InterviewParticipantCreateWithoutIntervieweeInput[] | InterviewParticipantUncheckedCreateWithoutIntervieweeInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutIntervieweeInput | InterviewParticipantCreateOrConnectWithoutIntervieweeInput[]
    upsert?: InterviewParticipantUpsertWithWhereUniqueWithoutIntervieweeInput | InterviewParticipantUpsertWithWhereUniqueWithoutIntervieweeInput[]
    createMany?: InterviewParticipantCreateManyIntervieweeInputEnvelope
    set?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    disconnect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    delete?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    update?: InterviewParticipantUpdateWithWhereUniqueWithoutIntervieweeInput | InterviewParticipantUpdateWithWhereUniqueWithoutIntervieweeInput[]
    updateMany?: InterviewParticipantUpdateManyWithWhereWithoutIntervieweeInput | InterviewParticipantUpdateManyWithWhereWithoutIntervieweeInput[]
    deleteMany?: InterviewParticipantScalarWhereInput | InterviewParticipantScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type InterviewUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InterviewCreateWithoutCreatedByInput, InterviewUncheckedCreateWithoutCreatedByInput> | InterviewCreateWithoutCreatedByInput[] | InterviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCreatedByInput | InterviewCreateOrConnectWithoutCreatedByInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutCreatedByInput | InterviewUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InterviewCreateManyCreatedByInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutCreatedByInput | InterviewUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutCreatedByInput | InterviewUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type InterviewParticipantUncheckedUpdateManyWithoutIntervieweeNestedInput = {
    create?: XOR<InterviewParticipantCreateWithoutIntervieweeInput, InterviewParticipantUncheckedCreateWithoutIntervieweeInput> | InterviewParticipantCreateWithoutIntervieweeInput[] | InterviewParticipantUncheckedCreateWithoutIntervieweeInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutIntervieweeInput | InterviewParticipantCreateOrConnectWithoutIntervieweeInput[]
    upsert?: InterviewParticipantUpsertWithWhereUniqueWithoutIntervieweeInput | InterviewParticipantUpsertWithWhereUniqueWithoutIntervieweeInput[]
    createMany?: InterviewParticipantCreateManyIntervieweeInputEnvelope
    set?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    disconnect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    delete?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    update?: InterviewParticipantUpdateWithWhereUniqueWithoutIntervieweeInput | InterviewParticipantUpdateWithWhereUniqueWithoutIntervieweeInput[]
    updateMany?: InterviewParticipantUpdateManyWithWhereWithoutIntervieweeInput | InterviewParticipantUpdateManyWithWhereWithoutIntervieweeInput[]
    deleteMany?: InterviewParticipantScalarWhereInput | InterviewParticipantScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedInterviewsInput = {
    create?: XOR<UserCreateWithoutCreatedInterviewsInput, UserUncheckedCreateWithoutCreatedInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedInterviewsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutInterviewInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type InterviewParticipantCreateNestedManyWithoutInterviewInput = {
    create?: XOR<InterviewParticipantCreateWithoutInterviewInput, InterviewParticipantUncheckedCreateWithoutInterviewInput> | InterviewParticipantCreateWithoutInterviewInput[] | InterviewParticipantUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutInterviewInput | InterviewParticipantCreateOrConnectWithoutInterviewInput[]
    createMany?: InterviewParticipantCreateManyInterviewInputEnvelope
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutInterviewInput = {
    create?: XOR<FeedbackCreateWithoutInterviewInput, FeedbackUncheckedCreateWithoutInterviewInput> | FeedbackCreateWithoutInterviewInput[] | FeedbackUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewInput | FeedbackCreateOrConnectWithoutInterviewInput[]
    createMany?: FeedbackCreateManyInterviewInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type InterviewParticipantUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<InterviewParticipantCreateWithoutInterviewInput, InterviewParticipantUncheckedCreateWithoutInterviewInput> | InterviewParticipantCreateWithoutInterviewInput[] | InterviewParticipantUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutInterviewInput | InterviewParticipantCreateOrConnectWithoutInterviewInput[]
    createMany?: InterviewParticipantCreateManyInterviewInputEnvelope
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<FeedbackCreateWithoutInterviewInput, FeedbackUncheckedCreateWithoutInterviewInput> | FeedbackCreateWithoutInterviewInput[] | FeedbackUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewInput | FeedbackCreateOrConnectWithoutInterviewInput[]
    createMany?: FeedbackCreateManyInterviewInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type EnumCreatedByRoleFieldUpdateOperationsInput = {
    set?: $Enums.CreatedByRole
  }

  export type EnumInterviewTypeFieldUpdateOperationsInput = {
    set?: $Enums.InterviewType
  }

  export type EnumInterviewDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.InterviewDifficulty
  }

  export type EnumExperienceInFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceIn
  }

  export type EnumGroupFieldUpdateOperationsInput = {
    set?: $Enums.Group
  }

  export type EnumAssessmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentType
  }

  export type EnumInterviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.InterviewStatus
  }

  export type EnumInterviewCategoryFieldUpdateOperationsInput = {
    set?: $Enums.InterviewCategory
  }

  export type UserUpdateOneRequiredWithoutCreatedInterviewsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedInterviewsInput, UserUncheckedCreateWithoutCreatedInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedInterviewsInput
    upsert?: UserUpsertWithoutCreatedInterviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedInterviewsInput, UserUpdateWithoutCreatedInterviewsInput>, UserUncheckedUpdateWithoutCreatedInterviewsInput>
  }

  export type QuestionUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutInterviewInput | QuestionUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutInterviewInput | QuestionUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutInterviewInput | QuestionUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InterviewParticipantUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<InterviewParticipantCreateWithoutInterviewInput, InterviewParticipantUncheckedCreateWithoutInterviewInput> | InterviewParticipantCreateWithoutInterviewInput[] | InterviewParticipantUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutInterviewInput | InterviewParticipantCreateOrConnectWithoutInterviewInput[]
    upsert?: InterviewParticipantUpsertWithWhereUniqueWithoutInterviewInput | InterviewParticipantUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: InterviewParticipantCreateManyInterviewInputEnvelope
    set?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    disconnect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    delete?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    update?: InterviewParticipantUpdateWithWhereUniqueWithoutInterviewInput | InterviewParticipantUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: InterviewParticipantUpdateManyWithWhereWithoutInterviewInput | InterviewParticipantUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: InterviewParticipantScalarWhereInput | InterviewParticipantScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<FeedbackCreateWithoutInterviewInput, FeedbackUncheckedCreateWithoutInterviewInput> | FeedbackCreateWithoutInterviewInput[] | FeedbackUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewInput | FeedbackCreateOrConnectWithoutInterviewInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutInterviewInput | FeedbackUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: FeedbackCreateManyInterviewInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutInterviewInput | FeedbackUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutInterviewInput | FeedbackUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutInterviewInput | QuestionUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutInterviewInput | QuestionUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutInterviewInput | QuestionUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InterviewParticipantUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<InterviewParticipantCreateWithoutInterviewInput, InterviewParticipantUncheckedCreateWithoutInterviewInput> | InterviewParticipantCreateWithoutInterviewInput[] | InterviewParticipantUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutInterviewInput | InterviewParticipantCreateOrConnectWithoutInterviewInput[]
    upsert?: InterviewParticipantUpsertWithWhereUniqueWithoutInterviewInput | InterviewParticipantUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: InterviewParticipantCreateManyInterviewInputEnvelope
    set?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    disconnect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    delete?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    connect?: InterviewParticipantWhereUniqueInput | InterviewParticipantWhereUniqueInput[]
    update?: InterviewParticipantUpdateWithWhereUniqueWithoutInterviewInput | InterviewParticipantUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: InterviewParticipantUpdateManyWithWhereWithoutInterviewInput | InterviewParticipantUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: InterviewParticipantScalarWhereInput | InterviewParticipantScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<FeedbackCreateWithoutInterviewInput, FeedbackUncheckedCreateWithoutInterviewInput> | FeedbackCreateWithoutInterviewInput[] | FeedbackUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewInput | FeedbackCreateOrConnectWithoutInterviewInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutInterviewInput | FeedbackUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: FeedbackCreateManyInterviewInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutInterviewInput | FeedbackUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutInterviewInput | FeedbackUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type InterviewCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<InterviewCreateWithoutParticipantsInput, InterviewUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutParticipantsInput
    connect?: InterviewWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipatedInterviewsInput = {
    create?: XOR<UserCreateWithoutParticipatedInterviewsInput, UserUncheckedCreateWithoutParticipatedInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipatedInterviewsInput
    connect?: UserWhereUniqueInput
  }

  export type FeedbackCreateNestedManyWithoutInterviewParticipantInput = {
    create?: XOR<FeedbackCreateWithoutInterviewParticipantInput, FeedbackUncheckedCreateWithoutInterviewParticipantInput> | FeedbackCreateWithoutInterviewParticipantInput[] | FeedbackUncheckedCreateWithoutInterviewParticipantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewParticipantInput | FeedbackCreateOrConnectWithoutInterviewParticipantInput[]
    createMany?: FeedbackCreateManyInterviewParticipantInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutInterviewParticipantInput = {
    create?: XOR<FeedbackCreateWithoutInterviewParticipantInput, FeedbackUncheckedCreateWithoutInterviewParticipantInput> | FeedbackCreateWithoutInterviewParticipantInput[] | FeedbackUncheckedCreateWithoutInterviewParticipantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewParticipantInput | FeedbackCreateOrConnectWithoutInterviewParticipantInput[]
    createMany?: FeedbackCreateManyInterviewParticipantInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type InterviewUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<InterviewCreateWithoutParticipantsInput, InterviewUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutParticipantsInput
    upsert?: InterviewUpsertWithoutParticipantsInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutParticipantsInput, InterviewUpdateWithoutParticipantsInput>, InterviewUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipatedInterviewsNestedInput = {
    create?: XOR<UserCreateWithoutParticipatedInterviewsInput, UserUncheckedCreateWithoutParticipatedInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipatedInterviewsInput
    upsert?: UserUpsertWithoutParticipatedInterviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipatedInterviewsInput, UserUpdateWithoutParticipatedInterviewsInput>, UserUncheckedUpdateWithoutParticipatedInterviewsInput>
  }

  export type FeedbackUpdateManyWithoutInterviewParticipantNestedInput = {
    create?: XOR<FeedbackCreateWithoutInterviewParticipantInput, FeedbackUncheckedCreateWithoutInterviewParticipantInput> | FeedbackCreateWithoutInterviewParticipantInput[] | FeedbackUncheckedCreateWithoutInterviewParticipantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewParticipantInput | FeedbackCreateOrConnectWithoutInterviewParticipantInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutInterviewParticipantInput | FeedbackUpsertWithWhereUniqueWithoutInterviewParticipantInput[]
    createMany?: FeedbackCreateManyInterviewParticipantInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutInterviewParticipantInput | FeedbackUpdateWithWhereUniqueWithoutInterviewParticipantInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutInterviewParticipantInput | FeedbackUpdateManyWithWhereWithoutInterviewParticipantInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutInterviewParticipantNestedInput = {
    create?: XOR<FeedbackCreateWithoutInterviewParticipantInput, FeedbackUncheckedCreateWithoutInterviewParticipantInput> | FeedbackCreateWithoutInterviewParticipantInput[] | FeedbackUncheckedCreateWithoutInterviewParticipantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutInterviewParticipantInput | FeedbackCreateOrConnectWithoutInterviewParticipantInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutInterviewParticipantInput | FeedbackUpsertWithWhereUniqueWithoutInterviewParticipantInput[]
    createMany?: FeedbackCreateManyInterviewParticipantInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutInterviewParticipantInput | FeedbackUpdateWithWhereUniqueWithoutInterviewParticipantInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutInterviewParticipantInput | FeedbackUpdateManyWithWhereWithoutInterviewParticipantInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type InterviewCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutQuestionsInput
    connect?: InterviewWhereUniqueInput
  }

  export type InterviewUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutQuestionsInput
    upsert?: InterviewUpsertWithoutQuestionsInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutQuestionsInput, InterviewUpdateWithoutQuestionsInput>, InterviewUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
  }

  export type InterviewCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<InterviewCreateWithoutFeedbacksInput, InterviewUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutFeedbacksInput
    connect?: InterviewWhereUniqueInput
  }

  export type InterviewParticipantCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<InterviewParticipantCreateWithoutFeedbacksInput, InterviewParticipantUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutFeedbacksInput
    connect?: InterviewParticipantWhereUniqueInput
  }

  export type RatingItemCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<RatingItemCreateWithoutFeedbackInput, RatingItemUncheckedCreateWithoutFeedbackInput> | RatingItemCreateWithoutFeedbackInput[] | RatingItemUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: RatingItemCreateOrConnectWithoutFeedbackInput | RatingItemCreateOrConnectWithoutFeedbackInput[]
    createMany?: RatingItemCreateManyFeedbackInputEnvelope
    connect?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
  }

  export type RatingItemUncheckedCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<RatingItemCreateWithoutFeedbackInput, RatingItemUncheckedCreateWithoutFeedbackInput> | RatingItemCreateWithoutFeedbackInput[] | RatingItemUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: RatingItemCreateOrConnectWithoutFeedbackInput | RatingItemCreateOrConnectWithoutFeedbackInput[]
    createMany?: RatingItemCreateManyFeedbackInputEnvelope
    connect?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    upsert?: UserUpsertWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksInput, UserUpdateWithoutFeedbacksInput>, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type InterviewUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<InterviewCreateWithoutFeedbacksInput, InterviewUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutFeedbacksInput
    upsert?: InterviewUpsertWithoutFeedbacksInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutFeedbacksInput, InterviewUpdateWithoutFeedbacksInput>, InterviewUncheckedUpdateWithoutFeedbacksInput>
  }

  export type InterviewParticipantUpdateOneWithoutFeedbacksNestedInput = {
    create?: XOR<InterviewParticipantCreateWithoutFeedbacksInput, InterviewParticipantUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: InterviewParticipantCreateOrConnectWithoutFeedbacksInput
    upsert?: InterviewParticipantUpsertWithoutFeedbacksInput
    disconnect?: InterviewParticipantWhereInput | boolean
    delete?: InterviewParticipantWhereInput | boolean
    connect?: InterviewParticipantWhereUniqueInput
    update?: XOR<XOR<InterviewParticipantUpdateToOneWithWhereWithoutFeedbacksInput, InterviewParticipantUpdateWithoutFeedbacksInput>, InterviewParticipantUncheckedUpdateWithoutFeedbacksInput>
  }

  export type RatingItemUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<RatingItemCreateWithoutFeedbackInput, RatingItemUncheckedCreateWithoutFeedbackInput> | RatingItemCreateWithoutFeedbackInput[] | RatingItemUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: RatingItemCreateOrConnectWithoutFeedbackInput | RatingItemCreateOrConnectWithoutFeedbackInput[]
    upsert?: RatingItemUpsertWithWhereUniqueWithoutFeedbackInput | RatingItemUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: RatingItemCreateManyFeedbackInputEnvelope
    set?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    disconnect?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    delete?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    connect?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    update?: RatingItemUpdateWithWhereUniqueWithoutFeedbackInput | RatingItemUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: RatingItemUpdateManyWithWhereWithoutFeedbackInput | RatingItemUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: RatingItemScalarWhereInput | RatingItemScalarWhereInput[]
  }

  export type RatingItemUncheckedUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<RatingItemCreateWithoutFeedbackInput, RatingItemUncheckedCreateWithoutFeedbackInput> | RatingItemCreateWithoutFeedbackInput[] | RatingItemUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: RatingItemCreateOrConnectWithoutFeedbackInput | RatingItemCreateOrConnectWithoutFeedbackInput[]
    upsert?: RatingItemUpsertWithWhereUniqueWithoutFeedbackInput | RatingItemUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: RatingItemCreateManyFeedbackInputEnvelope
    set?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    disconnect?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    delete?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    connect?: RatingItemWhereUniqueInput | RatingItemWhereUniqueInput[]
    update?: RatingItemUpdateWithWhereUniqueWithoutFeedbackInput | RatingItemUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: RatingItemUpdateManyWithWhereWithoutFeedbackInput | RatingItemUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: RatingItemScalarWhereInput | RatingItemScalarWhereInput[]
  }

  export type FeedbackCreateNestedOneWithoutRatingInput = {
    create?: XOR<FeedbackCreateWithoutRatingInput, FeedbackUncheckedCreateWithoutRatingInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutRatingInput
    connect?: FeedbackWhereUniqueInput
  }

  export type FeedbackUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<FeedbackCreateWithoutRatingInput, FeedbackUncheckedCreateWithoutRatingInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutRatingInput
    upsert?: FeedbackUpsertWithoutRatingInput
    connect?: FeedbackWhereUniqueInput
    update?: XOR<XOR<FeedbackUpdateToOneWithWhereWithoutRatingInput, FeedbackUpdateWithoutRatingInput>, FeedbackUncheckedUpdateWithoutRatingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumExperienceInNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExperienceInNullableFilter<$PrismaModel> | $Enums.ExperienceIn | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumExperienceInNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExperienceInNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceIn | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExperienceInNullableFilter<$PrismaModel>
    _max?: NestedEnumExperienceInNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCreatedByRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByRole | EnumCreatedByRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCreatedByRoleFilter<$PrismaModel> | $Enums.CreatedByRole
  }

  export type NestedEnumInterviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeFilter<$PrismaModel> | $Enums.InterviewType
  }

  export type NestedEnumInterviewDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewDifficulty | EnumInterviewDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewDifficultyFilter<$PrismaModel> | $Enums.InterviewDifficulty
  }

  export type NestedEnumExperienceInFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceInFilter<$PrismaModel> | $Enums.ExperienceIn
  }

  export type NestedEnumGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.Group | EnumGroupFieldRefInput<$PrismaModel>
    in?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupFilter<$PrismaModel> | $Enums.Group
  }

  export type NestedEnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type NestedEnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus
  }

  export type NestedEnumInterviewCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewCategory | EnumInterviewCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewCategoryFilter<$PrismaModel> | $Enums.InterviewCategory
  }

  export type NestedEnumCreatedByRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByRole | EnumCreatedByRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreatedByRole[] | ListEnumCreatedByRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCreatedByRoleWithAggregatesFilter<$PrismaModel> | $Enums.CreatedByRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreatedByRoleFilter<$PrismaModel>
    _max?: NestedEnumCreatedByRoleFilter<$PrismaModel>
  }

  export type NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewTypeFilter<$PrismaModel>
    _max?: NestedEnumInterviewTypeFilter<$PrismaModel>
  }

  export type NestedEnumInterviewDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewDifficulty | EnumInterviewDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewDifficulty[] | ListEnumInterviewDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.InterviewDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewDifficultyFilter<$PrismaModel>
    _max?: NestedEnumInterviewDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumExperienceInWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceIn | EnumExperienceInFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceIn[] | ListEnumExperienceInFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceInWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceIn
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceInFilter<$PrismaModel>
    _max?: NestedEnumExperienceInFilter<$PrismaModel>
  }

  export type NestedEnumGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Group | EnumGroupFieldRefInput<$PrismaModel>
    in?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.Group[] | ListEnumGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupWithAggregatesFilter<$PrismaModel> | $Enums.Group
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupFilter<$PrismaModel>
    _max?: NestedEnumGroupFilter<$PrismaModel>
  }

  export type NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewStatusFilter<$PrismaModel>
    _max?: NestedEnumInterviewStatusFilter<$PrismaModel>
  }

  export type NestedEnumInterviewCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewCategory | EnumInterviewCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewCategory[] | ListEnumInterviewCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InterviewCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewCategoryFilter<$PrismaModel>
    _max?: NestedEnumInterviewCategoryFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InterviewCreateWithoutCreatedByInput = {
    id?: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutInterviewInput
    participants?: InterviewParticipantCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
    participants?: InterviewParticipantUncheckedCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutCreatedByInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutCreatedByInput, InterviewUncheckedCreateWithoutCreatedByInput>
  }

  export type InterviewCreateManyCreatedByInputEnvelope = {
    data: InterviewCreateManyCreatedByInput | InterviewCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type InterviewParticipantCreateWithoutIntervieweeInput = {
    id?: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
    interview: InterviewCreateNestedOneWithoutParticipantsInput
    feedbacks?: FeedbackCreateNestedManyWithoutInterviewParticipantInput
  }

  export type InterviewParticipantUncheckedCreateWithoutIntervieweeInput = {
    id?: string
    interviewId: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutInterviewParticipantInput
  }

  export type InterviewParticipantCreateOrConnectWithoutIntervieweeInput = {
    where: InterviewParticipantWhereUniqueInput
    create: XOR<InterviewParticipantCreateWithoutIntervieweeInput, InterviewParticipantUncheckedCreateWithoutIntervieweeInput>
  }

  export type InterviewParticipantCreateManyIntervieweeInputEnvelope = {
    data: InterviewParticipantCreateManyIntervieweeInput | InterviewParticipantCreateManyIntervieweeInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutUserInput = {
    id?: string
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    interview: InterviewCreateNestedOneWithoutFeedbacksInput
    InterviewParticipant?: InterviewParticipantCreateNestedOneWithoutFeedbacksInput
    rating?: RatingItemCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: string
    interviewId: string
    interviewParticipantId?: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: RatingItemUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InterviewUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutCreatedByInput, InterviewUncheckedUpdateWithoutCreatedByInput>
    create: XOR<InterviewCreateWithoutCreatedByInput, InterviewUncheckedCreateWithoutCreatedByInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutCreatedByInput, InterviewUncheckedUpdateWithoutCreatedByInput>
  }

  export type InterviewUpdateManyWithWhereWithoutCreatedByInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type InterviewScalarWhereInput = {
    AND?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    OR?: InterviewScalarWhereInput[]
    NOT?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    id?: StringFilter<"Interview"> | string
    createdById?: StringFilter<"Interview"> | string
    createdByRole?: EnumCreatedByRoleFilter<"Interview"> | $Enums.CreatedByRole
    type?: EnumInterviewTypeFilter<"Interview"> | $Enums.InterviewType
    duration?: IntFilter<"Interview"> | number
    difficulty?: EnumInterviewDifficultyFilter<"Interview"> | $Enums.InterviewDifficulty
    experience?: IntFilter<"Interview"> | number
    experienceIn?: EnumExperienceInFilter<"Interview"> | $Enums.ExperienceIn
    role?: StringFilter<"Interview"> | string
    description?: StringFilter<"Interview"> | string
    keywords?: StringFilter<"Interview"> | string
    topic?: StringNullableFilter<"Interview"> | string | null
    companyName?: StringNullableFilter<"Interview"> | string | null
    companyLogo?: StringNullableFilter<"Interview"> | string | null
    group?: EnumGroupFilter<"Interview"> | $Enums.Group
    assessmentType?: EnumAssessmentTypeFilter<"Interview"> | $Enums.AssessmentType
    noOfQuestions?: IntFilter<"Interview"> | number
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    validateTill?: DateTimeNullableFilter<"Interview"> | Date | string | null
    category?: EnumInterviewCategoryFilter<"Interview"> | $Enums.InterviewCategory
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
  }

  export type InterviewParticipantUpsertWithWhereUniqueWithoutIntervieweeInput = {
    where: InterviewParticipantWhereUniqueInput
    update: XOR<InterviewParticipantUpdateWithoutIntervieweeInput, InterviewParticipantUncheckedUpdateWithoutIntervieweeInput>
    create: XOR<InterviewParticipantCreateWithoutIntervieweeInput, InterviewParticipantUncheckedCreateWithoutIntervieweeInput>
  }

  export type InterviewParticipantUpdateWithWhereUniqueWithoutIntervieweeInput = {
    where: InterviewParticipantWhereUniqueInput
    data: XOR<InterviewParticipantUpdateWithoutIntervieweeInput, InterviewParticipantUncheckedUpdateWithoutIntervieweeInput>
  }

  export type InterviewParticipantUpdateManyWithWhereWithoutIntervieweeInput = {
    where: InterviewParticipantScalarWhereInput
    data: XOR<InterviewParticipantUpdateManyMutationInput, InterviewParticipantUncheckedUpdateManyWithoutIntervieweeInput>
  }

  export type InterviewParticipantScalarWhereInput = {
    AND?: InterviewParticipantScalarWhereInput | InterviewParticipantScalarWhereInput[]
    OR?: InterviewParticipantScalarWhereInput[]
    NOT?: InterviewParticipantScalarWhereInput | InterviewParticipantScalarWhereInput[]
    id?: StringFilter<"InterviewParticipant"> | string
    interviewId?: StringFilter<"InterviewParticipant"> | string
    intervieweeId?: StringFilter<"InterviewParticipant"> | string
    status?: EnumStatusFilter<"InterviewParticipant"> | $Enums.Status
    startedAt?: DateTimeNullableFilter<"InterviewParticipant"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"InterviewParticipant"> | Date | string | null
    timeTaken?: StringNullableFilter<"InterviewParticipant"> | string | null
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    interviewId?: StringFilter<"Feedback"> | string
    interviewParticipantId?: StringNullableFilter<"Feedback"> | string | null
    totalRating?: FloatFilter<"Feedback"> | number
    summary?: StringFilter<"Feedback"> | string
    strengths?: StringFilter<"Feedback"> | string
    weaknesses?: StringFilter<"Feedback"> | string
    improvements?: StringFilter<"Feedback"> | string
    assessment?: StringFilter<"Feedback"> | string
    recommendedForJob?: BoolFilter<"Feedback"> | boolean
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type UserCreateWithoutCreatedInterviewsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participatedInterviews?: InterviewParticipantCreateNestedManyWithoutIntervieweeInput
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedInterviewsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participatedInterviews?: InterviewParticipantUncheckedCreateNestedManyWithoutIntervieweeInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedInterviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedInterviewsInput, UserUncheckedCreateWithoutCreatedInterviewsInput>
  }

  export type QuestionCreateWithoutInterviewInput = {
    id?: string
    question: string
    codeEditorRequired?: boolean
    questionType: string
    options?: string | null
    answer?: string | null
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutInterviewInput = {
    id?: string
    question: string
    codeEditorRequired?: boolean
    questionType: string
    options?: string | null
    answer?: string | null
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutInterviewInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput>
  }

  export type QuestionCreateManyInterviewInputEnvelope = {
    data: QuestionCreateManyInterviewInput | QuestionCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type InterviewParticipantCreateWithoutInterviewInput = {
    id?: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
    interviewee: UserCreateNestedOneWithoutParticipatedInterviewsInput
    feedbacks?: FeedbackCreateNestedManyWithoutInterviewParticipantInput
  }

  export type InterviewParticipantUncheckedCreateWithoutInterviewInput = {
    id?: string
    intervieweeId: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutInterviewParticipantInput
  }

  export type InterviewParticipantCreateOrConnectWithoutInterviewInput = {
    where: InterviewParticipantWhereUniqueInput
    create: XOR<InterviewParticipantCreateWithoutInterviewInput, InterviewParticipantUncheckedCreateWithoutInterviewInput>
  }

  export type InterviewParticipantCreateManyInterviewInputEnvelope = {
    data: InterviewParticipantCreateManyInterviewInput | InterviewParticipantCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutInterviewInput = {
    id?: string
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
    InterviewParticipant?: InterviewParticipantCreateNestedOneWithoutFeedbacksInput
    rating?: RatingItemCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutInterviewInput = {
    id?: string
    userId: string
    interviewParticipantId?: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: RatingItemUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackCreateOrConnectWithoutInterviewInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutInterviewInput, FeedbackUncheckedCreateWithoutInterviewInput>
  }

  export type FeedbackCreateManyInterviewInputEnvelope = {
    data: FeedbackCreateManyInterviewInput | FeedbackCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedInterviewsInput = {
    update: XOR<UserUpdateWithoutCreatedInterviewsInput, UserUncheckedUpdateWithoutCreatedInterviewsInput>
    create: XOR<UserCreateWithoutCreatedInterviewsInput, UserUncheckedCreateWithoutCreatedInterviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedInterviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedInterviewsInput, UserUncheckedUpdateWithoutCreatedInterviewsInput>
  }

  export type UserUpdateWithoutCreatedInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participatedInterviews?: InterviewParticipantUpdateManyWithoutIntervieweeNestedInput
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participatedInterviews?: InterviewParticipantUncheckedUpdateManyWithoutIntervieweeNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutInterviewInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutInterviewInput, QuestionUncheckedUpdateWithoutInterviewInput>
    create: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutInterviewInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutInterviewInput, QuestionUncheckedUpdateWithoutInterviewInput>
  }

  export type QuestionUpdateManyWithWhereWithoutInterviewInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutInterviewInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    interviewId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    codeEditorRequired?: BoolFilter<"Question"> | boolean
    questionType?: StringFilter<"Question"> | string
    options?: StringNullableFilter<"Question"> | string | null
    answer?: StringNullableFilter<"Question"> | string | null
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type InterviewParticipantUpsertWithWhereUniqueWithoutInterviewInput = {
    where: InterviewParticipantWhereUniqueInput
    update: XOR<InterviewParticipantUpdateWithoutInterviewInput, InterviewParticipantUncheckedUpdateWithoutInterviewInput>
    create: XOR<InterviewParticipantCreateWithoutInterviewInput, InterviewParticipantUncheckedCreateWithoutInterviewInput>
  }

  export type InterviewParticipantUpdateWithWhereUniqueWithoutInterviewInput = {
    where: InterviewParticipantWhereUniqueInput
    data: XOR<InterviewParticipantUpdateWithoutInterviewInput, InterviewParticipantUncheckedUpdateWithoutInterviewInput>
  }

  export type InterviewParticipantUpdateManyWithWhereWithoutInterviewInput = {
    where: InterviewParticipantScalarWhereInput
    data: XOR<InterviewParticipantUpdateManyMutationInput, InterviewParticipantUncheckedUpdateManyWithoutInterviewInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutInterviewInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutInterviewInput, FeedbackUncheckedUpdateWithoutInterviewInput>
    create: XOR<FeedbackCreateWithoutInterviewInput, FeedbackUncheckedCreateWithoutInterviewInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutInterviewInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutInterviewInput, FeedbackUncheckedUpdateWithoutInterviewInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutInterviewInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutInterviewInput>
  }

  export type InterviewCreateWithoutParticipantsInput = {
    id?: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedInterviewsInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutParticipantsInput = {
    id?: string
    createdById: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutParticipantsInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutParticipantsInput, InterviewUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutParticipatedInterviewsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdInterviews?: InterviewCreateNestedManyWithoutCreatedByInput
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipatedInterviewsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdInterviews?: InterviewUncheckedCreateNestedManyWithoutCreatedByInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipatedInterviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipatedInterviewsInput, UserUncheckedCreateWithoutParticipatedInterviewsInput>
  }

  export type FeedbackCreateWithoutInterviewParticipantInput = {
    id?: string
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
    interview: InterviewCreateNestedOneWithoutFeedbacksInput
    rating?: RatingItemCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutInterviewParticipantInput = {
    id?: string
    userId: string
    interviewId: string
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: RatingItemUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackCreateOrConnectWithoutInterviewParticipantInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutInterviewParticipantInput, FeedbackUncheckedCreateWithoutInterviewParticipantInput>
  }

  export type FeedbackCreateManyInterviewParticipantInputEnvelope = {
    data: FeedbackCreateManyInterviewParticipantInput | FeedbackCreateManyInterviewParticipantInput[]
    skipDuplicates?: boolean
  }

  export type InterviewUpsertWithoutParticipantsInput = {
    update: XOR<InterviewUpdateWithoutParticipantsInput, InterviewUncheckedUpdateWithoutParticipantsInput>
    create: XOR<InterviewCreateWithoutParticipantsInput, InterviewUncheckedCreateWithoutParticipantsInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutParticipantsInput, InterviewUncheckedUpdateWithoutParticipantsInput>
  }

  export type InterviewUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedInterviewsNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type UserUpsertWithoutParticipatedInterviewsInput = {
    update: XOR<UserUpdateWithoutParticipatedInterviewsInput, UserUncheckedUpdateWithoutParticipatedInterviewsInput>
    create: XOR<UserCreateWithoutParticipatedInterviewsInput, UserUncheckedCreateWithoutParticipatedInterviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipatedInterviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipatedInterviewsInput, UserUncheckedUpdateWithoutParticipatedInterviewsInput>
  }

  export type UserUpdateWithoutParticipatedInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdInterviews?: InterviewUpdateManyWithoutCreatedByNestedInput
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipatedInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdInterviews?: InterviewUncheckedUpdateManyWithoutCreatedByNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeedbackUpsertWithWhereUniqueWithoutInterviewParticipantInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutInterviewParticipantInput, FeedbackUncheckedUpdateWithoutInterviewParticipantInput>
    create: XOR<FeedbackCreateWithoutInterviewParticipantInput, FeedbackUncheckedCreateWithoutInterviewParticipantInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutInterviewParticipantInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutInterviewParticipantInput, FeedbackUncheckedUpdateWithoutInterviewParticipantInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutInterviewParticipantInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutInterviewParticipantInput>
  }

  export type InterviewCreateWithoutQuestionsInput = {
    id?: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedInterviewsInput
    participants?: InterviewParticipantCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutQuestionsInput = {
    id?: string
    createdById: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: InterviewParticipantUncheckedCreateNestedManyWithoutInterviewInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutQuestionsInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
  }

  export type InterviewUpsertWithoutQuestionsInput = {
    update: XOR<InterviewUpdateWithoutQuestionsInput, InterviewUncheckedUpdateWithoutQuestionsInput>
    create: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutQuestionsInput, InterviewUncheckedUpdateWithoutQuestionsInput>
  }

  export type InterviewUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedInterviewsNestedInput
    participants?: InterviewParticipantUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: InterviewParticipantUncheckedUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type UserCreateWithoutFeedbacksInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdInterviews?: InterviewCreateNestedManyWithoutCreatedByInput
    participatedInterviews?: InterviewParticipantCreateNestedManyWithoutIntervieweeInput
  }

  export type UserUncheckedCreateWithoutFeedbacksInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    role?: $Enums.Role | null
    companyName?: string | null
    position?: string | null
    mobile?: string | null
    experience?: number
    experienceIn?: $Enums.ExperienceIn | null
    bio?: string | null
    linkedIn?: string | null
    gitHub?: string | null
    location?: string | null
    resume?: string | null
    coins?: number
    verified?: boolean
    verifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdInterviews?: InterviewUncheckedCreateNestedManyWithoutCreatedByInput
    participatedInterviews?: InterviewParticipantUncheckedCreateNestedManyWithoutIntervieweeInput
  }

  export type UserCreateOrConnectWithoutFeedbacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
  }

  export type InterviewCreateWithoutFeedbacksInput = {
    id?: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedInterviewsInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
    participants?: InterviewParticipantCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutFeedbacksInput = {
    id?: string
    createdById: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
    participants?: InterviewParticipantUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutFeedbacksInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutFeedbacksInput, InterviewUncheckedCreateWithoutFeedbacksInput>
  }

  export type InterviewParticipantCreateWithoutFeedbacksInput = {
    id?: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
    interview: InterviewCreateNestedOneWithoutParticipantsInput
    interviewee: UserCreateNestedOneWithoutParticipatedInterviewsInput
  }

  export type InterviewParticipantUncheckedCreateWithoutFeedbacksInput = {
    id?: string
    interviewId: string
    intervieweeId: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
  }

  export type InterviewParticipantCreateOrConnectWithoutFeedbacksInput = {
    where: InterviewParticipantWhereUniqueInput
    create: XOR<InterviewParticipantCreateWithoutFeedbacksInput, InterviewParticipantUncheckedCreateWithoutFeedbacksInput>
  }

  export type RatingItemCreateWithoutFeedbackInput = {
    id?: string
    name: string
    score: number
    comment: string
  }

  export type RatingItemUncheckedCreateWithoutFeedbackInput = {
    id?: string
    name: string
    score: number
    comment: string
  }

  export type RatingItemCreateOrConnectWithoutFeedbackInput = {
    where: RatingItemWhereUniqueInput
    create: XOR<RatingItemCreateWithoutFeedbackInput, RatingItemUncheckedCreateWithoutFeedbackInput>
  }

  export type RatingItemCreateManyFeedbackInputEnvelope = {
    data: RatingItemCreateManyFeedbackInput | RatingItemCreateManyFeedbackInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFeedbacksInput = {
    update: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdInterviews?: InterviewUpdateManyWithoutCreatedByNestedInput
    participatedInterviews?: InterviewParticipantUpdateManyWithoutIntervieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: NullableEnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    gitHub?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdInterviews?: InterviewUncheckedUpdateManyWithoutCreatedByNestedInput
    participatedInterviews?: InterviewParticipantUncheckedUpdateManyWithoutIntervieweeNestedInput
  }

  export type InterviewUpsertWithoutFeedbacksInput = {
    update: XOR<InterviewUpdateWithoutFeedbacksInput, InterviewUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<InterviewCreateWithoutFeedbacksInput, InterviewUncheckedCreateWithoutFeedbacksInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutFeedbacksInput, InterviewUncheckedUpdateWithoutFeedbacksInput>
  }

  export type InterviewUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedInterviewsNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
    participants?: InterviewParticipantUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
    participants?: InterviewParticipantUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewParticipantUpsertWithoutFeedbacksInput = {
    update: XOR<InterviewParticipantUpdateWithoutFeedbacksInput, InterviewParticipantUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<InterviewParticipantCreateWithoutFeedbacksInput, InterviewParticipantUncheckedCreateWithoutFeedbacksInput>
    where?: InterviewParticipantWhereInput
  }

  export type InterviewParticipantUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: InterviewParticipantWhereInput
    data: XOR<InterviewParticipantUpdateWithoutFeedbacksInput, InterviewParticipantUncheckedUpdateWithoutFeedbacksInput>
  }

  export type InterviewParticipantUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
    interview?: InterviewUpdateOneRequiredWithoutParticipantsNestedInput
    interviewee?: UserUpdateOneRequiredWithoutParticipatedInterviewsNestedInput
  }

  export type InterviewParticipantUncheckedUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    intervieweeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingItemUpsertWithWhereUniqueWithoutFeedbackInput = {
    where: RatingItemWhereUniqueInput
    update: XOR<RatingItemUpdateWithoutFeedbackInput, RatingItemUncheckedUpdateWithoutFeedbackInput>
    create: XOR<RatingItemCreateWithoutFeedbackInput, RatingItemUncheckedCreateWithoutFeedbackInput>
  }

  export type RatingItemUpdateWithWhereUniqueWithoutFeedbackInput = {
    where: RatingItemWhereUniqueInput
    data: XOR<RatingItemUpdateWithoutFeedbackInput, RatingItemUncheckedUpdateWithoutFeedbackInput>
  }

  export type RatingItemUpdateManyWithWhereWithoutFeedbackInput = {
    where: RatingItemScalarWhereInput
    data: XOR<RatingItemUpdateManyMutationInput, RatingItemUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type RatingItemScalarWhereInput = {
    AND?: RatingItemScalarWhereInput | RatingItemScalarWhereInput[]
    OR?: RatingItemScalarWhereInput[]
    NOT?: RatingItemScalarWhereInput | RatingItemScalarWhereInput[]
    id?: StringFilter<"RatingItem"> | string
    name?: StringFilter<"RatingItem"> | string
    score?: FloatFilter<"RatingItem"> | number
    comment?: StringFilter<"RatingItem"> | string
    feedbackId?: StringFilter<"RatingItem"> | string
  }

  export type FeedbackCreateWithoutRatingInput = {
    id?: string
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
    interview: InterviewCreateNestedOneWithoutFeedbacksInput
    InterviewParticipant?: InterviewParticipantCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutRatingInput = {
    id?: string
    userId: string
    interviewId: string
    interviewParticipantId?: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutRatingInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutRatingInput, FeedbackUncheckedCreateWithoutRatingInput>
  }

  export type FeedbackUpsertWithoutRatingInput = {
    update: XOR<FeedbackUpdateWithoutRatingInput, FeedbackUncheckedUpdateWithoutRatingInput>
    create: XOR<FeedbackCreateWithoutRatingInput, FeedbackUncheckedCreateWithoutRatingInput>
    where?: FeedbackWhereInput
  }

  export type FeedbackUpdateToOneWithWhereWithoutRatingInput = {
    where?: FeedbackWhereInput
    data: XOR<FeedbackUpdateWithoutRatingInput, FeedbackUncheckedUpdateWithoutRatingInput>
  }

  export type FeedbackUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    interview?: InterviewUpdateOneRequiredWithoutFeedbacksNestedInput
    InterviewParticipant?: InterviewParticipantUpdateOneWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    interviewParticipantId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateManyCreatedByInput = {
    id?: string
    createdByRole?: $Enums.CreatedByRole
    type?: $Enums.InterviewType
    duration?: number
    difficulty?: $Enums.InterviewDifficulty
    experience?: number
    experienceIn?: $Enums.ExperienceIn
    role: string
    description: string
    keywords: string
    topic?: string | null
    companyName?: string | null
    companyLogo?: string | null
    group?: $Enums.Group
    assessmentType?: $Enums.AssessmentType
    noOfQuestions?: number
    status?: $Enums.InterviewStatus
    validateTill?: Date | string | null
    category?: $Enums.InterviewCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewParticipantCreateManyIntervieweeInput = {
    id?: string
    interviewId: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
  }

  export type FeedbackCreateManyUserInput = {
    id?: string
    interviewId: string
    interviewParticipantId?: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
    participants?: InterviewParticipantUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
    participants?: InterviewParticipantUncheckedUpdateManyWithoutInterviewNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByRole?: EnumCreatedByRoleFieldUpdateOperationsInput | $Enums.CreatedByRole
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumInterviewDifficultyFieldUpdateOperationsInput | $Enums.InterviewDifficulty
    experience?: IntFieldUpdateOperationsInput | number
    experienceIn?: EnumExperienceInFieldUpdateOperationsInput | $Enums.ExperienceIn
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    group?: EnumGroupFieldUpdateOperationsInput | $Enums.Group
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    noOfQuestions?: IntFieldUpdateOperationsInput | number
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    validateTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumInterviewCategoryFieldUpdateOperationsInput | $Enums.InterviewCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewParticipantUpdateWithoutIntervieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
    interview?: InterviewUpdateOneRequiredWithoutParticipantsNestedInput
    feedbacks?: FeedbackUpdateManyWithoutInterviewParticipantNestedInput
  }

  export type InterviewParticipantUncheckedUpdateWithoutIntervieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutInterviewParticipantNestedInput
  }

  export type InterviewParticipantUncheckedUpdateManyWithoutIntervieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutFeedbacksNestedInput
    InterviewParticipant?: InterviewParticipantUpdateOneWithoutFeedbacksNestedInput
    rating?: RatingItemUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    interviewParticipantId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingItemUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    interviewParticipantId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInterviewInput = {
    id?: string
    question: string
    codeEditorRequired?: boolean
    questionType: string
    options?: string | null
    answer?: string | null
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewParticipantCreateManyInterviewInput = {
    id?: string
    intervieweeId: string
    status?: $Enums.Status
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeTaken?: string | null
  }

  export type FeedbackCreateManyInterviewInput = {
    id?: string
    userId: string
    interviewParticipantId?: string | null
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    codeEditorRequired?: BoolFieldUpdateOperationsInput | boolean
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    codeEditorRequired?: BoolFieldUpdateOperationsInput | boolean
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    codeEditorRequired?: BoolFieldUpdateOperationsInput | boolean
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewParticipantUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
    interviewee?: UserUpdateOneRequiredWithoutParticipatedInterviewsNestedInput
    feedbacks?: FeedbackUpdateManyWithoutInterviewParticipantNestedInput
  }

  export type InterviewParticipantUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    intervieweeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutInterviewParticipantNestedInput
  }

  export type InterviewParticipantUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    intervieweeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeTaken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    InterviewParticipant?: InterviewParticipantUpdateOneWithoutFeedbacksNestedInput
    rating?: RatingItemUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewParticipantId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingItemUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewParticipantId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInterviewParticipantInput = {
    id?: string
    userId: string
    interviewId: string
    totalRating: number
    summary: string
    strengths: string
    weaknesses: string
    improvements: string
    assessment: string
    recommendedForJob: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateWithoutInterviewParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    interview?: InterviewUpdateOneRequiredWithoutFeedbacksNestedInput
    rating?: RatingItemUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutInterviewParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingItemUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateManyWithoutInterviewParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    totalRating?: FloatFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    assessment?: StringFieldUpdateOperationsInput | string
    recommendedForJob?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingItemCreateManyFeedbackInput = {
    id?: string
    name: string
    score: number
    comment: string
  }

  export type RatingItemUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RatingItemUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RatingItemUncheckedUpdateManyWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}