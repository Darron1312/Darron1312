require("./hot-reload");
import "@polkadot/wasm-crypto/initOnlyAsm"; //chrome extension v3 doesnt support webassembly
import {
  backgroundOnMessageFromWindow,
  backgroundOnMessageFromNewWindow,
  backgroundOnMessageFromAction,
} from "@/libs/messenger/extension";
import { InternalOnMessageResponse } from "@/types/messenger";
import { OnMessageResponse } from "@enkryptcom/types";
import BackgroundHandler from "@/libs/background";
const backgroundHandler = new BackgroundHandler();
backgroundHandler.init().then(() => {
  backgroundOnMessageFromNewWindow(
    (msg): Promise<InternalOnMessageResponse> => {
      return backgroundHandler.internalHandler(msg);
    }
  );
  backgroundOnMessageFromWindow((msg): Promise<OnMessageResponse> => {
    return backgroundHandler.externalHandler(msg);
  });
  backgroundOnMessageFromAction((msg): Promise<InternalOnMessageResponse> => {
    return backgroundHandler.actionHandler(msg);
  });
});