
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InterviewScalarFieldEnum = {
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

exports.Prisma.InterviewParticipantScalarFieldEnum = {
  id: 'id',
  interviewId: 'interviewId',
  intervieweeId: 'intervieweeId',
  status: 'status',
  startedAt: 'startedAt',
  completedAt: 'completedAt',
  timeTaken: 'timeTaken'
};

exports.Prisma.QuestionScalarFieldEnum = {
  id: 'id',
  interviewId: 'interviewId',
  question: 'question',
  codeEditorRequired: 'codeEditorRequired',
  questionType: 'questionType',
  answer: 'answer',
  explanation: 'explanation',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OptionScalarFieldEnum = {
  id: 'id',
  questionId: 'questionId',
  option: 'option',
  isCorrect: 'isCorrect'
};

exports.Prisma.FeedbackScalarFieldEnum = {
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

exports.Prisma.RatingItemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  score: 'score',
  comment: 'comment',
  feedbackId: 'feedbackId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  INTERVIEWER: 'INTERVIEWER',
  INTERVIEWEE: 'INTERVIEWEE'
};

exports.ExperienceIn = exports.$Enums.ExperienceIn = {
  MONTHS: 'MONTHS',
  YEARS: 'YEARS'
};

exports.CreatedByRole = exports.$Enums.CreatedByRole = {
  INTERVIEWER: 'INTERVIEWER',
  INTERVIEWEE: 'INTERVIEWEE'
};

exports.InterviewType = exports.$Enums.InterviewType = {
  TECHNICAL: 'TECHNICAL',
  BEHAVIORAL: 'BEHAVIORAL',
  TECHNICAL_AND_BEHAVIORAL: 'TECHNICAL_AND_BEHAVIORAL',
  SYSTEM_DESIGN: 'SYSTEM_DESIGN',
  HR: 'HR',
  PROBLEM_SOLVING: 'PROBLEM_SOLVING'
};

exports.InterviewDifficulty = exports.$Enums.InterviewDifficulty = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

exports.Group = exports.$Enums.Group = {
  MANUAL: 'MANUAL',
  AI_BASED: 'AI_BASED'
};

exports.AssessmentType = exports.$Enums.AssessmentType = {
  MCQ_BASED: 'MCQ_BASED',
  VOICE_BASED: 'VOICE_BASED'
};

exports.InterviewStatus = exports.$Enums.InterviewStatus = {
  PENDING: 'PENDING',
  CREATED: 'CREATED',
  EXPIRED: 'EXPIRED'
};

exports.InterviewCategory = exports.$Enums.InterviewCategory = {
  JOB: 'JOB',
  MOCK: 'MOCK'
};

exports.Status = exports.$Enums.Status = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Interview: 'Interview',
  InterviewParticipant: 'InterviewParticipant',
  Question: 'Question',
  Option: 'Option',
  Feedback: 'Feedback',
  RatingItem: 'RatingItem'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
