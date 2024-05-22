/// <reference types='codeceptjs' />
type StepsCommon = typeof import('./steps_file')
type PetClient = typeof import('./src/client/pet_client')

declare namespace CodeceptJS {
  interface SupportObject {
    I: I
    current: any
    petClient: PetClient
  }

  interface Methods extends REST, JSONResponse {}

  interface I extends ReturnType<StepsCommon>, WithTranslation<Methods> {}

  namespace Translation {
    interface Actions {}
  }
}
