package com.androidnetworking.interfaces;

import com.androidnetworking.error.ANError;

public interface ParsedRequestListener<T> {
  void onError(ANError paramANError);
  
  void onResponse(T paramT);
}


/* Location:              C:\Users\Jason\Downloads\355cd2b71db971dfb0fac1fc391eb4079e2b090025ca2cdc83d4a22a0ed8f082-dex2jar.jar!\com\androidnetworking\interfaces\ParsedRequestListener.class
 * Java compiler version: 6 (50.0)
 * JD-Core Version:       1.1.3
 */