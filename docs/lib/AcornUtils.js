define(['exports', 'kotlin'], function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var Unit = Kotlin.kotlin.Unit;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var Throwable = Error;
  var Any = Object;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var Pair = Kotlin.kotlin.Pair;
  var equals = Kotlin.equals;
  var properties = Kotlin.kotlin.properties;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var getCallableRef = Kotlin.getCallableRef;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var ListIterator = Kotlin.kotlin.collections.ListIterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var hashCode = Kotlin.hashCode;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var List = Kotlin.kotlin.collections.List;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var MutableListIterator = Kotlin.kotlin.collections.MutableListIterator;
  var MutableIterable = Kotlin.kotlin.collections.MutableIterable;
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init;
  var numberToInt = Kotlin.numberToInt;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var unboxChar = Kotlin.unboxChar;
  var indexOf_0 = Kotlin.kotlin.text.indexOf_8eortd$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var toIntOrNull_0 = Kotlin.kotlin.text.toIntOrNull_6ic1pp$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var toString = Kotlin.toString;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var Comparable = Kotlin.kotlin.Comparable;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var minOf = Kotlin.kotlin.comparisons.minOf_sdesaw$;
  var maxOf = Kotlin.kotlin.comparisons.maxOf_sdesaw$;
  var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var toByte = Kotlin.toByte;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var indexOf_1 = Kotlin.kotlin.collections.indexOf_bv23uc$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var toShortOrNull = Kotlin.kotlin.text.toShortOrNull_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var get_lastIndex_2 = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_j4ogox$;
  var indexOf_2 = Kotlin.kotlin.collections.indexOf_o2f9me$;
  AsyncWorker$DeferredStatus.prototype = Object.create(Enum.prototype);
  AsyncWorker$DeferredStatus.prototype.constructor = AsyncWorker$DeferredStatus;
  LateValue.prototype = Object.create(Promise.prototype);
  LateValue.prototype.constructor = LateValue;
  Promise$Status.prototype = Object.create(Enum.prototype);
  Promise$Status.prototype.constructor = Promise$Status;
  MutableListBase.prototype = Object.create(ListBase.prototype);
  MutableListBase.prototype.constructor = MutableListBase;
  ConcurrentListImpl.prototype = Object.create(MutableListBase.prototype);
  ConcurrentListImpl.prototype.constructor = ConcurrentListImpl;
  MutableConcurrentListIteratorImpl_0.prototype = Object.create(ConcurrentListIteratorImpl_0.prototype);
  MutableConcurrentListIteratorImpl_0.prototype.constructor = MutableConcurrentListIteratorImpl_0;
  ConcurrentListImplIterator.prototype = Object.create(MutableConcurrentListIteratorImpl_0.prototype);
  ConcurrentListImplIterator.prototype.constructor = ConcurrentListImplIterator;
  WatchedMutableConcurrentListIteratorImpl.prototype = Object.create(WatchedConcurrentListIteratorImpl.prototype);
  WatchedMutableConcurrentListIteratorImpl.prototype.constructor = WatchedMutableConcurrentListIteratorImpl;
  CyclicList.prototype = Object.create(MutableListBase.prototype);
  CyclicList.prototype.constructor = CyclicList;
  MutableListIteratorImpl.prototype = Object.create(ListIteratorImpl.prototype);
  MutableListIteratorImpl.prototype.constructor = MutableListIteratorImpl;
  SubList.prototype = Object.create(ListBase.prototype);
  SubList.prototype.constructor = SubList;
  MutableSubList.prototype = Object.create(MutableListBase.prototype);
  MutableSubList.prototype.constructor = MutableSubList;
  arrayListPool$ObjectLiteral.prototype = Object.create(ObjectPool.prototype);
  arrayListPool$ObjectLiteral.prototype.constructor = arrayListPool$ObjectLiteral;
  mapPool$ObjectLiteral.prototype = Object.create(ObjectPool.prototype);
  mapPool$ObjectLiteral.prototype.constructor = mapPool$ObjectLiteral;
  ObservableConcatList.prototype = Object.create(ListBase.prototype);
  ClearableObjectPool.prototype = Object.create(ObjectPool.prototype);
  ClearableObjectPool.prototype.constructor = ClearableObjectPool;
  InvalidMarkException.prototype = Object.create(Throwable.prototype);
  InvalidMarkException.prototype.constructor = InvalidMarkException;
  ExpIn.prototype = Object.create(Exp.prototype);
  ExpIn.prototype.constructor = ExpIn;
  ExpOut.prototype = Object.create(Exp.prototype);
  ExpOut.prototype.constructor = ExpOut;
  ElasticIn.prototype = Object.create(Elastic.prototype);
  ElasticIn.prototype.constructor = ElasticIn;
  ElasticOut.prototype = Object.create(Elastic.prototype);
  ElasticOut.prototype.constructor = ElasticOut;
  PlaneSide.prototype = Object.create(Enum.prototype);
  PlaneSide.prototype.constructor = PlaneSide;
  Signal0.prototype = Object.create(SignalBase.prototype);
  Signal0.prototype.constructor = Signal0;
  Signal1.prototype = Object.create(SignalBase.prototype);
  Signal1.prototype.constructor = Signal1;
  Signal2.prototype = Object.create(SignalBase.prototype);
  Signal2.prototype.constructor = Signal2;
  Signal3.prototype = Object.create(SignalBase.prototype);
  Signal3.prototype.constructor = Signal3;
  StoppableSignalImpl.prototype = Object.create(SignalBase.prototype);
  StoppableSignalImpl.prototype.constructor = StoppableSignalImpl;
  function get_as1($receiver) {
    return $receiver;
  }
  function toRadix($receiver, radix) {
    var d = $receiver;
    return d.toString(radix);
  }
  function Decorator() {
  }
  Decorator.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Decorator', interfaces: []};
  function noopDecorator() {
    var tmp$;
    return Kotlin.isType(tmp$ = NoopDecorator_getInstance(), Decorator) ? tmp$ : throwCCE();
  }
  function NoopDecorator() {
    NoopDecorator_instance = this;
  }
  NoopDecorator.prototype.decorate_11rb$ = function (target) {
    return target;
  };
  NoopDecorator.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NoopDecorator', interfaces: [Decorator]};
  var NoopDecorator_instance = null;
  function NoopDecorator_getInstance() {
    if (NoopDecorator_instance === null) {
      new NoopDecorator();
    }
    return NoopDecorator_instance;
  }
  function Progress() {
  }
  Object.defineProperty(Progress.prototype, 'percentLoaded', {get: function () {
    return this.secondsTotal <= 0.0 ? 1.0 : this.secondsLoaded / this.secondsTotal;
  }});
  Progress.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Progress', interfaces: []};
  function launch(block) {
    startCoroutine(block, new BasicContinuationImpl());
  }
  function async(work) {
    return new AsyncWorker(work);
  }
  function BasicContinuationImpl(context) {
    if (context === void 0)
      context = experimental.EmptyCoroutineContext;
    this.context_3h9l6k$_0 = context;
  }
  Object.defineProperty(BasicContinuationImpl.prototype, 'context', {get: function () {
    return this.context_3h9l6k$_0;
  }});
  BasicContinuationImpl.prototype.resume_11rb$ = function (value) {
  };
  BasicContinuationImpl.prototype.resumeWithException_tcv7n7$ = function (exception) {
    throw exception;
  };
  BasicContinuationImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'BasicContinuationImpl', interfaces: [Continuation]};
  function PendingDisposablesRegistry() {
    PendingDisposablesRegistry_instance = this;
    this.allPending_0 = HashMap_init();
    this.isDisposing_0 = false;
  }
  PendingDisposablesRegistry.prototype.register_4pykkx$ = function (continuation) {
    if (this.isDisposing_0)
      throw IllegalStateException_init('Cannot add a disposable to the registry on dispose.');
    this.allPending_0.put_xwzc9p$(continuation, Unit);
  };
  PendingDisposablesRegistry.prototype.unregister_4pykkx$ = function (continuation) {
    if (this.isDisposing_0)
      return;
    this.allPending_0.remove_11rb$(continuation);
  };
  PendingDisposablesRegistry.prototype.dispose = function () {
    var tmp$;
    if (this.isDisposing_0)
      return;
    this.isDisposing_0 = true;
    tmp$ = this.allPending_0.keys.iterator();
    while (tmp$.hasNext()) {
      var continuation = tmp$.next();
      continuation.dispose();
    }
  };
  PendingDisposablesRegistry.$metadata$ = {kind: Kind_OBJECT, simpleName: 'PendingDisposablesRegistry', interfaces: []};
  var PendingDisposablesRegistry_instance = null;
  function PendingDisposablesRegistry_getInstance() {
    if (PendingDisposablesRegistry_instance === null) {
      new PendingDisposablesRegistry();
    }
    return PendingDisposablesRegistry_instance;
  }
  function Deferred() {
  }
  Deferred.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Deferred', interfaces: []};
  function awaitOrNull($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$awaitOrNull($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$awaitOrNull($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$awaitOrNull.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$awaitOrNull.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$awaitOrNull.prototype.constructor = Coroutine$awaitOrNull;
  Coroutine$awaitOrNull.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              this.local$tmp$ = null;
            }
             else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$;
          case 4:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function CancelableDeferred() {
  }
  CancelableDeferred.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CancelableDeferred', interfaces: [Deferred]};
  function then$lambda(this$then_0, closure$callback_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$then$lambda(this$then_0, closure$callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$then$lambda(this$then_0, closure$callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$this$then = this$then_0;
    this.local$closure$callback = closure$callback_0;
    this.local$successful = void 0;
    this.local$result = void 0;
  }
  Coroutine$then$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$then$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$then$lambda.prototype.constructor = Coroutine$then$lambda;
  Coroutine$then$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$successful = false;
            this.local$result = null;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$this$then.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$result = this.result_0;
            this.local$successful = true;
            this.exceptionState_0 = 5;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (!Kotlin.isType(t, Throwable))
              throw t;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$successful) {
              return this.local$closure$callback((tmp$ = this.local$result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE()), Unit;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            return Unit;
          case 5:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function then($receiver, callback) {
    launch(then$lambda($receiver, callback));
  }
  function AsyncWorker(work) {
    this.status_0 = AsyncWorker$DeferredStatus$PENDING_getInstance();
    this.result_0 = null;
    this.error_0 = null;
    this.children_0 = ArrayList_init();
    launch(AsyncWorker_init$lambda(work, this));
  }
  function AsyncWorker$await$lambda(this$AsyncWorker) {
    return function (cont) {
      this$AsyncWorker.children_0.add_11rb$(cont);
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  AsyncWorker.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$await.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            switch (this.$this.status_0.name) {
              case 'PENDING':
                this.state_0 = 2;
                this.result_0 = suspendCoroutine$lambda(AsyncWorker$await$lambda(this.$this))(this.facade);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 'FAILED':
                throw ensureNotNull(this.$this.error_0);
              default:this.local$tmp$_0 = (tmp$ = this.$this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
                this.state_0 = 3;
                continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AsyncWorker$DeferredStatus(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AsyncWorker$DeferredStatus_initFields() {
    AsyncWorker$DeferredStatus_initFields = function () {
    };
    AsyncWorker$DeferredStatus$PENDING_instance = new AsyncWorker$DeferredStatus('PENDING', 0);
    AsyncWorker$DeferredStatus$SUCCESSFUL_instance = new AsyncWorker$DeferredStatus('SUCCESSFUL', 1);
    AsyncWorker$DeferredStatus$FAILED_instance = new AsyncWorker$DeferredStatus('FAILED', 2);
  }
  var AsyncWorker$DeferredStatus$PENDING_instance;
  function AsyncWorker$DeferredStatus$PENDING_getInstance() {
    AsyncWorker$DeferredStatus_initFields();
    return AsyncWorker$DeferredStatus$PENDING_instance;
  }
  var AsyncWorker$DeferredStatus$SUCCESSFUL_instance;
  function AsyncWorker$DeferredStatus$SUCCESSFUL_getInstance() {
    AsyncWorker$DeferredStatus_initFields();
    return AsyncWorker$DeferredStatus$SUCCESSFUL_instance;
  }
  var AsyncWorker$DeferredStatus$FAILED_instance;
  function AsyncWorker$DeferredStatus$FAILED_getInstance() {
    AsyncWorker$DeferredStatus_initFields();
    return AsyncWorker$DeferredStatus$FAILED_instance;
  }
  AsyncWorker$DeferredStatus.$metadata$ = {kind: Kind_CLASS, simpleName: 'DeferredStatus', interfaces: [Enum]};
  function AsyncWorker$DeferredStatus$values() {
    return [AsyncWorker$DeferredStatus$PENDING_getInstance(), AsyncWorker$DeferredStatus$SUCCESSFUL_getInstance(), AsyncWorker$DeferredStatus$FAILED_getInstance()];
  }
  AsyncWorker$DeferredStatus.values = AsyncWorker$DeferredStatus$values;
  function AsyncWorker$DeferredStatus$valueOf(name) {
    switch (name) {
      case 'PENDING':
        return AsyncWorker$DeferredStatus$PENDING_getInstance();
      case 'SUCCESSFUL':
        return AsyncWorker$DeferredStatus$SUCCESSFUL_getInstance();
      case 'FAILED':
        return AsyncWorker$DeferredStatus$FAILED_getInstance();
      default:throwISE('No enum constant com.acornui.async.AsyncWorker.DeferredStatus.' + name);
    }
  }
  AsyncWorker$DeferredStatus.valueOf_61zpoe$ = AsyncWorker$DeferredStatus$valueOf;
  function AsyncWorker_init$lambda(closure$work_0, this$AsyncWorker_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$AsyncWorker_init$lambda(closure$work_0, this$AsyncWorker_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$AsyncWorker_init$lambda(closure$work_0, this$AsyncWorker_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$closure$work = closure$work_0;
    this.local$this$AsyncWorker = this$AsyncWorker_0;
  }
  Coroutine$AsyncWorker_init$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$AsyncWorker_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AsyncWorker_init$lambda.prototype.constructor = Coroutine$AsyncWorker_init$lambda;
  Coroutine$AsyncWorker_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$work(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$this$AsyncWorker.result_0 = this.result_0;
            this.local$this$AsyncWorker.status_0 = AsyncWorker$DeferredStatus$SUCCESSFUL_getInstance();
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              this.local$this$AsyncWorker.error_0 = e;
              this.local$this$AsyncWorker.status_0 = AsyncWorker$DeferredStatus$FAILED_getInstance();
            }
             else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            switch (this.local$this$AsyncWorker.status_0.name) {
              case 'SUCCESSFUL':
                var r = (tmp$ = this.local$this$AsyncWorker.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
                while (!this.local$this$AsyncWorker.children_0.isEmpty()) {
                  poll(this.local$this$AsyncWorker.children_0).resume_11rb$(r);
                }

                break;
              case 'FAILED':
                var e_0 = Kotlin.isType(tmp$_0 = this.local$this$AsyncWorker.error_0, Throwable) ? tmp$_0 : throwCCE();
                while (!this.local$this$AsyncWorker.children_0.isEmpty()) {
                  poll(this.local$this$AsyncWorker.children_0).resumeWithException_tcv7n7$(e_0);
                }

                break;
              default:throw Exception_init('Status should not be pending.');
            }

            return Unit;
          case 4:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncWorker.$metadata$ = {kind: Kind_CLASS, simpleName: 'AsyncWorker', interfaces: [Deferred]};
  function LateValue() {
    Promise.call(this);
  }
  Object.defineProperty(LateValue.prototype, 'isPending', {get: function () {
    return this.status === Promise$Status$PENDING_getInstance();
  }});
  LateValue.prototype.setValue_11rb$ = function (value) {
    this.success_11rb$(value);
  };
  LateValue.prototype.setError_tcv7n7$ = function (value) {
    this.fail_tcv7n7$(value);
  };
  LateValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'LateValue', interfaces: [Promise]};
  function Promise() {
    this._status_cqc4ss$_0 = Promise$Status$PENDING_getInstance();
    this._result_8rtqbj$_0 = null;
    this._error_okjor6$_0 = null;
    this.continuations_d42isf$_0 = ArrayList_init();
  }
  Object.defineProperty(Promise.prototype, 'status', {get: function () {
    return this._status_cqc4ss$_0;
  }});
  Object.defineProperty(Promise.prototype, 'result', {get: function () {
    return this._result_8rtqbj$_0;
  }});
  Object.defineProperty(Promise.prototype, 'error_g30mbv$_0', {get: function () {
    return this._error_okjor6$_0;
  }});
  Promise.prototype.success_11rb$ = function (result) {
    if (this._status_cqc4ss$_0 !== Promise$Status$PENDING_getInstance())
      throw IllegalStateException_init('Promise is not in pending state.');
    this._result_8rtqbj$_0 = result;
    this._status_cqc4ss$_0 = Promise$Status$SUCCESSFUL_getInstance();
    while (!this.continuations_d42isf$_0.isEmpty()) {
      poll(this.continuations_d42isf$_0).resume_11rb$(result);
    }
  };
  Promise.prototype.fail_tcv7n7$ = function (error) {
    if (this._status_cqc4ss$_0 !== Promise$Status$PENDING_getInstance())
      throw IllegalStateException_init('Promise is not in pending state.');
    this._error_okjor6$_0 = error;
    this._status_cqc4ss$_0 = Promise$Status$FAILED_getInstance();
    while (!this.continuations_d42isf$_0.isEmpty()) {
      poll(this.continuations_d42isf$_0).resumeWithException_tcv7n7$(error);
    }
  };
  function Promise$await$lambda(this$Promise) {
    return function (cont) {
      var tmp$, tmp$_0;
      switch (this$Promise._status_cqc4ss$_0.name) {
        case 'PENDING':
          this$Promise.continuations_d42isf$_0.add_11rb$(cont);
          break;
        case 'SUCCESSFUL':
          cont.resume_11rb$((tmp$ = this$Promise._result_8rtqbj$_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
          break;
        case 'FAILED':
          cont.resumeWithException_tcv7n7$(Kotlin.isType(tmp$_0 = this$Promise._error_okjor6$_0, Throwable) ? tmp$_0 : throwCCE());
          break;
        default:Kotlin.noWhenBranchMatched();
          break;
      }
      return Unit;
    };
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  Promise.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$await_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await_0.prototype.constructor = Coroutine$await_0;
  Coroutine$await_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda_0(Promise$await$lambda(this.$this))(this.facade);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Promise$Status(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Promise$Status_initFields() {
    Promise$Status_initFields = function () {
    };
    Promise$Status$PENDING_instance = new Promise$Status('PENDING', 0);
    Promise$Status$SUCCESSFUL_instance = new Promise$Status('SUCCESSFUL', 1);
    Promise$Status$FAILED_instance = new Promise$Status('FAILED', 2);
  }
  var Promise$Status$PENDING_instance;
  function Promise$Status$PENDING_getInstance() {
    Promise$Status_initFields();
    return Promise$Status$PENDING_instance;
  }
  var Promise$Status$SUCCESSFUL_instance;
  function Promise$Status$SUCCESSFUL_getInstance() {
    Promise$Status_initFields();
    return Promise$Status$SUCCESSFUL_instance;
  }
  var Promise$Status$FAILED_instance;
  function Promise$Status$FAILED_getInstance() {
    Promise$Status_initFields();
    return Promise$Status$FAILED_instance;
  }
  Promise$Status.$metadata$ = {kind: Kind_CLASS, simpleName: 'Status', interfaces: [Enum]};
  function Promise$Status$values() {
    return [Promise$Status$PENDING_getInstance(), Promise$Status$SUCCESSFUL_getInstance(), Promise$Status$FAILED_getInstance()];
  }
  Promise$Status.values = Promise$Status$values;
  function Promise$Status$valueOf(name) {
    switch (name) {
      case 'PENDING':
        return Promise$Status$PENDING_getInstance();
      case 'SUCCESSFUL':
        return Promise$Status$SUCCESSFUL_getInstance();
      case 'FAILED':
        return Promise$Status$FAILED_getInstance();
      default:throwISE('No enum constant com.acornui.async.Promise.Status.' + name);
    }
  }
  Promise$Status.valueOf_61zpoe$ = Promise$Status$valueOf;
  Promise.$metadata$ = {kind: Kind_CLASS, simpleName: 'Promise', interfaces: [Deferred]};
  function awaitAll($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$awaitAll($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$awaitAll($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$copy = void 0;
    this.local$tmp$ = void 0;
    this.local$a = void 0;
    this.local$i = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$awaitAll.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$awaitAll.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$awaitAll.prototype.constructor = Coroutine$awaitAll;
  Coroutine$awaitAll.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$copy = copy(this.local$$receiver);
            var size = this.local$copy.size;
            this.local$a = ArrayList_init(size);
            this.local$tmp$ = size - 1 | 0;
            this.local$i = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i > this.local$tmp$) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = this.local$copy.get_za3lpa$(this.local$i).await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$a.add_11rb$(this.result_0);
            this.state_0 = 4;
            continue;
          case 4:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 5:
            return this.local$a;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function awaitAll_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$awaitAll_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$awaitAll_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$other = void 0;
    this.local$tmp$ = void 0;
    this.local$key = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$awaitAll_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$awaitAll_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$awaitAll_0.prototype.constructor = Coroutine$awaitAll_0;
  Coroutine$awaitAll_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = copy_0(this.local$$receiver);
            this.local$other = HashMap_init();
            this.local$tmp$ = $receiver.entries.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var tmp$ = this.local$tmp$.next();
            this.local$key = tmp$.key;
            var value = tmp$.value;
            this.state_0 = 3;
            this.result_0 = value.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var tmp$_0 = to(this.local$key, this.result_0);
            var newKey = tmp$_0.component1(), newValue = tmp$_0.component2();
            this.local$other.put_xwzc9p$(newKey, newValue);
            this.state_0 = 2;
            continue;
          case 4:
            return this.local$other;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function UrlParams() {
  }
  UrlParams.prototype.toQueryString = function () {
    var tmp$;
    var result = new StringBuilder();
    tmp$ = this.items.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.component1(), value = tmp$_0.component2();
      result.append_gw00v9$(get_encodeUriComponent2()(key));
      result.append_gw00v9$('=');
      result.append_gw00v9$(get_encodeUriComponent2()(value));
      result.append_gw00v9$('&');
    }
    var resultString = result.toString();
    var tmp$_1;
    if (resultString.length > 0) {
      var endIndex = resultString.length - 1 | 0;
      tmp$_1 = resultString.substring(0, endIndex);
    }
     else
      tmp$_1 = resultString;
    return tmp$_1;
  };
  UrlParams.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'UrlParams', interfaces: []};
  function UrlParamsImpl(queryString) {
    var tmp$;
    var p = new UrlParamsImpl_0();
    var split_0 = split(queryString, ['&']);
    tmp$ = split_0.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      var i = indexOf(entry, '=');
      if (i !== -1) {
        var tmp$_0 = entry.substring(0, i);
        var tmp$_1 = get_decodeUriComponent2();
        var startIndex = i + 1 | 0;
        p.append_puj7f4$(tmp$_0, tmp$_1(entry.substring(startIndex)));
      }
    }
    return p;
  }
  function UrlParamsImpl_0() {
    this._items_0 = ArrayList_init();
  }
  Object.defineProperty(UrlParamsImpl_0.prototype, 'items', {get: function () {
    return this._items_0;
  }});
  UrlParamsImpl_0.prototype.append_puj7f4$ = function (name, value) {
    this._items_0.add_11rb$(new Pair(name, value));
  };
  UrlParamsImpl_0.prototype.appendAll_75a8r4$ = function (entries) {
    var tmp$;
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      this.append_puj7f4$(entry.first, entry.second);
    }
  };
  UrlParamsImpl_0.prototype.remove_61zpoe$ = function (name) {
    var $receiver = this._items_0;
    var lastIndex;
    var indexOfFirst2$result;
    indexOfFirst2$break: do {
      lastIndex = get_lastIndex($receiver);
      if ($receiver.isEmpty()) {
        indexOfFirst2$result = -1;
        break indexOfFirst2$break;
      }
      if (0 === lastIndex) {
        indexOfFirst2$result = equals($receiver.get_za3lpa$(0).first, name) ? 0 : -1;
        break indexOfFirst2$break;
      }
      for (var i = 0; i <= lastIndex; i++) {
        if (equals($receiver.get_za3lpa$(i).first, name)) {
          indexOfFirst2$result = i;
          break indexOfFirst2$break;
        }
      }
      indexOfFirst2$result = -1;
    }
     while (false);
    var i_0 = indexOfFirst2$result;
    if (i_0 === -1)
      return false;
    this._items_0.removeAt_za3lpa$(i_0);
    return true;
  };
  UrlParamsImpl_0.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    var $receiver = this._items_0;
    var tmp$_0;
    var lastIndex = get_lastIndex($receiver);
    var indexOfFirst2$result;
    indexOfFirst2$break: do {
      if ($receiver.isEmpty()) {
        indexOfFirst2$result = -1;
        break indexOfFirst2$break;
      }
      if (0 === lastIndex) {
        indexOfFirst2$result = equals($receiver.get_za3lpa$(0).first, name) ? 0 : -1;
        break indexOfFirst2$break;
      }
      for (var i = 0; i <= lastIndex; i++) {
        if (equals($receiver.get_za3lpa$(i).first, name)) {
          indexOfFirst2$result = i;
          break indexOfFirst2$break;
        }
      }
      indexOfFirst2$result = -1;
    }
     while (false);
    var index = indexOfFirst2$result;
    if (index === -1)
      throw Exception_init('Element not found matching predicate');
    else
      tmp$_0 = $receiver.get_za3lpa$(index);
    return (tmp$ = tmp$_0) != null ? tmp$.second : null;
  };
  UrlParamsImpl_0.prototype.getAll_61zpoe$ = function (name) {
    var tmp$;
    var list = ArrayList_init();
    tmp$ = this._items_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (equals(item.first, name))
        list.add_11rb$(item.second);
    }
    return list;
  };
  UrlParamsImpl_0.prototype.set_puj7f4$ = function (name, value) {
    var $receiver = this._items_0;
    var lastIndex;
    var indexOfFirst2$result;
    indexOfFirst2$break: do {
      lastIndex = get_lastIndex($receiver);
      if ($receiver.isEmpty()) {
        indexOfFirst2$result = -1;
        break indexOfFirst2$break;
      }
      if (0 === lastIndex) {
        indexOfFirst2$result = equals($receiver.get_za3lpa$(0).first, name) ? 0 : -1;
        break indexOfFirst2$break;
      }
      for (var i = 0; i <= lastIndex; i++) {
        if (equals($receiver.get_za3lpa$(i).first, name)) {
          indexOfFirst2$result = i;
          break indexOfFirst2$break;
        }
      }
      indexOfFirst2$result = -1;
    }
     while (false);
    var index = indexOfFirst2$result;
    if (index === -1) {
      this._items_0.add_11rb$(new Pair(name, value));
    }
     else {
      this._items_0.set_wxm5ur$(index, new Pair(name, value));
    }
  };
  UrlParamsImpl_0.prototype.contains_61zpoe$ = function (name) {
    var $receiver = this._items_0;
    var tmp$;
    var lastIndex = get_lastIndex($receiver);
    var indexOfFirst2$result;
    indexOfFirst2$break: do {
      if ($receiver.isEmpty()) {
        indexOfFirst2$result = -1;
        break indexOfFirst2$break;
      }
      if (0 === lastIndex) {
        indexOfFirst2$result = equals($receiver.get_za3lpa$(0).first, name) ? 0 : -1;
        break indexOfFirst2$break;
      }
      for (var i = 0; i <= lastIndex; i++) {
        if (equals($receiver.get_za3lpa$(i).first, name)) {
          indexOfFirst2$result = i;
          break indexOfFirst2$break;
        }
      }
      indexOfFirst2$result = -1;
    }
     while (false);
    var index = indexOfFirst2$result;
    if (index === -1)
      throw Exception_init('Element not found matching predicate');
    else
      tmp$ = $receiver.get_za3lpa$(index);
    return tmp$ != null;
  };
  UrlParamsImpl_0.prototype.clear = function () {
    this._items_0.clear();
  };
  UrlParamsImpl_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'UrlParamsImpl', interfaces: [UrlParams, Clearable]};
  var encodeUriComponent2;
  var encodeUriComponent2_metadata = new PropertyMetadata('encodeUriComponent2');
  function get_encodeUriComponent2() {
    return encodeUriComponent2.getValue_lrcp0p$(this, encodeUriComponent2_metadata);
  }
  function set_encodeUriComponent2(encodeUriComponent2_0) {
    encodeUriComponent2.setValue_9rddgb$(this, encodeUriComponent2_metadata, encodeUriComponent2_0);
  }
  var decodeUriComponent2;
  var decodeUriComponent2_metadata = new PropertyMetadata('decodeUriComponent2');
  function get_decodeUriComponent2() {
    return decodeUriComponent2.getValue_lrcp0p$(this, decodeUriComponent2_metadata);
  }
  function set_decodeUriComponent2(decodeUriComponent2_0) {
    decodeUriComponent2.setValue_9rddgb$(this, decodeUriComponent2_metadata, decodeUriComponent2_0);
  }
  function appendParam($receiver, paramName, paramValue) {
    return $receiver + (contains($receiver, '?') ? '&' : '?' + (paramName + '=' + get_encodeUriComponent2()(paramValue)));
  }
  function ActiveList(initialCapacity) {
    this.wrapped = ArrayList_init(initialCapacity);
    this._added_fkp0f3$_0 = new Signal2();
    this._removed_vykc5d$_0 = new Signal2();
    this._changed_6wehcj$_0 = new Signal3();
    this._modified_eppxhm$_0 = new Signal2();
    this._reset_7i41xq$_0 = new Signal0();
    this.updatesEnabled = true;
    this.iteratorPool_d7bbag$_0 = ClearableObjectPool_init(ActiveList$iteratorPool$lambda(this));
  }
  Object.defineProperty(ActiveList.prototype, 'added', {get: function () {
    return this._added_fkp0f3$_0;
  }});
  Object.defineProperty(ActiveList.prototype, 'removed', {get: function () {
    return this._removed_vykc5d$_0;
  }});
  Object.defineProperty(ActiveList.prototype, 'changed', {get: function () {
    return this._changed_6wehcj$_0;
  }});
  Object.defineProperty(ActiveList.prototype, 'modified', {get: function () {
    return this._modified_eppxhm$_0;
  }});
  Object.defineProperty(ActiveList.prototype, 'reset', {get: function () {
    return this._reset_7i41xq$_0;
  }});
  ActiveList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.removeAt_za3lpa$(index);
    return true;
  };
  ActiveList.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$, tmp$_0;
    if (elements.isEmpty())
      return false;
    var i = index;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.add_wxm5ur$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0), e);
    }
    return true;
  };
  ActiveList.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      changed = (changed && this.remove_11rb$(i));
    }
    return changed;
  };
  function ActiveList$retainAll$lambda(closure$elements, closure$changed, this$ActiveList) {
    return function (it) {
      if (!closure$elements.contains_11rb$(it)) {
        closure$changed.v = true;
        this$ActiveList.remove_11rb$(it);
      }
      return true;
    };
  }
  ActiveList.prototype.retainAll_brywnq$ = function (elements) {
    var changed = {v: false};
    this.iterate_ucl7l2$(ActiveList$retainAll$lambda(elements, changed, this));
    return changed.v;
  };
  ActiveList.prototype.clear = function () {
    this.wrapped.clear();
    this.dirty();
  };
  ActiveList.prototype.add_wxm5ur$ = function (index, element) {
    this.wrapped.add_wxm5ur$(index, element);
    if (this.updatesEnabled)
      this._added_fkp0f3$_0.dispatch_xwzc9p$(index, element);
  };
  ActiveList.prototype.removeAt_za3lpa$ = function (index) {
    var element = this.wrapped.removeAt_za3lpa$(index);
    if (this.updatesEnabled)
      this._removed_vykc5d$_0.dispatch_xwzc9p$(index, element);
    return element;
  };
  ActiveList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.wrapped.subList_vux9f0$(fromIndex, toIndex);
  };
  Object.defineProperty(ActiveList.prototype, 'size', {get: function () {
    return this.wrapped.size;
  }});
  ActiveList.prototype.add_11rb$ = function (element) {
    this.add_wxm5ur$(this.size, element);
    return true;
  };
  ActiveList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    if (elements.isEmpty())
      return false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.add_11rb$(i);
    }
    return true;
  };
  ActiveList.prototype.set_wxm5ur$ = function (index, element) {
    var oldElement = this.wrapped.set_wxm5ur$(index, element);
    if (oldElement === element)
      return oldElement;
    if (this.updatesEnabled)
      this._changed_6wehcj$_0.dispatch_1llc0w$(index, oldElement, element);
    return oldElement;
  };
  ActiveList.prototype.isEmpty = function () {
    return this.wrapped.isEmpty();
  };
  ActiveList.prototype.contains_11rb$ = function (element) {
    return this.wrapped.contains_11rb$(element);
  };
  ActiveList.prototype.containsAll_brywnq$ = function (elements) {
    return this.wrapped.containsAll_brywnq$(elements);
  };
  ActiveList.prototype.get_za3lpa$ = function (index) {
    return this.wrapped.get_za3lpa$(index);
  };
  ActiveList.prototype.indexOf_11rb$ = function (element) {
    return this.wrapped.indexOf_11rb$(element);
  };
  ActiveList.prototype.lastIndexOf_11rb$ = function (element) {
    return this.wrapped.lastIndexOf_11rb$(element);
  };
  ActiveList.prototype.concurrentIterator = function () {
    return MutableConcurrentListIteratorImpl(this);
  };
  ActiveList.prototype.iterator = function () {
    return new MutableListIteratorImpl(this);
  };
  ActiveList.prototype.listIterator = function () {
    return new MutableListIteratorImpl(this);
  };
  ActiveList.prototype.listIterator_za3lpa$ = function (index) {
    var iterator = new MutableListIteratorImpl(this);
    iterator.cursor = index;
    return iterator;
  };
  ActiveList.prototype.iterate_ucl7l2$ = function (body) {
    var iterator = this.iteratorPool_d7bbag$_0.obtain();
    while (iterator.hasNext()) {
      var shouldContinue = body(iterator.next());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_d7bbag$_0.free_11rb$(iterator);
  };
  ActiveList.prototype.iterateReversed_ucl7l2$ = function (body) {
    var iterator = this.iteratorPool_d7bbag$_0.obtain();
    iterator.cursor = this.size;
    while (iterator.hasPrevious()) {
      var shouldContinue = body(iterator.previous());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_d7bbag$_0.free_11rb$(iterator);
  };
  ActiveList.prototype.batchUpdate_o14v8n$ = function (inner) {
    this.updatesEnabled = false;
    inner();
    this.updatesEnabled = true;
    this._reset_7i41xq$_0.dispatch();
  };
  ActiveList.prototype.notifyElementModified_za3lpa$ = function (index) {
    this._modified_eppxhm$_0.dispatch_xwzc9p$(index, this.get_za3lpa$(index));
  };
  ActiveList.prototype.dirty = function () {
    if (this.updatesEnabled)
      this._reset_7i41xq$_0.dispatch();
  };
  ActiveList.prototype.toString = function () {
    return this.wrapped.toString();
  };
  ActiveList.prototype.dispose = function () {
    this.clear();
    this._added_fkp0f3$_0.dispose();
    this._removed_vykc5d$_0.dispose();
    this._changed_6wehcj$_0.dispose();
    this._modified_eppxhm$_0.dispose();
    this._reset_7i41xq$_0.dispose();
  };
  function ActiveList$iteratorPool$lambda(this$ActiveList) {
    return function () {
      return ConcurrentListIteratorImpl(this$ActiveList);
    };
  }
  ActiveList.$metadata$ = {kind: Kind_CLASS, simpleName: 'ActiveList', interfaces: [Disposable, MutableObservableList, Clearable]};
  function ActiveList_init($this) {
    $this = $this || Object.create(ActiveList.prototype);
    ActiveList.call($this, 8);
    return $this;
  }
  function pop($receiver) {
    return $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
  }
  function poll($receiver) {
    return $receiver.removeAt_za3lpa$(0);
  }
  function peek($receiver) {
    return $receiver.isEmpty() ? null : $receiver.get_za3lpa$(get_lastIndex($receiver));
  }
  function ConcurrentListImpl() {
    MutableListBase.call(this);
    this.iteratorStack_0 = ArrayList_init();
    this.list_0 = ArrayList_init();
    this.iteratorPool_0 = ClearableObjectPool_init(ConcurrentListImpl$iteratorPool$lambda(this));
  }
  ConcurrentListImpl.prototype.add_wxm5ur$ = function (index, element) {
    var tmp$;
    this.list_0.add_wxm5ur$(index, element);
    if (!this.iteratorStack_0.isEmpty()) {
      tmp$ = get_lastIndex(this.iteratorStack_0);
      for (var i = 0; i <= tmp$; i++) {
        this.iteratorStack_0.get_za3lpa$(i).notifyAddedAt_za3lpa$(index);
      }
    }
  };
  Object.defineProperty(ConcurrentListImpl.prototype, 'size', {get: function () {
    return this.list_0.size;
  }});
  ConcurrentListImpl.prototype.get_za3lpa$ = function (index) {
    return this.list_0.get_za3lpa$(index);
  };
  ConcurrentListImpl.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    var e = this.list_0.removeAt_za3lpa$(index);
    if (!this.iteratorStack_0.isEmpty()) {
      tmp$ = get_lastIndex(this.iteratorStack_0);
      for (var i = 0; i <= tmp$; i++) {
        this.iteratorStack_0.get_za3lpa$(i).notifyRemovedAt_za3lpa$(index);
      }
    }
    return e;
  };
  ConcurrentListImpl.prototype.set_wxm5ur$ = function (index, element) {
    return this.list_0.set_wxm5ur$(index, element);
  };
  ConcurrentListImpl.prototype.concurrentIterator = function () {
    return new ConcurrentListImplIterator(this, this.iteratorStack_0);
  };
  ConcurrentListImpl.prototype.iterator = function () {
    return new MutableListIteratorImpl(this);
  };
  ConcurrentListImpl.prototype.listIterator = function () {
    return new MutableListIteratorImpl(this);
  };
  ConcurrentListImpl.prototype.listIterator_za3lpa$ = function (index) {
    var iterator = new MutableListIteratorImpl(this);
    iterator.cursor = index;
    return iterator;
  };
  ConcurrentListImpl.prototype.iterate_ucl7l2$ = function (body) {
    var iterator = this.iteratorPool_0.obtain();
    while (iterator.hasNext()) {
      var shouldContinue = body(iterator.next());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_0.free_11rb$(iterator);
  };
  ConcurrentListImpl.prototype.iterateReversed_ucl7l2$ = function (body) {
    var iterator = this.iteratorPool_0.obtain();
    iterator.cursor = this.size;
    while (iterator.hasPrevious()) {
      var shouldContinue = body(iterator.previous());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_0.free_11rb$(iterator);
  };
  function ConcurrentListImpl$iteratorPool$lambda(this$ConcurrentListImpl) {
    return function () {
      return new ConcurrentListImplIterator(this$ConcurrentListImpl, this$ConcurrentListImpl.iteratorStack_0);
    };
  }
  ConcurrentListImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentListImpl', interfaces: [MutableConcurrentList, MutableListBase]};
  function ConcurrentListImplIterator(target, stack) {
    MutableConcurrentListIteratorImpl_0.call(this, target);
    this.stack_0 = stack;
    this.stack_0.add_11rb$(this);
    if (this.stack_0.size > 50)
      throw IllegalStateException_init('Concurrent list iterators are being created, but not disposed.');
  }
  ConcurrentListImplIterator.prototype.dispose = function () {
    MutableConcurrentListIteratorImpl_0.prototype.dispose.call(this);
    this.stack_0.remove_11rb$(this);
  };
  ConcurrentListImplIterator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentListImplIterator', interfaces: [MutableConcurrentListIteratorImpl_0]};
  function ConcurrentList() {
  }
  ConcurrentList.prototype.iterate_nhjr8t$ = function (body, reversed) {
    if (reversed)
      this.iterateReversed_ucl7l2$(body);
    else
      this.iterate_ucl7l2$(body);
  };
  ConcurrentList.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ConcurrentList', interfaces: [List]};
  function MutableConcurrentList() {
  }
  MutableConcurrentList.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableConcurrentList', interfaces: [MutableList, ConcurrentList]};
  function ConcurrentListIterator() {
  }
  ConcurrentListIterator.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ConcurrentListIterator', interfaces: [Disposable, Iterable, ListIterator, Clearable]};
  function ConcurrentListIteratorImpl(list) {
    var tmp$;
    return new WatchedConcurrentListIteratorImpl(new ConcurrentListIteratorImpl_0(Kotlin.isType(tmp$ = list, List) ? tmp$ : throwCCE()), list);
  }
  function WatchedConcurrentListIteratorImpl(impl, list) {
    this.impl_0 = impl;
    this.list_0 = list;
    this.addedHandler_0 = WatchedConcurrentListIteratorImpl$addedHandler$lambda(this);
    this.removedHandler_0 = WatchedConcurrentListIteratorImpl$removedHandler$lambda(this);
    this.list_0.added.add_trkh7z$(this.addedHandler_0);
    this.list_0.removed.add_trkh7z$(this.removedHandler_0);
  }
  WatchedConcurrentListIteratorImpl.prototype.dispose = function () {
    this.list_0.added.remove_trkh7z$(this.addedHandler_0);
    this.list_0.removed.remove_trkh7z$(this.removedHandler_0);
  };
  Object.defineProperty(WatchedConcurrentListIteratorImpl.prototype, 'cursor', {get: function () {
    return this.impl_0.cursor;
  }, set: function (tmp$) {
    this.impl_0.cursor = tmp$;
  }});
  WatchedConcurrentListIteratorImpl.prototype.clear = function () {
    return this.impl_0.clear();
  };
  WatchedConcurrentListIteratorImpl.prototype.hasNext = function () {
    return this.impl_0.hasNext();
  };
  WatchedConcurrentListIteratorImpl.prototype.hasPrevious = function () {
    return this.impl_0.hasPrevious();
  };
  WatchedConcurrentListIteratorImpl.prototype.iterate_ucl7l2$ = function (body) {
    return this.impl_0.iterate_ucl7l2$(body);
  };
  WatchedConcurrentListIteratorImpl.prototype.iterateReversed_ucl7l2$ = function (body) {
    return this.impl_0.iterateReversed_ucl7l2$(body);
  };
  WatchedConcurrentListIteratorImpl.prototype.iterator = function () {
    return this.impl_0.iterator();
  };
  WatchedConcurrentListIteratorImpl.prototype.next = function () {
    return this.impl_0.next();
  };
  WatchedConcurrentListIteratorImpl.prototype.nextIndex = function () {
    return this.impl_0.nextIndex();
  };
  WatchedConcurrentListIteratorImpl.prototype.previous = function () {
    return this.impl_0.previous();
  };
  WatchedConcurrentListIteratorImpl.prototype.previousIndex = function () {
    return this.impl_0.previousIndex();
  };
  function WatchedConcurrentListIteratorImpl$addedHandler$lambda(this$WatchedConcurrentListIteratorImpl) {
    return function (index, f) {
      this$WatchedConcurrentListIteratorImpl.impl_0.notifyAddedAt_za3lpa$(index);
      return Unit;
    };
  }
  function WatchedConcurrentListIteratorImpl$removedHandler$lambda(this$WatchedConcurrentListIteratorImpl) {
    return function (index, f) {
      this$WatchedConcurrentListIteratorImpl.impl_0.notifyRemovedAt_za3lpa$(index);
      return Unit;
    };
  }
  WatchedConcurrentListIteratorImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'WatchedConcurrentListIteratorImpl', interfaces: [ConcurrentListIterator]};
  function MutableConcurrentListIteratorImpl(list) {
    var tmp$;
    return new WatchedMutableConcurrentListIteratorImpl(new MutableConcurrentListIteratorImpl_0(Kotlin.isType(tmp$ = list, MutableList) ? tmp$ : throwCCE()), list);
  }
  function WatchedMutableConcurrentListIteratorImpl(impl, list) {
    WatchedConcurrentListIteratorImpl.call(this, impl, list);
    this.impl_1 = impl;
    this.list_1 = list;
  }
  WatchedMutableConcurrentListIteratorImpl.prototype.iterator = function () {
    return this.list_1.iterator();
  };
  WatchedMutableConcurrentListIteratorImpl.prototype.add_11rb$ = function (element) {
    this.impl_1.add_11rb$(element);
  };
  WatchedMutableConcurrentListIteratorImpl.prototype.remove = function () {
    this.impl_1.remove();
  };
  WatchedMutableConcurrentListIteratorImpl.prototype.set_11rb$ = function (element) {
    this.impl_1.set_11rb$(element);
  };
  WatchedMutableConcurrentListIteratorImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'WatchedMutableConcurrentListIteratorImpl', interfaces: [MutableConcurrentListIterator, WatchedConcurrentListIteratorImpl]};
  function ConcurrentListIteratorImpl_0(list) {
    this.list_x48lb7$_0 = list;
    this.cursor_jxk223$_0 = 0;
    this.lastRet = -1;
  }
  Object.defineProperty(ConcurrentListIteratorImpl_0.prototype, 'cursor', {get: function () {
    return this.cursor_jxk223$_0;
  }, set: function (cursor) {
    this.cursor_jxk223$_0 = cursor;
  }});
  ConcurrentListIteratorImpl_0.prototype.notifyAddedAt_za3lpa$ = function (index) {
    if (this.cursor > index) {
      this.cursor = this.cursor + 1 | 0;
    }
    if (this.lastRet > index) {
      this.lastRet = this.lastRet + 1 | 0;
    }
  };
  ConcurrentListIteratorImpl_0.prototype.notifyRemovedAt_za3lpa$ = function (index) {
    if (this.cursor > index) {
      this.cursor = this.cursor - 1 | 0;
    }
    if (this.lastRet > index) {
      this.lastRet = this.lastRet - 1 | 0;
    }
  };
  ConcurrentListIteratorImpl_0.prototype.notifyCleared = function () {
    this.cursor = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
  };
  ConcurrentListIteratorImpl_0.prototype.hasNext = function () {
    return this.cursor < this.list_x48lb7$_0.size;
  };
  ConcurrentListIteratorImpl_0.prototype.next = function () {
    var i = this.cursor;
    if (i >= this.list_x48lb7$_0.size)
      throw NoSuchElementException_init();
    this.cursor = i + 1 | 0;
    this.lastRet = i;
    return this.list_x48lb7$_0.get_za3lpa$(i);
  };
  ConcurrentListIteratorImpl_0.prototype.nextIndex = function () {
    return this.cursor;
  };
  ConcurrentListIteratorImpl_0.prototype.hasPrevious = function () {
    return this.cursor > 0;
  };
  ConcurrentListIteratorImpl_0.prototype.previous = function () {
    var i = this.cursor - 1 | 0;
    if (i < 0)
      throw NoSuchElementException_init();
    this.cursor = i;
    this.lastRet = i;
    return this.list_x48lb7$_0.get_za3lpa$(i);
  };
  ConcurrentListIteratorImpl_0.prototype.previousIndex = function () {
    return this.cursor - 1 | 0;
  };
  ConcurrentListIteratorImpl_0.prototype.clear = function () {
    this.cursor = 0;
    this.lastRet = -1;
  };
  ConcurrentListIteratorImpl_0.prototype.iterator = function () {
    return this;
  };
  ConcurrentListIteratorImpl_0.prototype.iterate_ucl7l2$ = function (body) {
    this.clear();
    while (this.hasNext()) {
      var shouldContinue = body(this.next());
      if (!shouldContinue)
        break;
    }
  };
  ConcurrentListIteratorImpl_0.prototype.iterateReversed_ucl7l2$ = function (body) {
    this.clear();
    this.cursor = this.list_x48lb7$_0.size;
    while (this.hasPrevious()) {
      var shouldContinue = body(this.previous());
      if (!shouldContinue)
        break;
    }
  };
  ConcurrentListIteratorImpl_0.prototype.dispose = function () {
  };
  ConcurrentListIteratorImpl_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentListIteratorImpl', interfaces: [ConcurrentListIterator]};
  function MutableConcurrentListIterator() {
  }
  MutableConcurrentListIterator.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableConcurrentListIterator', interfaces: [MutableIterable, MutableListIterator, ConcurrentListIterator]};
  function MutableConcurrentListIteratorImpl_0(list) {
    ConcurrentListIteratorImpl_0.call(this, list);
    this.list_rukohx$_0 = list;
  }
  MutableConcurrentListIteratorImpl_0.prototype.iterator = function () {
    return this;
  };
  MutableConcurrentListIteratorImpl_0.prototype.remove = function () {
    if (this.lastRet < 0)
      throw NoSuchElementException_init();
    this.list_rukohx$_0.removeAt_za3lpa$(this.lastRet);
    this.cursor = this.lastRet;
    this.lastRet = -1;
  };
  MutableConcurrentListIteratorImpl_0.prototype.set_11rb$ = function (element) {
    if (this.lastRet < 0)
      throw IllegalStateException_init_0();
    this.list_rukohx$_0.set_wxm5ur$(this.lastRet, element);
  };
  MutableConcurrentListIteratorImpl_0.prototype.add_11rb$ = function (element) {
    var i = this.cursor;
    this.list_rukohx$_0.add_wxm5ur$(i, element);
    this.cursor = i + 1 | 0;
    this.lastRet = -1;
  };
  MutableConcurrentListIteratorImpl_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableConcurrentListIteratorImpl', interfaces: [MutableConcurrentListIterator, ConcurrentListIteratorImpl_0]};
  function CyclicList(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 16;
    MutableListBase.call(this);
    this.items_0 = ArrayList_init(initialCapacity);
    this._size_0 = 0;
    this.capacity_0 = initialCapacity;
    this.start_0 = 0;
    var $receiver = this.items_0;
    var newSize = initialCapacity;
    var tmp$, tmp$_0;
    tmp$ = $receiver.size;
    tmp$_0 = newSize - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      $receiver.add_11rb$(null);
    }
  }
  Object.defineProperty(CyclicList.prototype, 'size', {get: function () {
    return this._size_0;
  }});
  CyclicList.prototype.unshift_7l2mas$ = function (values) {
    var tmp$;
    tmp$ = get_lastIndex_0(values);
    for (var i = 0; i <= tmp$; i++) {
      this.unshift_11rb$(values[i]);
    }
  };
  var Math_0 = Math;
  CyclicList.prototype.unshift_11rb$ = function (value) {
    if (this._size_0 === this.capacity_0) {
      var b = numberToInt(this._size_0 * 1.75);
      this.resize_0(Math_0.max(8, b));
    }
    var localIndex = this.getLocalIndex_0(-1);
    this.items_0.set_wxm5ur$(localIndex, value);
    this.start_0 = localIndex;
    this._size_0 = this._size_0 + 1 | 0;
  };
  CyclicList.prototype.shift = function () {
    if (this._size_0 === 0)
      throw Exception_init('List is empty');
    var item = ensureNotNull(this.items_0.get_za3lpa$(this.start_0));
    this.items_0.set_wxm5ur$(this.start_0, null);
    this.start_0 = this.getLocalIndex_0(1);
    this._size_0 = this._size_0 - 1 | 0;
    return item;
  };
  CyclicList.prototype.addAll_p1ys8y$ = function (values) {
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var t = tmp$.next();
      this.add_11rb$(t);
    }
  };
  CyclicList.prototype.addAll_7l2mas$ = function (values) {
    var tmp$;
    tmp$ = get_lastIndex_0(values);
    for (var i = 0; i <= tmp$; i++) {
      this.add_11rb$(values[i]);
    }
  };
  CyclicList.prototype.add_wxm5ur$ = function (index, element) {
    if (index === 0) {
      this.unshift_11rb$(element);
    }
     else if (index === this.size) {
      this.add_11rb$(element);
    }
     else {
      var localIndex = this.getLocalIndex_0(index);
      this.items_0.add_wxm5ur$(localIndex, element);
      this._size_0 = this._size_0 + 1 | 0;
      this.capacity_0 = this.capacity_0 + 1 | 0;
    }
  };
  CyclicList.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    if (index >= this._size_0)
      throw new IndexOutOfBoundsException(index.toString() + ' is out of bounds');
    if (index === 0) {
      tmp$ = this.shift();
    }
     else if (index === this.lastIndex) {
      tmp$ = this.pop();
    }
     else {
      var localIndex = this.getLocalIndex_0(index);
      var e = ensureNotNull(this.items_0.removeAt_za3lpa$(localIndex));
      this._size_0 = this._size_0 - 1 | 0;
      this.capacity_0 = this.capacity_0 - 1 | 0;
      tmp$ = e;
    }
    return tmp$;
  };
  CyclicList.prototype.set_wxm5ur$ = function (index, element) {
    var tmp$;
    var localIndex = this.getLocalIndex_0(index);
    tmp$ = this.items_0.get_za3lpa$(localIndex);
    if (tmp$ == null) {
      throw new IndexOutOfBoundsException(index.toString() + ' is out of bounds');
    }
    var previous = tmp$;
    this.items_0.set_wxm5ur$(localIndex, element);
    return previous;
  };
  CyclicList.prototype.add_11rb$ = function (element) {
    if (this._size_0 === this.capacity_0) {
      var b = numberToInt(this._size_0 * 1.75);
      this.resize_0(Math_0.max(8, b));
    }
    var localIndex = this.getLocalIndex_0(this._size_0);
    this.items_0.set_wxm5ur$(localIndex, element);
    this._size_0 = this._size_0 + 1 | 0;
    return true;
  };
  CyclicList.prototype.pop = function () {
    if (this._size_0 === 0)
      throw Exception_init('List is empty');
    var localIndex = this.getLocalIndex_0(this._size_0 - 1 | 0);
    var item = ensureNotNull(this.items_0.get_za3lpa$(localIndex));
    this.items_0.set_wxm5ur$(localIndex, null);
    this._size_0 = this._size_0 - 1 | 0;
    return item;
  };
  CyclicList.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    if (index < 0 || index >= this.size)
      throw IllegalArgumentException_init('Index is out of bounds: ' + index);
    var localIndex = this.getLocalIndex_0(index);
    return (tmp$ = this.items_0.get_za3lpa$(localIndex)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  CyclicList.prototype.getLocalIndex_0 = function (index) {
    var localIndex = this.start_0 + index | 0;
    if (localIndex >= this.capacity_0) {
      localIndex = localIndex - this.capacity_0 | 0;
      if (localIndex >= this.start_0) {
        throw IllegalArgumentException_init('Index is out of bounds: ' + index);
      }
    }
    if (localIndex < 0) {
      localIndex = localIndex + this.capacity_0 | 0;
      if (localIndex < (this.start_0 + this._size_0 | 0)) {
        throw IllegalArgumentException_init('Index is out of bounds: ' + index);
      }
    }
    return localIndex;
  };
  CyclicList.prototype.clear = function () {
    var tmp$;
    tmp$ = this._size_0 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var localIndex = i + this.start_0 | 0;
      if (localIndex >= this.capacity_0)
        localIndex = localIndex - this.capacity_0 | 0;
      else if (localIndex < 0)
        localIndex = localIndex + this.capacity_0 | 0;
      this.items_0.set_wxm5ur$(localIndex, null);
    }
    this._size_0 = 0;
    this.start_0 = 0;
  };
  CyclicList.prototype.resize_0 = function (newCapacity) {
    var newItems = ArrayList_init(newCapacity);
    var tmp$, tmp$_0;
    tmp$ = newItems.size;
    tmp$_0 = newCapacity - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      newItems.add_11rb$(null);
    }
    if ((this.start_0 + this.size | 0) > this.capacity_0) {
      arrayCopy_2(this.items_0, this.start_0, newItems, 0, this.capacity_0 - this.start_0 | 0);
      arrayCopy_2(this.items_0, 0, newItems, this.capacity_0 - this.start_0 | 0, this.size - this.capacity_0 + this.start_0 | 0);
    }
     else {
      arrayCopy_2(this.items_0, this.start_0, newItems, 0, this.size);
    }
    this.items_0 = newItems;
    this.start_0 = 0;
    this.capacity_0 = newCapacity;
  };
  CyclicList.prototype.shiftAll_za3lpa$ = function (delta) {
    if (delta === 0)
      return;
    var delta2 = delta;
    if (delta2 < 0)
      delta2 = delta2 + this.size | 0;
    var newItems = ArrayList_init(this.capacity_0);
    var newSize = this.capacity_0;
    var tmp$, tmp$_0;
    tmp$ = newItems.size;
    tmp$_0 = newSize - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      newItems.add_11rb$(null);
    }
    arrayCopy_2(this, delta2, newItems, 0, this.size - delta2 | 0);
    arrayCopy_2(this, 0, newItems, this.size - delta2 | 0, delta2);
    this.items_0 = newItems;
    this.start_0 = 0;
  };
  CyclicList.$metadata$ = {kind: Kind_CLASS, simpleName: 'CyclicList', interfaces: [MutableListBase, Clearable]};
  function cyclicListPool$lambda() {
    return new CyclicList();
  }
  var cyclicListPool;
  function cyclicListObtain() {
    var tmp$;
    return Kotlin.isType(tmp$ = cyclicListPool.obtain(), CyclicList) ? tmp$ : throwCCE();
  }
  function DualHashMap(removeEmptyInnerMaps) {
    if (removeEmptyInnerMaps === void 0)
      removeEmptyInnerMaps = false;
    this.removeEmptyInnerMaps = removeEmptyInnerMaps;
    this.map = HashMap_init();
  }
  DualHashMap.prototype.put_1llc0w$ = function (key1, key2, value) {
    var inner = this.map.get_11rb$(key1);
    if (inner == null) {
      inner = HashMap_init();
      this.map.put_xwzc9p$(key1, inner);
    }
    inner.put_xwzc9p$(key2, value);
  };
  DualHashMap.prototype.get_xwzc9p$ = function (key1, key2) {
    var tmp$;
    return (tmp$ = this.map.get_11rb$(key1)) != null ? tmp$.get_11rb$(key2) : null;
  };
  DualHashMap.prototype.get_11rb$ = function (key1) {
    return this.map.get_11rb$(key1);
  };
  DualHashMap.prototype.remove_11rb$ = function (key) {
    return this.map.remove_11rb$(key);
  };
  DualHashMap.prototype.remove_xwzc9p$ = function (key1, key2) {
    var tmp$;
    tmp$ = this.map.get_11rb$(key1);
    if (tmp$ == null) {
      return null;
    }
    var inner = tmp$;
    var value = inner.remove_11rb$(key2);
    if (this.removeEmptyInnerMaps && inner.isEmpty()) {
      this.map.remove_11rb$(key1);
    }
    return value;
  };
  DualHashMap.prototype.clear = function () {
    this.map.clear();
  };
  DualHashMap.$metadata$ = {kind: Kind_CLASS, simpleName: 'DualHashMap', interfaces: [Clearable]};
  function arrayCopy_2(src, srcPos, dest, destPos, length) {
    if (destPos === void 0)
      destPos = 0;
    if (length === void 0)
      length = src.size;
    var tmp$, tmp$_0, tmp$_1;
    if (destPos > srcPos) {
      var destIndex = length + destPos - 1 | 0;
      for (var i = srcPos + length - 1 | 0; i >= srcPos; i--) {
        addOrSet(dest, (tmp$ = destIndex, destIndex = tmp$ - 1 | 0, tmp$), src.get_za3lpa$(i));
      }
    }
     else {
      var destIndex_0 = destPos;
      tmp$_0 = srcPos + length - 1 | 0;
      for (var i_0 = srcPos; i_0 <= tmp$_0; i_0++) {
        addOrSet(dest, (tmp$_1 = destIndex_0, destIndex_0 = tmp$_1 + 1 | 0, tmp$_1), src.get_za3lpa$(i_0));
      }
    }
  }
  function copy($receiver) {
    var newList = ArrayList_init($receiver.size);
    arrayCopy_2($receiver, 0, newList);
    return newList;
  }
  function sortedInsertionIndex($receiver, element, fromIndex, toIndex, matchForwards) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = $receiver.size;
    if (matchForwards === void 0)
      matchForwards = true;
    var indexA = fromIndex;
    var indexB = toIndex;
    while (indexA < indexB) {
      var midIndex = indexA + indexB >>> 1;
      var comparison = Kotlin.compareTo(element, $receiver.get_za3lpa$(midIndex));
      if (comparison === 0) {
        if (matchForwards) {
          indexA = midIndex + 1 | 0;
        }
         else {
          indexB = midIndex;
        }
      }
       else if (comparison > 0) {
        indexA = midIndex + 1 | 0;
      }
       else {
        indexB = midIndex;
      }
    }
    return indexA;
  }
  function sortedInsertionIndex_0($receiver, element, fromIndex, toIndex, matchForwards, comparator) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = $receiver.size;
    if (matchForwards === void 0)
      matchForwards = true;
    var indexA = fromIndex;
    var indexB = toIndex;
    while (indexA < indexB) {
      var midIndex = indexA + indexB >>> 1;
      var comparison = comparator(element, $receiver.get_za3lpa$(midIndex));
      if (comparison === 0) {
        if (matchForwards) {
          indexA = midIndex + 1 | 0;
        }
         else {
          indexB = midIndex;
        }
      }
       else if (comparison > 0) {
        indexA = midIndex + 1 | 0;
      }
       else {
        indexB = midIndex;
      }
    }
    return indexA;
  }
  function addSorted($receiver, element, matchForwards, comparator) {
    if (matchForwards === void 0)
      matchForwards = true;
    var index = sortedInsertionIndex_0($receiver, element, void 0, void 0, matchForwards, comparator);
    $receiver.add_wxm5ur$(index, element);
    return index;
  }
  function addSorted_0($receiver, element, matchForwards) {
    if (matchForwards === void 0)
      matchForwards = true;
    var index = sortedInsertionIndex($receiver, element, void 0, void 0, matchForwards);
    $receiver.add_wxm5ur$(index, element);
    return index;
  }
  function ListBase() {
  }
  Object.defineProperty(ListBase.prototype, 'lastIndex', {get: function () {
    return this.size - 1 | 0;
  }});
  ListBase.prototype.indexOf_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.lastIndex;
    for (var i = 0; i <= tmp$; i++) {
      if (equals(this.get_za3lpa$(i), element))
        return i;
    }
    return -1;
  };
  ListBase.prototype.lastIndexOf_11rb$ = function (element) {
    for (var i = this.lastIndex; i >= 0; i--) {
      if (equals(this.get_za3lpa$(i), element))
        return i;
    }
    return -1;
  };
  ListBase.prototype.contains_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.lastIndex;
    for (var i = 0; i <= tmp$; i++) {
      if (equals(this.get_za3lpa$(i), element))
        return true;
    }
    return false;
  };
  ListBase.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!this.contains_11rb$(element))
        return false;
    }
    return true;
  };
  ListBase.prototype.isEmpty = function () {
    return this.size === 0;
  };
  ListBase.prototype.iterator = function () {
    return new ListIteratorImpl(this);
  };
  ListBase.prototype.listIterator = function () {
    return new ListIteratorImpl(this);
  };
  ListBase.prototype.listIterator_za3lpa$ = function (index) {
    var t = new ListIteratorImpl(this);
    t.cursor = index;
    return t;
  };
  ListBase.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new SubList(this, fromIndex, toIndex);
  };
  ListBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListBase', interfaces: [List]};
  function MutableListBase() {
    ListBase.call(this);
  }
  MutableListBase.prototype.add_11rb$ = function (element) {
    this.add_wxm5ur$(this.size, element);
    return true;
  };
  MutableListBase.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$, tmp$_0;
    var i = index;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.add_wxm5ur$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0), element);
    }
    return true;
  };
  MutableListBase.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.add_11rb$(element);
    }
    return true;
  };
  MutableListBase.prototype.clear = function () {
    for (var i = this.lastIndex; i >= 0; i--) {
      this.removeAt_za3lpa$(i);
    }
  };
  MutableListBase.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.removeAt_za3lpa$(index);
    return true;
  };
  MutableListBase.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      changed = (changed && this.remove_11rb$(i));
    }
    return changed;
  };
  MutableListBase.prototype.retainAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    tmp$ = this.lastIndex;
    for (var i = 0; i <= tmp$; i++) {
      var element = this.get_za3lpa$(i);
      if (!elements.contains_11rb$(element)) {
        changed = true;
        this.remove_11rb$(element);
      }
    }
    return changed;
  };
  MutableListBase.prototype.iterator = function () {
    return new MutableListIteratorImpl(this);
  };
  MutableListBase.prototype.listIterator = function () {
    return new MutableListIteratorImpl(this);
  };
  MutableListBase.prototype.listIterator_za3lpa$ = function (index) {
    var iterator = new MutableListIteratorImpl(this);
    iterator.cursor = index;
    return iterator;
  };
  MutableListBase.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new MutableSubList(this, fromIndex, toIndex);
  };
  MutableListBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableListBase', interfaces: [MutableList, Clearable, ListBase]};
  function ListIteratorImpl(list) {
    this.list = list;
    this.cursor = 0;
    this.lastRet = -1;
  }
  ListIteratorImpl.prototype.hasNext = function () {
    return this.cursor < this.list.size;
  };
  ListIteratorImpl.prototype.next = function () {
    var i = this.cursor;
    if (i >= this.list.size)
      throw Exception_init('Iterator does not have next.');
    this.cursor = i + 1 | 0;
    this.lastRet = i;
    return this.list.get_za3lpa$(i);
  };
  ListIteratorImpl.prototype.nextIndex = function () {
    return this.cursor;
  };
  ListIteratorImpl.prototype.hasPrevious = function () {
    return this.cursor !== 0;
  };
  ListIteratorImpl.prototype.previous = function () {
    var i = this.cursor - 1 | 0;
    if (i < 0)
      throw Exception_init('Iterator does not have previous.');
    this.cursor = i;
    this.lastRet = i;
    return this.list.get_za3lpa$(i);
  };
  ListIteratorImpl.prototype.previousIndex = function () {
    return this.cursor - 1 | 0;
  };
  ListIteratorImpl.prototype.clear = function () {
    this.cursor = 0;
    this.lastRet = -1;
  };
  ListIteratorImpl.prototype.iterator = function () {
    return this;
  };
  ListIteratorImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListIteratorImpl', interfaces: [Iterable, ListIterator, Clearable]};
  function MutableListIteratorImpl(mutableList) {
    ListIteratorImpl.call(this, mutableList);
    this.mutableList_rym7p8$_0 = mutableList;
  }
  MutableListIteratorImpl.prototype.add_11rb$ = function (element) {
    this.mutableList_rym7p8$_0.add_wxm5ur$(this.cursor, element);
    this.cursor = this.cursor + 1 | 0;
    this.lastRet = this.lastRet + 1 | 0;
  };
  MutableListIteratorImpl.prototype.remove = function () {
    if (this.lastRet < 0)
      throw Exception_init('Cannot remove before iteration.');
    this.mutableList_rym7p8$_0.removeAt_za3lpa$(this.lastRet);
  };
  MutableListIteratorImpl.prototype.set_11rb$ = function (element) {
    if (this.lastRet < 0)
      throw Exception_init('Cannot set before iteration.');
    this.mutableList_rym7p8$_0.set_wxm5ur$(this.lastRet, element);
  };
  MutableListIteratorImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableListIteratorImpl', interfaces: [MutableListIterator, ListIteratorImpl]};
  function SubList(target, fromIndex, toIndex) {
    ListBase.call(this);
    this.target_0 = target;
    this.fromIndex_0 = fromIndex;
    this.toIndex_0 = toIndex;
  }
  Object.defineProperty(SubList.prototype, 'size', {get: function () {
    return this.toIndex_0 - this.fromIndex_0 | 0;
  }});
  SubList.prototype.get_za3lpa$ = function (index) {
    return this.target_0.get_za3lpa$(index - this.fromIndex_0 | 0);
  };
  SubList.$metadata$ = {kind: Kind_CLASS, simpleName: 'SubList', interfaces: [ListBase]};
  function MutableSubList(target, fromIndex, toIndex) {
    MutableListBase.call(this);
    this.target_0 = target;
    this.fromIndex_0 = fromIndex;
    this.toIndex_0 = toIndex;
  }
  Object.defineProperty(MutableSubList.prototype, 'size', {get: function () {
    return this.toIndex_0 - this.fromIndex_0 | 0;
  }});
  MutableSubList.prototype.get_za3lpa$ = function (index) {
    return this.target_0.get_za3lpa$(index - this.fromIndex_0 | 0);
  };
  MutableSubList.prototype.add_wxm5ur$ = function (index, element) {
    this.target_0.add_wxm5ur$(index - this.fromIndex_0 | 0, element);
  };
  MutableSubList.prototype.removeAt_za3lpa$ = function (index) {
    return this.target_0.removeAt_za3lpa$(index - this.fromIndex_0 | 0);
  };
  MutableSubList.prototype.set_wxm5ur$ = function (index, element) {
    return this.target_0.set_wxm5ur$(index - this.fromIndex_0 | 0, element);
  };
  MutableSubList.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableSubList', interfaces: [MutableListBase]};
  function arrayListPool$ObjectLiteral(initialCapacity, create) {
    ObjectPool.call(this, initialCapacity, create);
  }
  arrayListPool$ObjectLiteral.prototype.free_11rb$ = function (obj) {
    obj.clear();
    ObjectPool.prototype.free_11rb$.call(this, obj);
  };
  arrayListPool$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObjectPool]};
  function arrayListPool$arrayListPool$ObjectLiteral_init$lambda() {
    return ArrayList_init();
  }
  var arrayListPool;
  function arrayListObtain() {
    var tmp$;
    return Kotlin.isType(tmp$ = arrayListPool.obtain(), MutableList) ? tmp$ : throwCCE();
  }
  function addOrSet($receiver, i, value) {
    if (i === $receiver.size)
      $receiver.add_11rb$(value);
    else
      $receiver.set_wxm5ur$(i, value);
  }
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var Comparator = Kotlin.kotlin.Comparator;
  function ListView() {
    this.wrapped_0 = emptyList();
    this.observableWrapped_0 = null;
    this.local_0 = ArrayList_init();
    this._added_0 = new Signal2();
    this._removed_0 = new Signal2();
    this._changed_0 = new Signal3();
    this._modified_0 = new Signal2();
    this._reset_0 = new Signal0();
    this.reset_911yf8$_0 = this._reset_0;
    this.isDirty_0 = true;
    this.iteratorPool_0 = ClearableObjectPool_init(ListView$iteratorPool$lambda(this));
    this.filter_yjeey1$_0 = new observable$ObjectLiteral(ListView$filter$lambda(this), null);
    this.sortComparator_owsusz$_0 = new observable$ObjectLiteral(ListView$sortComparator$lambda(this), null);
    this.insertionComparator_0 = ListView$insertionComparator$lambda(this);
    this.sortComparatorObj_0 = new Comparator$ObjectLiteral(ListView$sortComparatorObj$lambda(this));
  }
  var ListView$filter_metadata = new PropertyMetadata('filter');
  var ListView$sortComparator_metadata = new PropertyMetadata('sortComparator');
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function copy_0($receiver) {
    var m = HashMap_init();
    m.putAll_a2k3zr$($receiver);
    return m;
  }
  function mapPool$ObjectLiteral(initialCapacity, create) {
    ObjectPool.call(this, initialCapacity, create);
  }
  mapPool$ObjectLiteral.prototype.free_11rb$ = function (obj) {
    obj.clear();
    ObjectPool.prototype.free_11rb$.call(this, obj);
  };
  mapPool$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObjectPool]};
  function mapPool$mapPool$ObjectLiteral_init$lambda() {
    return HashMap_init();
  }
  var mapPool;
  function ObservableConcatList(listA, listB) {
    ListBase.call(this);
    this.listA_0 = listA;
    this.listB_0 = listB;
    this._added_0 = new Signal2();
    this._removed_0 = new Signal2();
    this._changed_0 = new Signal3();
    this._modified_0 = new Signal2();
    this._reset_0 = new Signal0();
    this.iteratorPool_0 = ClearableObjectPool_init(ObservableConcatList$iteratorPool$lambda(this));
    this.listA_0.added.add_trkh7z$(ObservableConcatList_init$lambda(this));
    this.listB_0.added.add_trkh7z$(ObservableConcatList_init$lambda_0(this));
    this.listA_0.removed.add_trkh7z$(ObservableConcatList_init$lambda_1(this));
    this.listB_0.removed.add_trkh7z$(ObservableConcatList_init$lambda_2(this));
    this.listA_0.changed.add_trkh7z$(ObservableConcatList_init$lambda_3(this));
    this.listB_0.changed.add_trkh7z$(ObservableConcatList_init$lambda_4(this));
    this.listA_0.modified.add_trkh7z$(ObservableConcatList_init$lambda_5(this));
    this.listB_0.modified.add_trkh7z$(ObservableConcatList_init$lambda_6(this));
    this.listA_0.reset.add_trkh7z$(ObservableConcatList_init$lambda_7(this));
    this.listB_0.reset.add_trkh7z$(ObservableConcatList_init$lambda_8(this));
  }
  function ObservableList() {
  }
  ObservableList.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ObservableList', interfaces: [ConcurrentList]};
  function MutableObservableList() {
  }
  MutableObservableList.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableObservableList', interfaces: [MutableConcurrentList, ObservableList]};
  function Clearable() {
  }
  Clearable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Clearable', interfaces: []};
  function Pool() {
  }
  Pool.prototype.freeAll_4ezy5m$ = function (list) {
    var tmp$;
    tmp$ = get_lastIndex(list);
    for (var i = 0; i <= tmp$; i++) {
      this.free_11rb$(list.get_za3lpa$(i));
    }
  };
  Pool.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Pool', interfaces: []};
  function freeTo($receiver, pool) {
    pool.freeAll_4ezy5m$($receiver);
    $receiver.clear();
  }
  function ObjectPool(initialCapacity, create) {
    this.create_m4w01p$_0 = create;
    this.freeObjects_qy8k4t$_0 = ArrayList_init(initialCapacity);
  }
  ObjectPool.prototype.obtain = function () {
    var tmp$;
    if (this.freeObjects_qy8k4t$_0.isEmpty()) {
      tmp$ = this.create_m4w01p$_0();
    }
     else {
      tmp$ = pop(this.freeObjects_qy8k4t$_0);
    }
    return tmp$;
  };
  ObjectPool.prototype.free_11rb$ = function (obj) {
    this.freeObjects_qy8k4t$_0.add_11rb$(obj);
  };
  ObjectPool.prototype.forEach_qlkmfe$ = function (callback) {
    var tmp$;
    tmp$ = get_lastIndex(this.freeObjects_qy8k4t$_0);
    for (var i = 0; i <= tmp$; i++) {
      callback(this.freeObjects_qy8k4t$_0.get_za3lpa$(i));
    }
  };
  ObjectPool.prototype.clear = function () {
    this.freeObjects_qy8k4t$_0.clear();
  };
  ObjectPool.$metadata$ = {kind: Kind_CLASS, simpleName: 'ObjectPool', interfaces: [Pool]};
  function ObjectPool_init(create, $this) {
    $this = $this || Object.create(ObjectPool.prototype);
    ObjectPool.call($this, 8, create);
    return $this;
  }
  function ClearableObjectPool(initialCapacity, create) {
    ObjectPool.call(this, initialCapacity, create);
  }
  ClearableObjectPool.prototype.free_11rb$ = function (obj) {
    obj.clear();
    ObjectPool.prototype.free_11rb$.call(this, obj);
  };
  ClearableObjectPool.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClearableObjectPool', interfaces: [ObjectPool]};
  function ClearableObjectPool_init(create, $this) {
    $this = $this || Object.create(ClearableObjectPool.prototype);
    ClearableObjectPool.call($this, 8, create);
    return $this;
  }
  function LimitedPoolImpl(size, arrayFactory, create) {
    this.size = size;
    this.create_0 = create;
    this.totalFreeObjects_0 = 0;
    this.freeObjects_0 = arrayFactory(this.size);
    this.mostRecent_0 = -1;
    this.activeObjects_0 = arrayFactory(this.size);
  }
  function Disposable() {
  }
  Disposable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Disposable', interfaces: []};
  var LONG_MAX_VALUE;
  var INT_MAX_VALUE;
  var INT_MIN_VALUE;
  var LONG_MIN_VALUE;
  function floor($receiver) {
    return numberToInt($receiver);
  }
  function round($receiver) {
    return Math_0.round($receiver);
  }
  function notCloseTo($receiver, other, tolerance) {
    if (tolerance === void 0)
      tolerance = 1.0E-4;
    var value = $receiver - other;
    return (value < 0.0 ? -value : value) > tolerance;
  }
  function closeTo($receiver, other, tolerance) {
    if (tolerance === void 0)
      tolerance = 1.0E-4;
    var value = $receiver - other;
    return (value < 0.0 ? -value : value) <= tolerance;
  }
  function replace2($receiver, target, replacement) {
    return join2_0(split2_0($receiver, target.toString()), replacement.toString());
  }
  function replace2_0($receiver, target, replacement) {
    return join2(split2($receiver, target), replacement);
  }
  function join2($receiver, delim) {
    var tmp$;
    var builder = new StringBuilder();
    tmp$ = get_lastIndex_0($receiver);
    for (var i = 0; i <= tmp$; i++) {
      if (i !== 0)
        builder.append_s8itvh$(delim);
      builder.append_gw00v9$($receiver[i]);
    }
    return builder.toString();
  }
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var Array_0 = Array;
  function split2($receiver, delim) {
    var tmp$;
    var count = 0;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      if (unboxChar(toBoxedChar(element)) === delim) {
        count = count + 1 | 0;
      }
    }
    var size = count + 1 | 0;
    var index = {v: 0};
    var array = Array_0(size);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      var nextIndex = indexOf_0($receiver, delim, index.v);
      var sub;
      if (nextIndex === -1) {
        var startIndex = index.v;
        sub = $receiver.substring(startIndex);
      }
       else {
        var startIndex_0 = index.v;
        sub = $receiver.substring(startIndex_0, nextIndex);
      }
      index.v = nextIndex + 1 | 0;
      array[i] = sub;
    }
    return array;
  }
  function join2_0($receiver, delim) {
    var tmp$;
    var builder = new StringBuilder();
    tmp$ = get_lastIndex_0($receiver);
    for (var i = 0; i <= tmp$; i++) {
      if (i !== 0)
        builder.append_gw00v9$(delim);
      builder.append_gw00v9$($receiver[i]);
    }
    return builder.toString();
  }
  function split2_0($receiver, delim) {
    var len = delim.length;
    var size = 0;
    var index = {v: 0};
    while (true) {
      index.v = indexOf($receiver, delim, index.v);
      size = size + 1 | 0;
      if (index.v === -1)
        break;
      index.v = index.v + len | 0;
    }
    index.v = 0;
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var nextIndex = indexOf($receiver, delim, index.v);
      var sub;
      if (nextIndex === -1) {
        var startIndex = index.v;
        sub = $receiver.substring(startIndex);
      }
       else {
        var startIndex_0 = index.v;
        sub = $receiver.substring(startIndex_0, nextIndex);
      }
      index.v = nextIndex + len | 0;
      array[i] = sub;
    }
    return array;
  }
  function repeat2($receiver, n) {
    if (n < 0)
      throw IllegalArgumentException_init('Value should be non-negative, but was ' + n);
    var sb = StringBuilder_init(Kotlin.imul(n, $receiver.length));
    for (var i = 1; i <= n; i++) {
      sb.append_gw00v9$($receiver);
    }
    return sb.toString();
  }
  var lineSeparator;
  function removeBackslashes(value) {
    var tmp$;
    var unescaped = new StringBuilder();
    var lastIndex = 0;
    var i = 0;
    var n = value.length;
    while (i < n) {
      if (value.charCodeAt(i) === 92 && (i + 1 | 0) < n) {
        var next = value.charCodeAt((i = i + 1 | 0, i));
        switch (next) {
          case 116:
            tmp$ = 9;
            break;
          case 98:
            tmp$ = 8;
            break;
          case 110:
            tmp$ = 10;
            break;
          case 114:
            tmp$ = 13;
            break;
          case 39:
            tmp$ = 39;
            break;
          case 34:
            tmp$ = 34;
            break;
          case 47:
            tmp$ = 47;
            break;
          case 92:
            tmp$ = 92;
            break;
          case 36:
            tmp$ = 36;
            break;
          case 117:
            if ((i + 5 | 0) <= n) {
              var startIndex = i + 1 | 0;
              var endIndex = i + 5 | 0;
              var digits = toInt(value.substring(startIndex, endIndex), 16);
              var startIndex_0 = lastIndex;
              var endIndex_0 = i - 1 | 0;
              unescaped.append_gw00v9$(value.substring(startIndex_0, endIndex_0));
              unescaped.append_s8itvh$(toChar(digits));
              i = i + 4 | 0;
              lastIndex = i + 1 | 0;
            }

            tmp$ = null;
            break;
          default:tmp$ = null;
            break;
        }
        var newChar = tmp$;
        if (newChar != null) {
          var startIndex_1 = lastIndex;
          var endIndex_1 = i - 1 | 0;
          unescaped.append_gw00v9$(value.substring(startIndex_1, endIndex_1));
          unescaped.append_s8itvh$(newChar);
          lastIndex = i + 1 | 0;
        }
      }
      i = i + 1 | 0;
    }
    var startIndex_2 = lastIndex;
    unescaped.append_gw00v9$(value.substring(startIndex_2));
    return unescaped.toString();
  }
  function LazyInstance(receiver, factory) {
    this.receiver_0 = receiver;
    this.factory_0 = factory;
    this._created_0 = false;
    this._instance_0 = null;
  }
  Object.defineProperty(LazyInstance.prototype, 'created', {get: function () {
    return this._created_0;
  }});
  Object.defineProperty(LazyInstance.prototype, 'instance', {get: function () {
    if (!this._created_0) {
      this._instance_0 = this.factory_0(this.receiver_0);
      this._created_0 = true;
    }
    return ensureNotNull(this._instance_0);
  }});
  LazyInstance.prototype.clear = function () {
    this._instance_0 = null;
    this._created_0 = false;
  };
  LazyInstance.$metadata$ = {kind: Kind_CLASS, simpleName: 'LazyInstance', interfaces: []};
  function disposeInstance($receiver) {
    var tmp$;
    if ($receiver.created) {
      (tmp$ = $receiver.instance) != null ? (tmp$.dispose(), Unit) : null;
      $receiver.clear();
    }
  }
  function ColorRo() {
  }
  ColorRo.prototype.times_mx4ult$ = function (value) {
    return (new Color_0()).set_xksl39$(this).mul_mx4ult$(value);
  };
  ColorRo.prototype.plus_xksl39$ = function (color) {
    return (new Color_0()).set_xksl39$(this).add_xksl39$(color);
  };
  ColorRo.prototype.minus_xksl39$ = function (color) {
    return (new Color_0()).set_xksl39$(this).sub_xksl39$(color);
  };
  ColorRo.prototype.toCssString = function () {
    return 'rgba(' + numberToInt(this.r * 255) + ', ' + numberToInt(this.g * 255) + ', ' + numberToInt(this.b * 255) + ', ' + this.a + ')';
  };
  ColorRo.prototype.toRgbString = function () {
    return toOctet(this.r) + toOctet(this.g) + toOctet(this.b);
  };
  ColorRo.prototype.toRgbaString = function () {
    return toOctet(this.r) + toOctet(this.g) + toOctet(this.b) + toOctet(this.a);
  };
  ColorRo.prototype.toHsl_y02iys$ = function (out) {
    out.a = this.a;
    var a = this.r;
    var b = this.g;
    var c = this.b;
    var max = Math_0.max(a, b, c);
    var a_0 = this.r;
    var b_0 = this.g;
    var c_0 = this.b;
    var min = Math_0.min(a_0, b_0, c_0);
    out.l = (max + min) * 0.5;
    var d = max - min;
    if (d === 0.0) {
      out.h = 0.0;
      out.s = 0.0;
    }
     else {
      if (max === this.r) {
        out.h = 60.0 * ((this.g - this.b) / d);
      }
       else if (max === this.g) {
        out.h = 60.0 * ((this.b - this.r) / d + 2.0);
      }
       else if (max === this.b) {
        out.h = 60.0 * ((this.r - this.g) / d + 4.0);
      }
      if (out.h < 0.0)
        out.h = out.h + 360.0;
      if (out.h >= 360.0)
        out.h = out.h - 360.0;
      var value = 2 * out.l - 1.0;
      out.s = d / (1.0 - (value < 0.0 ? -value : value));
    }
    return out;
  };
  ColorRo.prototype.toHsv_y02iyi$ = function (out) {
    out.a = this.a;
    var a = this.r;
    var b = this.g;
    var c = this.b;
    var max = Math_0.max(a, b, c);
    var a_0 = this.r;
    var b_0 = this.g;
    var c_0 = this.b;
    var min = Math_0.min(a_0, b_0, c_0);
    out.v = max;
    var d = max - min;
    if (d === 0.0) {
      out.h = 0.0;
    }
     else {
      if (max === this.r) {
        out.h = 60.0 * ((this.g - this.b) / d);
      }
       else if (max === this.g) {
        out.h = 60.0 * ((this.b - this.r) / d + 2.0);
      }
       else if (max === this.b) {
        out.h = 60.0 * ((this.r - this.g) / d + 4.0);
      }
      if (out.h < 0.0)
        out.h = out.h + 360.0;
      if (out.h >= 360.0)
        out.h = out.h - 360.0;
      if (max === 0.0)
        out.s = 0.0;
      else
        out.s = d / max;
    }
    return out;
  };
  ColorRo.prototype.closeTo_c3ty5c$$default = function (other, tolerance) {
    if (this === other)
      return true;
    if (!closeTo(this.r, other.r, tolerance))
      return false;
    if (!closeTo(this.g, other.g, tolerance))
      return false;
    if (!closeTo(this.b, other.b, tolerance))
      return false;
    if (!closeTo(this.a, other.a, tolerance))
      return false;
    return true;
  };
  ColorRo.prototype.closeTo_c3ty5c$ = function (other, tolerance, callback$default) {
    if (tolerance === void 0)
      tolerance = 1.0E-4;
    return callback$default ? callback$default(other, tolerance) : this.closeTo_c3ty5c$$default(other, tolerance);
  };
  ColorRo.prototype.copy = function () {
    return (new Color_0()).set_xksl39$(this);
  };
  ColorRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ColorRo', interfaces: []};
  function Color(rgba) {
    return (new Color_0()).set8888_s8cxhz$(rgba);
  }
  function Color_0(r, g, b, a) {
    Color$Companion_getInstance();
    if (r === void 0)
      r = 0.0;
    if (g === void 0)
      g = 0.0;
    if (b === void 0)
      b = 0.0;
    if (a === void 0)
      a = 0.0;
    this.r_ok1x94$_0 = r;
    this.g_ok1wzn$_0 = g;
    this.b_ok1wvc$_0 = b;
    this.a_ok1wuh$_0 = a;
  }
  Object.defineProperty(Color_0.prototype, 'r', {get: function () {
    return this.r_ok1x94$_0;
  }, set: function (r) {
    this.r_ok1x94$_0 = r;
  }});
  Object.defineProperty(Color_0.prototype, 'g', {get: function () {
    return this.g_ok1wzn$_0;
  }, set: function (g) {
    this.g_ok1wzn$_0 = g;
  }});
  Object.defineProperty(Color_0.prototype, 'b', {get: function () {
    return this.b_ok1wvc$_0;
  }, set: function (b) {
    this.b_ok1wvc$_0 = b;
  }});
  Object.defineProperty(Color_0.prototype, 'a', {get: function () {
    return this.a_ok1wuh$_0;
  }, set: function (a) {
    this.a_ok1wuh$_0 = a;
  }});
  Color_0.prototype.set_xksl39$ = function (color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a;
    return this;
  };
  Color_0.prototype.mul_xksl39$ = function (color) {
    this.r = this.r * color.r;
    this.g = this.g * color.g;
    this.b = this.b * color.b;
    this.a = this.a * color.a;
    return this;
  };
  Color_0.prototype.mul_mx4ult$ = function (value) {
    this.r = this.r * value;
    this.g = this.g * value;
    this.b = this.b * value;
    this.a = this.a * value;
    return this;
  };
  Color_0.prototype.add_xksl39$ = function (color) {
    this.r = this.r + color.r;
    this.g = this.g + color.g;
    this.b = this.b + color.b;
    this.a = this.a + color.a;
    return this;
  };
  Color_0.prototype.clear = function () {
    this.r = 0.0;
    this.g = 0.0;
    this.b = 0.0;
    this.a = 0.0;
  };
  Color_0.prototype.sub_xksl39$ = function (color) {
    this.r = this.r - color.r;
    this.g = this.g - color.g;
    this.b = this.b - color.b;
    this.a = this.a - color.a;
    return this;
  };
  Color_0.prototype.clamp = function () {
    if (this.r < 0.0)
      this.r = 0.0;
    else if (this.r > 1.0)
      this.r = 1.0;
    if (this.g < 0.0)
      this.g = 0.0;
    else if (this.g > 1.0)
      this.g = 1.0;
    if (this.b < 0.0)
      this.b = 0.0;
    else if (this.b > 1.0)
      this.b = 1.0;
    if (this.a < 0.0)
      this.a = 0.0;
    else if (this.a > 1.0)
      this.a = 1.0;
    return this;
  };
  Color_0.prototype.set_7b5o5w$ = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    return this;
  };
  Color_0.prototype.set8888_s8cxhz$ = function (rgba) {
    this.r = rgba.and(Kotlin.Long.fromInt(-16777216)).shiftRightUnsigned(24).toNumber() / 255.0;
    this.g = rgba.and(Kotlin.Long.fromInt(16711680)).shiftRightUnsigned(16).toNumber() / 255.0;
    this.b = rgba.and(Kotlin.Long.fromInt(65280)).shiftRightUnsigned(8).toNumber() / 255.0;
    this.a = rgba.and(Kotlin.Long.fromInt(255)).toNumber() / 255.0;
    return this;
  };
  Color_0.prototype.set888_za3lpa$ = function (rgb) {
    this.r = ((rgb & 16711680) >>> 16) / 255.0;
    this.g = ((rgb & 65280) >>> 8) / 255.0;
    this.b = (rgb & 255) / 255.0;
    this.a = 1.0;
    return this;
  };
  Color_0.prototype.add_7b5o5w$ = function (r, g, b, a) {
    this.r = this.r + r;
    this.g = this.g + g;
    this.b = this.b + b;
    this.a = this.a + a;
    return this;
  };
  Color_0.prototype.sub_7b5o5w$ = function (r, g, b, a) {
    this.r = this.r - r;
    this.g = this.g - g;
    this.b = this.b - b;
    this.a = this.a - a;
    return this;
  };
  Color_0.prototype.mul_7b5o5w$ = function (r, g, b, a) {
    this.r = this.r * r;
    this.g = this.g * g;
    this.b = this.b * b;
    this.a = this.a * a;
    return this;
  };
  Color_0.prototype.lerp_c3ty5c$ = function (target, t) {
    this.r = this.r + t * (target.r - this.r);
    this.g = this.g + t * (target.g - this.g);
    this.b = this.b + t * (target.b - this.b);
    this.a = this.a + t * (target.a - this.a);
    return this;
  };
  Color_0.prototype.lerp_s2l86p$ = function (r, g, b, a, t) {
    this.r = this.r + t * (r - this.r);
    this.g = this.g + t * (g - this.g);
    this.b = this.b + t * (b - this.b);
    this.a = this.a + t * (a - this.a);
    return this;
  };
  Color_0.prototype.invert = function () {
    this.r = 1 - this.r;
    this.g = 1 - this.g;
    this.b = 1 - this.b;
  };
  Color_0.prototype.premultiplyAlpha = function () {
    this.r = this.r * this.a;
    this.g = this.g * this.a;
    this.b = this.b * this.a;
    return this;
  };
  function Color$Companion() {
    Color$Companion_instance = this;
    this.CLEAR = new Color_0(0.0, 0.0, 0.0, 0.0);
    this.WHITE = new Color_0(1.0, 1.0, 1.0, 1.0);
    this.BLACK = new Color_0(0.0, 0.0, 0.0, 1.0);
    this.RED = new Color_0(1.0, 0.0, 0.0, 1.0);
    this.BROWN = new Color_0(0.5, 0.3, 0.0, 1.0);
    this.GREEN = new Color_0(0.0, 1.0, 0.0, 1.0);
    this.BLUE = new Color_0(0.0, 0.0, 1.0, 1.0);
    this.LIGHT_BLUE = new Color_0(0.68, 0.68, 1.0, 1.0);
    this.LIGHT_GRAY = new Color_0(0.75, 0.75, 0.75, 1.0);
    this.GRAY = new Color_0(0.5, 0.5, 0.5, 1.0);
    this.DARK_GRAY = new Color_0(0.25, 0.25, 0.25, 1.0);
    this.PINK = new Color_0(1.0, 0.68, 0.68, 1.0);
    this.ORANGE = new Color_0(1.0, 0.78, 0.0, 1.0);
    this.YELLOW = new Color_0(1.0, 1.0, 0.0, 1.0);
    this.MAGENTA = new Color_0(1.0, 0.0, 1.0, 1.0);
    this.CYAN = new Color_0(0.0, 1.0, 1.0, 1.0);
    this.OLIVE = new Color_0(0.5, 0.5, 0.0, 1.0);
    this.PURPLE = new Color_0(0.5, 0.0, 0.5, 1.0);
    this.MAROON = new Color_0(0.5, 0.0, 0.0, 1.0);
    this.TEAL = new Color_0(0.0, 0.5, 0.5, 1.0);
    this.NAVY = new Color_0(0.0, 0.0, 0.5, 1.0);
    this.clamped_0 = new Color_0();
  }
  Color$Companion.prototype.fromStr_61zpoe$ = function (str) {
    if (startsWith_0(str, '0x')) {
      return this.fromRgbaStr_61zpoe$(str.substring(2));
    }
     else if (startsWith_0(str, '#')) {
      return this.fromRgbaStr_61zpoe$(str.substring(1));
    }
     else if (startsWith_0(str, 'rgb', true))
      return this.fromCssStr_61zpoe$(str);
    else
      return this.fromRgbaStr_61zpoe$(str);
  };
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  Color$Companion.prototype.from8888Str_61zpoe$ = function (value) {
    var c = new Color_0();
    var tmp$;
    c.set8888_s8cxhz$(toLong(trim(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : throwCCE()).toString()));
    return c;
  };
  Color$Companion.prototype.from888Str_61zpoe$ = function (value) {
    var tmp$;
    var c = new Color_0();
    var tmp$_0;
    c.set888_za3lpa$((tmp$ = toIntOrNull(trim(Kotlin.isCharSequence(tmp$_0 = value) ? tmp$_0 : throwCCE()).toString())) != null ? tmp$ : 0);
    return c;
  };
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  Color$Companion.prototype.fromCssStr_61zpoe$ = function (value) {
    var i = indexOf(value, '(');
    if (i === -1)
      return Color$Companion_getInstance().BLACK.copy();
    var startIndex = i + 1 | 0;
    var endIndex = value.length - 1 | 0;
    var sub = value.substring(startIndex, endIndex);
    var split = split_0(sub, Kotlin.charArrayOf(44));
    var $receiver = split.get_za3lpa$(0);
    var tmp$;
    var r = toDouble(trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString()) / 255.0;
    var $receiver_0 = split.get_za3lpa$(1);
    var tmp$_0;
    var g = toDouble(trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString()) / 255.0;
    var $receiver_1 = split.get_za3lpa$(2);
    var tmp$_1;
    var b = toDouble(trim(Kotlin.isCharSequence(tmp$_1 = $receiver_1) ? tmp$_1 : throwCCE()).toString()) / 255.0;
    var tmp$_2;
    if (split.size < 4)
      tmp$_2 = 1.0;
    else {
      var $receiver_2 = split.get_za3lpa$(3);
      var tmp$_3;
      tmp$_2 = toDouble(trim(Kotlin.isCharSequence(tmp$_3 = $receiver_2) ? tmp$_3 : throwCCE()).toString());
    }
    var a = tmp$_2;
    return new Color_0(r, g, b, a);
  };
  Color$Companion.prototype.fromRgbaStr_61zpoe$ = function (hex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var r = (tmp$ = toIntOrNull_0(hex.substring(0, 2), 16)) != null ? tmp$ : 0;
    var g = (tmp$_0 = toIntOrNull_0(hex.substring(2, 4), 16)) != null ? tmp$_0 : 0;
    var b = (tmp$_1 = toIntOrNull_0(hex.substring(4, 6), 16)) != null ? tmp$_1 : 0;
    var a = hex.length !== 8 ? 255 : (tmp$_2 = toIntOrNull_0(hex.substring(6, 8), 16)) != null ? tmp$_2 : 0;
    return new Color_0(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
  };
  Color$Companion.prototype.rgb888_y2kzbl$ = function (r, g, b) {
    return numberToInt(r * 255) << 16 | numberToInt(g * 255) << 8 | numberToInt(b * 255);
  };
  Color$Companion.prototype.rgba8888_7b5o5w$ = function (r, g, b, a) {
    return numberToInt(r * 255) << 24 | numberToInt(g * 255) << 16 | numberToInt(b * 255) << 8 | numberToInt(a * 255);
  };
  Color$Companion.prototype.rgb888_xksl39$ = function (color) {
    this.clamped_0.set_xksl39$(color).clamp();
    return numberToInt(this.clamped_0.r * 255) << 16 | numberToInt(this.clamped_0.g * 255) << 8 | numberToInt(this.clamped_0.b * 255);
  };
  Color$Companion.prototype.rgba8888_xksl39$ = function (color) {
    this.clamped_0.set_xksl39$(color).clamp();
    return numberToInt(this.clamped_0.r * 255) << 24 | numberToInt(this.clamped_0.g * 255) << 16 | numberToInt(this.clamped_0.b * 255) << 8 | numberToInt(this.clamped_0.a * 255);
  };
  Color$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Color', interfaces: [Clearable, ColorRo]};
  Color_0.prototype.component1 = function () {
    return this.r;
  };
  Color_0.prototype.component2 = function () {
    return this.g;
  };
  Color_0.prototype.component3 = function () {
    return this.b;
  };
  Color_0.prototype.component4 = function () {
    return this.a;
  };
  Color_0.prototype.copy_7b5o5w$ = function (r, g, b, a) {
    return new Color_0(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b, a === void 0 ? this.a : a);
  };
  Color_0.prototype.toString = function () {
    return 'Color(r=' + Kotlin.toString(this.r) + (', g=' + Kotlin.toString(this.g)) + (', b=' + Kotlin.toString(this.b)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  Color_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  Color_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.a, other.a)))));
  };
  function HsvRo() {
  }
  HsvRo.prototype.copy = function () {
    return (new Hsv()).set_1nms9p$(this);
  };
  HsvRo.prototype.toRgb_1qghwi$$default = function (out) {
    out.a = this.a;
    var c = this.v * this.s;
    var value = this.h / 60.0 % 2.0 - 1.0;
    var x = c * (1.0 - (value < 0.0 ? -value : value));
    var m = this.v - c;
    if (this.h < 60.0) {
      out.r = c + m;
      out.g = x + m;
      out.b = 0.0 + m;
    }
     else if (this.h < 120.0) {
      out.r = x + m;
      out.g = c + m;
      out.b = 0.0 + m;
    }
     else if (this.h < 180.0) {
      out.r = 0.0 + m;
      out.g = c + m;
      out.b = x + m;
    }
     else if (this.h < 240.0) {
      out.r = 0.0 + m;
      out.g = x + m;
      out.b = c + m;
    }
     else if (this.h < 300.0) {
      out.r = x + m;
      out.g = 0.0 + m;
      out.b = c + m;
    }
     else {
      out.r = c + m;
      out.g = 0.0 + m;
      out.b = x + m;
    }
    return out;
  };
  HsvRo.prototype.toRgb_1qghwi$ = function (out, callback$default) {
    if (out === void 0)
      out = new Color_0();
    return callback$default ? callback$default(out) : this.toRgb_1qghwi$$default(out);
  };
  HsvRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'HsvRo', interfaces: []};
  function Hsv(h, s, v, a) {
    if (h === void 0)
      h = 0.0;
    if (s === void 0)
      s = 0.0;
    if (v === void 0)
      v = 0.0;
    if (a === void 0)
      a = 1.0;
    this.h_jogyt6$_0 = h;
    this.s_jogz2n$_0 = s;
    this.v_jogz58$_0 = v;
    this.a_jogyn5$_0 = a;
  }
  Object.defineProperty(Hsv.prototype, 'h', {get: function () {
    return this.h_jogyt6$_0;
  }, set: function (h) {
    this.h_jogyt6$_0 = h;
  }});
  Object.defineProperty(Hsv.prototype, 's', {get: function () {
    return this.s_jogz2n$_0;
  }, set: function (s) {
    this.s_jogz2n$_0 = s;
  }});
  Object.defineProperty(Hsv.prototype, 'v', {get: function () {
    return this.v_jogz58$_0;
  }, set: function (v) {
    this.v_jogz58$_0 = v;
  }});
  Object.defineProperty(Hsv.prototype, 'a', {get: function () {
    return this.a_jogyn5$_0;
  }, set: function (a) {
    this.a_jogyn5$_0 = a;
  }});
  Hsv.prototype.clear = function () {
    this.h = 0.0;
    this.s = 0.0;
    this.v = 0.0;
    this.a = 0.0;
  };
  Hsv.prototype.set_1nms9p$ = function (other) {
    this.h = other.h;
    this.s = other.s;
    this.v = other.v;
    this.a = other.a;
    return this;
  };
  Hsv.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, HsvRo))
      return false;
    if (this.h !== other.h)
      return false;
    if (this.s !== other.s)
      return false;
    if (this.v !== other.v)
      return false;
    if (this.a !== other.a)
      return false;
    return true;
  };
  Hsv.prototype.hashCode = function () {
    var result = hashCode(this.h);
    result = (31 * result | 0) + hashCode(this.s) | 0;
    result = (31 * result | 0) + hashCode(this.v) | 0;
    result = (31 * result | 0) + hashCode(this.a) | 0;
    return result;
  };
  Hsv.$metadata$ = {kind: Kind_CLASS, simpleName: 'Hsv', interfaces: [Clearable, HsvRo]};
  function toOctet($receiver) {
    return padStart(toRadix(numberToInt($receiver * 255), 16), 2, 48);
  }
  function BufferBase(_capacity) {
    BufferBase$Companion_getInstance();
    this._capacity = _capacity;
    this._limit = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    this._position = 0;
    if (this._capacity < 0) {
      throw IllegalArgumentException_init('capacity < 0: ' + toString(this._capacity));
    }
    this._limit = this._capacity;
  }
  BufferBase.prototype.clear = function () {
    this._position = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    this._limit = this._capacity;
    return this;
  };
  BufferBase.prototype.flip = function () {
    this._limit = this._position;
    this._position = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    return this;
  };
  Object.defineProperty(BufferBase.prototype, 'hasRemaining', {get: function () {
    return this._position < this._limit;
  }});
  Object.defineProperty(BufferBase.prototype, 'capacity', {get: function () {
    return this._capacity;
  }});
  Object.defineProperty(BufferBase.prototype, 'limit', {get: function () {
    return this._limit;
  }});
  BufferBase.prototype.limit_za3lpa$ = function (newLimit) {
    if (newLimit < 0 || newLimit > this._capacity) {
      throw IllegalArgumentException_init('Bad limit (capacity ' + this._capacity + '): ' + newLimit);
    }
    this._limit = newLimit;
    if (this._position > newLimit) {
      this._position = newLimit;
    }
    if (this._mark > newLimit) {
      this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    }
    return this;
  };
  BufferBase.prototype.mark = function () {
    this._mark = this._position;
    return this;
  };
  Object.defineProperty(BufferBase.prototype, 'position', {get: function () {
    return this._position;
  }, set: function (value) {
    if (value < 0 || value > this._limit) {
      throw IllegalArgumentException_init('Bad position (limit ' + this._limit + '): ' + value);
    }
    this._position = value;
    if (this._mark !== BufferBase$Companion_getInstance().UNSET_MARK && this._mark > this._position) {
      this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    }
  }});
  BufferBase.prototype.reset = function () {
    if (this._mark === BufferBase$Companion_getInstance().UNSET_MARK) {
      throw new InvalidMarkException('Mark not set');
    }
    this._position = this._mark;
    return this;
  };
  BufferBase.prototype.rewind = function () {
    this._position = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    return this;
  };
  BufferBase.prototype.toString = function () {
    return '[position=' + this._position + ',limit=' + this._limit + ',capacity=' + this._capacity + ']';
  };
  function BufferBase$Companion() {
    BufferBase$Companion_instance = this;
    this.UNSET_MARK = -1;
  }
  BufferBase$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var BufferBase$Companion_instance = null;
  function BufferBase$Companion_getInstance() {
    if (BufferBase$Companion_instance === null) {
      new BufferBase$Companion();
    }
    return BufferBase$Companion_instance;
  }
  BufferBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'BufferBase', interfaces: [ReadWriteBuffer]};
  function InvalidMarkException(message) {
    Throwable.call(this);
    this.message_en1ec$_0 = message;
    this.cause_81pigm$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'InvalidMarkException';
  }
  Object.defineProperty(InvalidMarkException.prototype, 'message', {get: function () {
    return this.message_en1ec$_0;
  }});
  Object.defineProperty(InvalidMarkException.prototype, 'cause', {get: function () {
    return this.cause_81pigm$_0;
  }});
  InvalidMarkException.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvalidMarkException', interfaces: [Throwable]};
  function Buffer() {
  }
  Object.defineProperty(Buffer.prototype, 'remaining', {get: function () {
    return this.limit - this.position | 0;
  }});
  Buffer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Buffer', interfaces: []};
  function ReadBuffer() {
  }
  ReadBuffer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ReadBuffer', interfaces: [Buffer]};
  function WriteBuffer() {
  }
  WriteBuffer.prototype.put_kcizie$ = function (value) {
    while (value.hasRemaining) {
      this.put_11rb$(value.get());
    }
  };
  WriteBuffer.prototype.put_p1ys8y$ = function (value) {
    var tmp$;
    tmp$ = value.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.put_11rb$(i);
    }
  };
  WriteBuffer.prototype.put_1phuh2$ = function (value) {
    while (value.hasNext()) {
      this.put_11rb$(value.next());
    }
  };
  WriteBuffer.prototype.fill_11rb$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = this.position;
    tmp$_0 = this.limit - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      this.put_11rb$(value);
    }
  };
  WriteBuffer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'WriteBuffer', interfaces: [Buffer]};
  function ReadWriteBuffer() {
  }
  ReadWriteBuffer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ReadWriteBuffer', interfaces: [WriteBuffer, ReadBuffer]};
  function NativeBuffer() {
  }
  NativeBuffer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'NativeBuffer', interfaces: [ReadWriteBuffer]};
  function FilesManifest(files) {
    this.files = files;
  }
  FilesManifest.$metadata$ = {kind: Kind_CLASS, simpleName: 'FilesManifest', interfaces: []};
  FilesManifest.prototype.component1 = function () {
    return this.files;
  };
  FilesManifest.prototype.copy_pmpiae$ = function (files) {
    return new FilesManifest(files === void 0 ? this.files : files);
  };
  FilesManifest.prototype.toString = function () {
    return 'FilesManifest(files=' + Kotlin.toString(this.files) + ')';
  };
  FilesManifest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.files) | 0;
    return result;
  };
  FilesManifest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.files, other.files))));
  };
  function FilesManifestSerializer() {
    FilesManifestSerializer_instance = this;
  }
  FilesManifestSerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    array_3(writer, 'files', $receiver.files, ManifestEntrySerializer_getInstance());
  };
  FilesManifestSerializer.prototype.read_gax0m7$ = function (reader) {
    return new FilesManifest(ensureNotNull(arrayList(reader, 'files', ManifestEntrySerializer_getInstance())));
  };
  FilesManifestSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FilesManifestSerializer', interfaces: [From, To]};
  var FilesManifestSerializer_instance = null;
  function FilesManifestSerializer_getInstance() {
    if (FilesManifestSerializer_instance === null) {
      new FilesManifestSerializer();
    }
    return FilesManifestSerializer_instance;
  }
  function ManifestEntry(path, modified, size, mimeType) {
    this.path = path;
    this.modified = modified;
    this.size = size;
    this.mimeType = mimeType;
  }
  ManifestEntry.prototype.name = function () {
    return substringAfterLast(this.path, 47);
  };
  ManifestEntry.prototype.nameNoExtension = function () {
    return substringBeforeLast(substringAfterLast(this.path, 47), 46);
  };
  ManifestEntry.prototype.extension = function () {
    return substringAfterLast(this.path, 46);
  };
  ManifestEntry.prototype.hasExtension_61zpoe$ = function (extension) {
    return equals_0(this.extension(), extension, true);
  };
  ManifestEntry.prototype.depth = function () {
    var count = -1;
    var index = -1;
    do {
      count = count + 1 | 0;
      index = indexOf_0(this.path, 47, index + 1 | 0);
    }
     while (index !== -1);
    return count;
  };
  ManifestEntry.prototype.compareTo_11rb$ = function (other) {
    if (this.depth() === other.depth()) {
      return Kotlin.compareTo(this.path, other.path);
    }
     else {
      return Kotlin.primitiveCompareTo(this.depth(), other.depth());
    }
  };
  ManifestEntry.prototype.toString = function () {
    return "ManifestEntry(path = '" + this.path + "')";
  };
  ManifestEntry.$metadata$ = {kind: Kind_CLASS, simpleName: 'ManifestEntry', interfaces: [Comparable]};
  ManifestEntry.prototype.component1 = function () {
    return this.path;
  };
  ManifestEntry.prototype.component2 = function () {
    return this.modified;
  };
  ManifestEntry.prototype.component3 = function () {
    return this.size;
  };
  ManifestEntry.prototype.component4 = function () {
    return this.mimeType;
  };
  ManifestEntry.prototype.copy_myejzp$ = function (path, modified, size, mimeType) {
    return new ManifestEntry(path === void 0 ? this.path : path, modified === void 0 ? this.modified : modified, size === void 0 ? this.size : size, mimeType === void 0 ? this.mimeType : mimeType);
  };
  ManifestEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.modified) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.mimeType) | 0;
    return result;
  };
  ManifestEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.modified, other.modified) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.mimeType, other.mimeType)))));
  };
  function ManifestEntrySerializer() {
    ManifestEntrySerializer_instance = this;
  }
  ManifestEntrySerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    string_0(writer, 'path', $receiver.path);
    long_0(writer, 'modified', $receiver.modified);
    long_0(writer, 'size', $receiver.size);
    string_0(writer, 'mimeType', $receiver.mimeType);
  };
  ManifestEntrySerializer.prototype.read_gax0m7$ = function (reader) {
    return new ManifestEntry(ensureNotNull(string(reader, 'path')), ensureNotNull(long(reader, 'modified')), ensureNotNull(long(reader, 'size')), string(reader, 'mimeType'));
  };
  ManifestEntrySerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ManifestEntrySerializer', interfaces: [From, To]};
  var ManifestEntrySerializer_instance = null;
  function ManifestEntrySerializer_getInstance() {
    if (ManifestEntrySerializer_instance === null) {
      new ManifestEntrySerializer();
    }
    return ManifestEntrySerializer_instance;
  }
  function ILogger() {
    ILogger$Companion_getInstance();
  }
  function ILogger$Companion() {
    ILogger$Companion_instance = this;
    this.ERROR = 1;
    this.WARN = 2;
    this.INFO = 3;
    this.DEBUG = 4;
  }
  ILogger$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ILogger$Companion_instance = null;
  function ILogger$Companion_getInstance() {
    if (ILogger$Companion_instance === null) {
      new ILogger$Companion();
    }
    return ILogger$Companion_instance;
  }
  ILogger.prototype.debug_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().DEBUG);
  };
  ILogger.prototype.debug_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().DEBUG);
  };
  ILogger.prototype.info_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().INFO);
  };
  ILogger.prototype.info_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().INFO);
  };
  ILogger.prototype.warn_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().WARN);
  };
  ILogger.prototype.warn_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().WARN);
  };
  ILogger.prototype.error_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().ERROR);
  };
  ILogger.prototype.error_a67anv$$default = function (e, message) {
    var str = '';
    if (message.length > 0)
      str += message + '\n';
    str += toString(e.message) + '\n';
    this.log_cypnoy$(str, ILogger$Companion_getInstance().ERROR);
  };
  ILogger.prototype.error_a67anv$ = function (e, message, callback$default) {
    if (message === void 0)
      message = '';
    callback$default ? callback$default(e, message) : this.error_a67anv$$default(e, message);
  };
  ILogger.prototype.error_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().ERROR);
  };
  ILogger.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ILogger', interfaces: []};
  function Log() {
    Log_instance = this;
    this.targets = arrayListOf([new PrintTarget()]);
    this.level_l9mc19$_0 = ILogger$Companion_getInstance().DEBUG;
  }
  Object.defineProperty(Log.prototype, 'level', {get: function () {
    return this.level_l9mc19$_0;
  }, set: function (level) {
    this.level_l9mc19$_0 = level;
  }});
  Log.prototype.log_cypnoy$ = function (message, level) {
    var tmp$;
    if (level <= this.level) {
      tmp$ = get_lastIndex(this.targets);
      for (var i = 0; i <= tmp$; i++) {
        var target = this.targets.get_za3lpa$(i);
        if (level <= target.level) {
          target.log_cypnoy$(message, level);
        }
      }
    }
  };
  Log.prototype.log_o4o5w6$ = function (message, level) {
    var tmp$;
    if (level <= this.level) {
      tmp$ = get_lastIndex(this.targets);
      for (var i = 0; i <= tmp$; i++) {
        var target = this.targets.get_za3lpa$(i);
        if (level <= target.level) {
          target.log_o4o5w6$(message, level);
        }
      }
    }
  };
  Log.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Log', interfaces: [ILogger]};
  var Log_instance = null;
  function Log_getInstance() {
    if (Log_instance === null) {
      new Log();
    }
    return Log_instance;
  }
  function PrintTarget() {
    this.level_3ndz2r$_0 = ILogger$Companion_getInstance().DEBUG;
    this.prefixes = ['[NONE] ', '[ERROR] ', '[WARN] ', '[INFO] ', '[DEBUG] '];
  }
  Object.defineProperty(PrintTarget.prototype, 'level', {get: function () {
    return this.level_3ndz2r$_0;
  }, set: function (level) {
    this.level_3ndz2r$_0 = level;
  }});
  PrintTarget.prototype.log_cypnoy$ = function (message, level) {
    var prefix = level < this.prefixes.length ? this.prefixes[level] : '';
    println(prefix + toString(message));
  };
  PrintTarget.prototype.log_o4o5w6$ = function (message, level) {
    this.log_cypnoy$(message(), level);
  };
  PrintTarget.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrintTarget', interfaces: [ILogger]};
  function ArrayTarget() {
    this.level_m6c0x3$_0 = ILogger$Companion_getInstance().DEBUG;
    this.maxLogs = 1000;
    this.separator = lineSeparator;
    this.prefixes = ['[NONE] ', '[ERROR] ', '[WARN] ', '[INFO] ', '[DEBUG] '];
    this.list = ArrayList_init();
  }
  var BezierSegment$Companion_instance = null;
  function BoundsRo() {
  }
  BoundsRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'BoundsRo', interfaces: []};
  function Bounds(width, height) {
    Bounds$Companion_getInstance();
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.width_2j8kor$_0 = width;
    this.height_gfjmri$_0 = height;
  }
  Object.defineProperty(Bounds.prototype, 'width', {get: function () {
    return this.width_2j8kor$_0;
  }, set: function (width) {
    this.width_2j8kor$_0 = width;
  }});
  Object.defineProperty(Bounds.prototype, 'height', {get: function () {
    return this.height_gfjmri$_0;
  }, set: function (height) {
    this.height_gfjmri$_0 = height;
  }});
  Bounds.prototype.set_i12l7q$ = function (v) {
    this.width = v.width;
    this.height = v.height;
    return this;
  };
  Bounds.prototype.add_dleff0$ = function (wD, hD) {
    this.width = this.width + wD;
    this.height = this.height + hD;
    return this;
  };
  Bounds.prototype.set_dleff0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  Bounds.prototype.ext_dleff0$ = function (width, height) {
    if (width > this.width)
      this.width = width;
    if (height > this.height)
      this.height = height;
  };
  Bounds.prototype.isEmpty = function () {
    return this.width === 0.0 && this.height === 0.0;
  };
  Bounds.prototype.isNotEmpty = function () {
    return !this.isEmpty();
  };
  Bounds.prototype.clear = function () {
    this.width = 0.0;
    this.height = 0.0;
  };
  Bounds.prototype.free = function () {
    Bounds$Companion_getInstance().pool_0.free_11rb$(this);
  };
  function Bounds$Companion() {
    Bounds$Companion_instance = this;
    this.pool_0 = ClearableObjectPool_init(Bounds$Companion$pool$lambda);
  }
  Bounds$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  Bounds$Companion.prototype.free_isjgub$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  function Bounds$Companion$pool$lambda() {
    return new Bounds();
  }
  Bounds$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Bounds$Companion_instance = null;
  function Bounds$Companion_getInstance() {
    if (Bounds$Companion_instance === null) {
      new Bounds$Companion();
    }
    return Bounds$Companion_instance;
  }
  Bounds.$metadata$ = {kind: Kind_CLASS, simpleName: 'Bounds', interfaces: [BoundsRo, Clearable]};
  Bounds.prototype.component1 = function () {
    return this.width;
  };
  Bounds.prototype.component2 = function () {
    return this.height;
  };
  Bounds.prototype.copy_dleff0$ = function (width, height) {
    return new Bounds(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Bounds.prototype.toString = function () {
    return 'Bounds(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Bounds.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Bounds.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function BoxRo() {
  }
  BoxRo.prototype.intersects_owlv2i$ = function (r, out, callback$default) {
    if (out === void 0)
      out = null;
    return callback$default ? callback$default(r, out) : this.intersects_owlv2i$$default(r, out);
  };
  BoxRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'BoxRo', interfaces: []};
  function Box(min, max) {
    Box$Companion_getInstance();
    if (min === void 0)
      min = new Vector3();
    if (max === void 0)
      max = new Vector3();
    this.min_hkyzwt$_0 = min;
    this.max_hkz5lr$_0 = max;
    this._center_0 = new Vector3();
    this._dimensions_0 = new Vector3();
    this.set_uwler8$(this.min, this.max);
  }
  Object.defineProperty(Box.prototype, 'min', {get: function () {
    return this.min_hkyzwt$_0;
  }});
  Object.defineProperty(Box.prototype, 'max', {get: function () {
    return this.max_hkz5lr$_0;
  }});
  Object.defineProperty(Box.prototype, 'center', {get: function () {
    return this._center_0;
  }});
  Object.defineProperty(Box.prototype, 'dimensions', {get: function () {
    return this._dimensions_0;
  }});
  Box.prototype.update = function () {
    this._center_0.set_1fv2cb$(this.min).add_1fv2cb$(this.max).scl_mx4ult$(0.5);
    this._dimensions_0.set_1fv2cb$(this.max).sub_1fv2cb$(this.min);
  };
  Box.prototype.getCorners_72zqb$ = function (corners) {
    corners.get_za3lpa$(0).set_y2kzbl$(this.min.x, this.min.y, this.min.z);
    corners.get_za3lpa$(1).set_y2kzbl$(this.max.x, this.min.y, this.min.z);
    corners.get_za3lpa$(2).set_y2kzbl$(this.max.x, this.max.y, this.min.z);
    corners.get_za3lpa$(3).set_y2kzbl$(this.min.x, this.max.y, this.min.z);
    corners.get_za3lpa$(4).set_y2kzbl$(this.min.x, this.min.y, this.max.z);
    corners.get_za3lpa$(5).set_y2kzbl$(this.max.x, this.min.y, this.max.z);
    corners.get_za3lpa$(6).set_y2kzbl$(this.max.x, this.max.y, this.max.z);
    corners.get_za3lpa$(7).set_y2kzbl$(this.min.x, this.max.y, this.max.z);
    return corners;
  };
  Box.prototype.getCorner000_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.min.y, this.min.z);
  };
  Box.prototype.getCorner001_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.min.y, this.max.z);
  };
  Box.prototype.getCorner010_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.max.y, this.min.z);
  };
  Box.prototype.getCorner011_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.max.y, this.max.z);
  };
  Box.prototype.getCorner100_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.min.y, this.min.z);
  };
  Box.prototype.getCorner101_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.min.y, this.max.z);
  };
  Box.prototype.getCorner110_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.max.y, this.min.z);
  };
  Box.prototype.getCorner111_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.max.y, this.max.z);
  };
  Box.prototype.getDimensions_9wm29k$ = function (out) {
    return out.set_1fv2cb$(this.dimensions);
  };
  Object.defineProperty(Box.prototype, 'width', {get: function () {
    return this.dimensions.x;
  }});
  Object.defineProperty(Box.prototype, 'height', {get: function () {
    return this.dimensions.y;
  }});
  Object.defineProperty(Box.prototype, 'depth', {get: function () {
    return this.dimensions.z;
  }});
  Box.prototype.getMin_9wm29k$ = function (out) {
    return out.set_1fv2cb$(this.min);
  };
  Box.prototype.getMax_9wm29k$ = function (out) {
    return out.set_1fv2cb$(this.max);
  };
  Box.prototype.set_s3o7vk$ = function (bounds) {
    return this.set_uwler8$(bounds.min, bounds.max);
  };
  Box.prototype.set_uwler8$ = function (minimum, maximum) {
    this.min.set_y2kzbl$(minimum.x < maximum.x ? minimum.x : maximum.x, minimum.y < maximum.y ? minimum.y : maximum.y, minimum.z < maximum.z ? minimum.z : maximum.z);
    this.max.set_y2kzbl$(minimum.x > maximum.x ? minimum.x : maximum.x, minimum.y > maximum.y ? minimum.y : maximum.y, minimum.z > maximum.z ? minimum.z : maximum.z);
    this._center_0.set_1fv2cb$(this.min).add_1fv2cb$(this.max).scl_mx4ult$(0.5);
    this._dimensions_0.set_1fv2cb$(this.max).sub_1fv2cb$(this.min);
    return this;
  };
  Box.prototype.set_w8lrqs$ = function (minX, minY, minZ, maxX, maxY, maxZ) {
    this.min.set_y2kzbl$(minX < maxX ? minX : maxX, minY < maxY ? minY : maxY, minZ < maxZ ? minZ : maxZ);
    this.max.set_y2kzbl$(minX > maxX ? minX : maxX, minY > maxY ? minY : maxY, minZ > maxZ ? minZ : maxZ);
    this.update();
    return this;
  };
  Box.prototype.set_mhy3t5$ = function (points) {
    var tmp$;
    this.inf();
    tmp$ = get_lastIndex_0(points);
    for (var i = 0; i <= tmp$; i++)
      this._ext_0(points[i]);
    this.update();
    return this;
  };
  Box.prototype.set_o0fv6i$ = function (points) {
    var tmp$;
    this.inf();
    tmp$ = get_lastIndex(points);
    for (var i = 0; i <= tmp$; i++)
      this._ext_0(points.get_za3lpa$(i));
    this.update();
    return this;
  };
  Box.prototype.inf = function () {
    this.min.set_y2kzbl$(kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY, kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY, kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY);
    this.max.set_y2kzbl$(kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY, kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY, kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY);
    this._center_0.set_y2kzbl$(0.0, 0.0, 0.0);
    this._dimensions_0.set_y2kzbl$(0.0, 0.0, 0.0);
    return this;
  };
  Box.prototype.ext_esq9j2$ = function (point, update) {
    if (update === void 0)
      update = true;
    this._ext_0(point);
    if (update)
      this.update();
    return this;
  };
  Box.prototype._ext_0 = function (point) {
    if (point.x < this.min.x)
      this.min.x = point.x;
    if (point.y < this.min.y)
      this.min.y = point.y;
    if (point.z < this.min.z)
      this.min.z = point.z;
    if (point.x > this.max.x)
      this.max.x = point.x;
    if (point.y > this.max.y)
      this.max.y = point.y;
    if (point.z > this.max.z)
      this.max.z = point.z;
  };
  Box.prototype.isValid = function () {
    return this.min.x < this.max.x && this.min.y < this.max.y && this.min.z < this.max.z;
  };
  Box.prototype.ext_s3o7vk$ = function (bounds) {
    var tmp$ = this.min;
    var a = this.min.x;
    var b = bounds.min.x;
    var tmp$_0 = Math_0.min(a, b);
    var a_0 = this.min.y;
    var b_0 = bounds.min.y;
    var tmp$_1 = Math_0.min(a_0, b_0);
    var a_1 = this.min.z;
    var b_1 = bounds.min.z;
    var tmp$_2 = tmp$.set_y2kzbl$(tmp$_0, tmp$_1, Math_0.min(a_1, b_1));
    var tmp$_3 = this.max;
    var a_2 = this.max.x;
    var b_2 = bounds.max.x;
    var tmp$_4 = Math_0.max(a_2, b_2);
    var a_3 = this.max.y;
    var b_3 = bounds.max.y;
    var tmp$_5 = Math_0.max(a_3, b_3);
    var a_4 = this.max.z;
    var b_4 = bounds.max.z;
    return this.set_uwler8$(tmp$_2, tmp$_3.set_y2kzbl$(tmp$_4, tmp$_5, Math_0.max(a_4, b_4)));
  };
  Box.prototype.ext_bggvzo$ = function (bounds, transform) {
    var v = Box$Companion_getInstance().tmpVec3_0;
    var min = bounds.min;
    var max = bounds.max;
    this._ext_0(v.set_y2kzbl$(min.x, min.y, min.z).mul_pekf88$(transform));
    this._ext_0(v.set_y2kzbl$(min.x, max.y, min.z).mul_pekf88$(transform));
    this._ext_0(v.set_y2kzbl$(max.x, min.y, min.z).mul_pekf88$(transform));
    this._ext_0(v.set_y2kzbl$(max.x, max.y, min.z).mul_pekf88$(transform));
    if (min.z !== max.z) {
      this._ext_0(v.set_y2kzbl$(min.x, min.y, max.z).mul_pekf88$(transform));
      this._ext_0(v.set_y2kzbl$(min.x, max.y, max.z).mul_pekf88$(transform));
      this._ext_0(v.set_y2kzbl$(max.x, min.y, max.z).mul_pekf88$(transform));
      this._ext_0(v.set_y2kzbl$(max.x, max.y, max.z).mul_pekf88$(transform));
    }
    this.update();
    return this;
  };
  Box.prototype.mul_pekf88$ = function (transform) {
    var x0 = this.min.x;
    var y0 = this.min.y;
    var z0 = this.min.z;
    var x1 = this.max.x;
    var y1 = this.max.y;
    var z1 = this.max.z;
    this.inf();
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y0, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y0, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y1, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y1, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y0, z1)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y0, z1)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y1, z1)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y1, z1)));
    this.update();
    return this;
  };
  Box.prototype.intersects_s3o7vk$ = function (b) {
    if (!this.isValid())
      return false;
    var value = this.center.x - b.center.x;
    var lX = value < 0.0 ? -value : value;
    var sumX = this.dimensions.x * 0.5 + b.dimensions.x * 0.5;
    var value_0 = this.center.y - b.center.y;
    var lY = value_0 < 0.0 ? -value_0 : value_0;
    var sumY = this.dimensions.y * 0.5 + b.dimensions.y * 0.5;
    var value_1 = this.center.z - b.center.z;
    var lZ = value_1 < 0.0 ? -value_1 : value_1;
    var sumZ = this.dimensions.z * 0.5 + b.dimensions.z * 0.5;
    return lX <= sumX && lY <= sumY && lZ <= sumZ;
  };
  Box.prototype.intersects_owlv2i$$default = function (r, out) {
    if (this.dimensions.x <= 0.0 || this.dimensions.y <= 0.0)
      return false;
    if (this.dimensions.z === 0.0) {
      if (r.direction.z === 0.0)
        return false;
      var m = (this.min.z - r.origin.z) * r.directionInv.z;
      if (m < 0)
        return false;
      var x = r.origin.x + m * r.direction.x;
      var y = r.origin.y + m * r.direction.y;
      var intersects = this.min.x <= x && this.max.x >= x && this.min.y <= y && this.max.y >= y;
      if (out != null && intersects) {
        r.getEndPoint_4lg16t$(m, out);
      }
      return intersects;
    }
    var d = r.directionInv;
    var o = r.origin;
    var t1 = (this.min.x - o.x) * d.x;
    var t2 = (this.max.x - o.x) * d.x;
    var t3 = (this.min.y - o.y) * d.y;
    var t4 = (this.max.y - o.y) * d.y;
    var t5 = (this.min.z - o.z) * d.z;
    var t6 = (this.max.z - o.z) * d.z;
    var tmp$ = Math_0.min(t1, t2);
    var tmp$_0 = Math_0.min(t3, t4);
    var c = Math_0.min(t5, t6);
    var tMin = Math_0.max(tmp$, tmp$_0, c);
    var tmp$_1 = Math_0.max(t1, t2);
    var tmp$_2 = Math_0.max(t3, t4);
    var c_0 = Math_0.max(t5, t6);
    var tMax = Math_0.min(tmp$_1, tmp$_2, c_0);
    if (tMax < 0 || tMin > tMax) {
      return false;
    }
    if (out != null) {
      r.getEndPoint_4lg16t$(tMin, out);
    }
    return true;
  };
  Box.prototype.contains_s3o7vk$ = function (b) {
    return !this.isValid() || (this.min.x <= b.min.x && this.min.y <= b.min.y && this.min.z <= b.min.z && this.max.x >= b.max.x && this.max.y >= b.max.y && this.max.z >= b.max.z);
  };
  Box.prototype.contains_1fv2cb$ = function (v) {
    return this.contains_y2kzbl$(v.x, v.y, v.z);
  };
  Box.prototype.contains_y2kzbl$ = function (x, y, z) {
    return this.min.x <= x && this.max.x >= x && this.min.y <= y && this.max.y >= y && this.min.z <= z && this.max.z >= z;
  };
  Box.prototype.toString = function () {
    return '[' + this.min + '|' + this.max + ']';
  };
  Box.prototype.ext_y2kzbl$ = function (x, y, z) {
    var tmp$ = this.min;
    var a = this.min.x;
    var tmp$_0 = Math_0.min(a, x);
    var a_0 = this.min.y;
    var tmp$_1 = Math_0.min(a_0, y);
    var a_1 = this.min.z;
    var tmp$_2 = tmp$.set_y2kzbl$(tmp$_0, tmp$_1, Math_0.min(a_1, z));
    var tmp$_3 = this.max;
    var a_2 = this.max.x;
    var tmp$_4 = Math_0.max(a_2, x);
    var a_3 = this.max.y;
    var tmp$_5 = Math_0.max(a_3, y);
    var a_4 = this.max.z;
    return this.set_uwler8$(tmp$_2, tmp$_3.set_y2kzbl$(tmp$_4, tmp$_5, Math_0.max(a_4, z)));
  };
  function Box$Companion() {
    Box$Companion_instance = this;
    this.tmpVec3_0 = new Vector3();
  }
  Box$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Box$Companion_instance = null;
  function Box$Companion_getInstance() {
    if (Box$Companion_instance === null) {
      new Box$Companion();
    }
    return Box$Companion_instance;
  }
  Box.$metadata$ = {kind: Kind_CLASS, simpleName: 'Box', interfaces: [BoxRo]};
  Box.prototype.component1 = function () {
    return this.min;
  };
  Box.prototype.component2 = function () {
    return this.max;
  };
  Box.prototype.copy_s18mjw$ = function (min, max) {
    return new Box(min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  Box.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  Box.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  var ColorTransformation$Companion_instance = null;
  function CornersRo() {
  }
  CornersRo.prototype.isEmpty = function () {
    return this.topLeft.x <= 0.0 && this.topLeft.y <= 0.0 && this.topRight.x <= 0.0 && this.topRight.y <= 0.0 && this.bottomRight.x <= 0.0 && this.bottomRight.y <= 0.0 && this.bottomLeft.x <= 0.0 && this.bottomLeft.y <= 0.0;
  };
  CornersRo.prototype.copy = function () {
    return Corners_init(this.topLeft, this.topRight, this.bottomRight, this.bottomLeft);
  };
  CornersRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CornersRo', interfaces: []};
  function Corners() {
    this.topLeft_7gshi$_0 = new Vector2();
    this.topRight_9bxvbv$_0 = new Vector2();
    this.bottomRight_kgvy1t$_0 = new Vector2();
    this.bottomLeft_c0u5o0$_0 = new Vector2();
  }
  Object.defineProperty(Corners.prototype, 'topLeft', {get: function () {
    return this.topLeft_7gshi$_0;
  }});
  Object.defineProperty(Corners.prototype, 'topRight', {get: function () {
    return this.topRight_9bxvbv$_0;
  }});
  Object.defineProperty(Corners.prototype, 'bottomRight', {get: function () {
    return this.bottomRight_kgvy1t$_0;
  }});
  Object.defineProperty(Corners.prototype, 'bottomLeft', {get: function () {
    return this.bottomLeft_c0u5o0$_0;
  }});
  Corners.prototype.set_mx4ult$ = function (all) {
    this.topLeft.set_dleff0$(all, all);
    this.topRight.set_dleff0$(all, all);
    this.bottomRight.set_dleff0$(all, all);
    this.bottomLeft.set_dleff0$(all, all);
    return this;
  };
  Corners.prototype.set_6g164z$ = function (other) {
    this.topLeft.set_1fv330$(other.topLeft);
    this.topRight.set_1fv330$(other.topRight);
    this.bottomRight.set_1fv330$(other.bottomRight);
    this.bottomLeft.set_1fv330$(other.bottomLeft);
    return this;
  };
  Corners.prototype.set_7b5o5w$ = function (topLeft, topRight, bottomRight, bottomLeft) {
    if (topLeft === void 0)
      topLeft = 0.0;
    if (topRight === void 0)
      topRight = 0.0;
    if (bottomRight === void 0)
      bottomRight = 0.0;
    if (bottomLeft === void 0)
      bottomLeft = 0.0;
    this.topLeft.set_dleff0$(topLeft, topLeft);
    this.topRight.set_dleff0$(topRight, topRight);
    this.bottomRight.set_dleff0$(bottomRight, bottomRight);
    this.bottomLeft.set_dleff0$(bottomLeft, bottomLeft);
    return this;
  };
  Corners.prototype.set_n34qss$ = function (topLeft, topRight, bottomRight, bottomLeft) {
    this.topLeft.set_1fv330$(topLeft);
    this.topRight.set_1fv330$(topRight);
    this.bottomRight.set_1fv330$(bottomRight);
    this.bottomLeft.set_1fv330$(bottomLeft);
    return this;
  };
  Corners.prototype.inflate_rw8g7s$ = function (pad) {
    this.topLeft.x = this.topLeft.x + pad.left;
    this.topLeft.y = this.topLeft.y + pad.top;
    this.topRight.x = this.topRight.x + pad.right;
    this.topRight.y = this.topRight.y + pad.top;
    this.bottomRight.x = this.bottomRight.x + pad.right;
    this.bottomRight.y = this.bottomRight.y + pad.bottom;
    this.bottomLeft.x = this.bottomLeft.x + pad.left;
    this.bottomLeft.y = this.bottomLeft.y + pad.bottom;
    return this;
  };
  Corners.prototype.deflate_rw8g7s$ = function (pad) {
    this.topLeft.x = this.topLeft.x - pad.left;
    this.topLeft.y = this.topLeft.y - pad.top;
    this.topRight.x = this.topRight.x - pad.right;
    this.topRight.y = this.topRight.y - pad.top;
    this.bottomRight.x = this.bottomRight.x - pad.right;
    this.bottomRight.y = this.bottomRight.y - pad.bottom;
    this.bottomLeft.x = this.bottomLeft.x - pad.left;
    this.bottomLeft.y = this.bottomLeft.y - pad.bottom;
    return this;
  };
  Corners.prototype.clear = function () {
    this.set_mx4ult$(0.0);
  };
  Corners.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this === other)
      return true;
    if (!Kotlin.isType(other, CornersRo))
      return false;
    if (!((tmp$ = this.topLeft) != null ? tmp$.equals(other.topLeft) : null))
      return false;
    if (!((tmp$_0 = this.topRight) != null ? tmp$_0.equals(other.topRight) : null))
      return false;
    if (!((tmp$_1 = this.bottomRight) != null ? tmp$_1.equals(other.bottomRight) : null))
      return false;
    if (!((tmp$_2 = this.bottomLeft) != null ? tmp$_2.equals(other.bottomLeft) : null))
      return false;
    return true;
  };
  Corners.prototype.hashCode = function () {
    var result = this.topLeft.hashCode();
    result = (31 * result | 0) + this.topRight.hashCode() | 0;
    result = (31 * result | 0) + this.bottomRight.hashCode() | 0;
    result = (31 * result | 0) + this.bottomLeft.hashCode() | 0;
    return result;
  };
  Corners.prototype.toString = function () {
    return 'Corners(topLeft=' + this.topLeft + ', topRight=' + this.topRight + ', bottomRight=' + this.bottomRight + ', bottomLeft=' + this.bottomLeft + ')';
  };
  Corners.$metadata$ = {kind: Kind_CLASS, simpleName: 'Corners', interfaces: [Clearable, CornersRo]};
  function Corners_init(topLeft, topRight, bottomRight, bottomLeft, $this) {
    if (topLeft === void 0)
      topLeft = new Vector2();
    if (topRight === void 0)
      topRight = new Vector2();
    if (bottomRight === void 0)
      bottomRight = new Vector2();
    if (bottomLeft === void 0)
      bottomLeft = new Vector2();
    $this = $this || Object.create(Corners.prototype);
    Corners.call($this);
    $this.set_n34qss$(topLeft, topRight, bottomRight, bottomLeft);
    return $this;
  }
  function Corners_init_0(all, $this) {
    $this = $this || Object.create(Corners.prototype);
    Corners.call($this);
    $this.set_mx4ult$(all);
    return $this;
  }
  function Corners_init_1(topLeft, topRight, bottomRight, bottomLeft, $this) {
    $this = $this || Object.create(Corners.prototype);
    Corners.call($this);
    $this.set_7b5o5w$(topLeft, topRight, bottomRight, bottomLeft);
    return $this;
  }
  function CornersSerializer() {
    CornersSerializer_instance = this;
  }
  var CornersSerializer_instance = null;
  function Interpolation() {
  }
  Interpolation.prototype.apply_y2kzbl$ = function (start, end, alpha) {
    return start + (end - start) * this.apply_mx4ult$(alpha);
  };
  Interpolation.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Interpolation', interfaces: []};
  function Constant(value) {
    this.value_0 = value;
  }
  function Pow(power) {
    this.power_0 = power;
  }
  Pow.prototype.apply_mx4ult$ = function (alpha) {
    if (alpha <= 0.5) {
      return Math_0.pow(alpha * 2.0, this.power_0) / 2.0;
    }
    return Math_0.pow((alpha - 1.0) * 2.0, this.power_0) / (this.power_0 % 2 === 0 ? -2.0 : 2.0) + 1.0;
  };
  Pow.$metadata$ = {kind: Kind_CLASS, simpleName: 'Pow', interfaces: [Interpolation]};
  function PowIn(power) {
    this.power_0 = power;
  }
  PowIn.prototype.apply_mx4ult$ = function (alpha) {
    return Math_0.pow(alpha, this.power_0);
  };
  PowIn.$metadata$ = {kind: Kind_CLASS, simpleName: 'PowIn', interfaces: [Interpolation]};
  function PowOut(power) {
    this.power_0 = power;
  }
  PowOut.prototype.apply_mx4ult$ = function (alpha) {
    return Math_0.pow(alpha - 1.0, this.power_0) * (this.power_0 % 2 === 0 ? -1.0 : 1.0) + 1.0;
  };
  PowOut.$metadata$ = {kind: Kind_CLASS, simpleName: 'PowOut', interfaces: [Interpolation]};
  function Exp(value, power) {
    this.value = value;
    this.power = power;
    this.min = Math_0.pow(this.value, -this.power);
    this.scale = 0;
    this.scale = 1.0 / (1.0 - this.min);
  }
  Exp.prototype.apply_mx4ult$ = function (alpha) {
    if (alpha <= 0.5) {
      return (Math_0.pow(this.value, this.power * (alpha * 2.0 - 1.0)) - this.min) * this.scale / 2.0;
    }
    return (2.0 - (Math_0.pow(this.value, -this.power * (alpha * 2.0 - 1.0)) - this.min) * this.scale) / 2.0;
  };
  Exp.$metadata$ = {kind: Kind_CLASS, simpleName: 'Exp', interfaces: [Interpolation]};
  function ExpIn(value, power) {
    Exp.call(this, value, power);
  }
  ExpIn.prototype.apply_mx4ult$ = function (alpha) {
    return (Math_0.pow(this.value, this.power * (alpha - 1.0)) - this.min) * this.scale;
  };
  ExpIn.$metadata$ = {kind: Kind_CLASS, simpleName: 'ExpIn', interfaces: [Exp]};
  function ExpOut(value, power) {
    Exp.call(this, value, power);
  }
  ExpOut.prototype.apply_mx4ult$ = function (alpha) {
    return 1.0 - (Math_0.pow(this.value, -this.power * alpha) - this.min) * this.scale;
  };
  ExpOut.$metadata$ = {kind: Kind_CLASS, simpleName: 'ExpOut', interfaces: [Exp]};
  function Elastic(value, power, bounces, scale) {
    this.value = value;
    this.power = power;
    this.scale = scale;
    this.bounces = 0;
    this.bounces = bounces * PI * (bounces % 2 === 0 ? 1.0 : -1.0);
  }
  Elastic.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    if (a <= 0.5) {
      a *= 2.0;
      return Math_0.pow(this.value, this.power * (a - 1.0)) * MathUtils_getInstance().sin_mx4ult$(a * this.bounces) * this.scale / 2.0;
    }
    a = 1.0 - a;
    a *= 2.0;
    return 1.0 - Math_0.pow(this.value, this.power * (a - 1.0)) * MathUtils_getInstance().sin_mx4ult$(a * this.bounces) * this.scale / 2.0;
  };
  Elastic.$metadata$ = {kind: Kind_CLASS, simpleName: 'Elastic', interfaces: [Interpolation]};
  function ElasticIn(value, power, bounces, scale) {
    Elastic.call(this, value, power, bounces, scale);
  }
  ElasticIn.prototype.apply_mx4ult$ = function (alpha) {
    return Math_0.pow(this.value, this.power * (alpha - 1.0)) * MathUtils_getInstance().sin_mx4ult$(alpha * this.bounces) * this.scale;
  };
  ElasticIn.$metadata$ = {kind: Kind_CLASS, simpleName: 'ElasticIn', interfaces: [Elastic]};
  function ElasticOut(value, power, bounces, scale) {
    Elastic.call(this, value, power, bounces, scale);
  }
  ElasticOut.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    a = 1.0 - a;
    return 1.0 - Math_0.pow(this.value, this.power * (a - 1.0)) * MathUtils_getInstance().sin_mx4ult$(a * this.bounces) * this.scale;
  };
  ElasticOut.$metadata$ = {kind: Kind_CLASS, simpleName: 'ElasticOut', interfaces: [Elastic]};
  function Swing(scale) {
    this.scale_w8y0m0$_0 = 0;
    this.scale_w8y0m0$_0 = scale * 2.0;
  }
  Swing.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    if (a <= 0.5) {
      a *= 2.0;
      return a * a * ((this.scale_w8y0m0$_0 + 1.0) * a - this.scale_w8y0m0$_0) / 2.0;
    }
    a = a - 1;
    a *= 2.0;
    return a * a * ((this.scale_w8y0m0$_0 + 1.0) * a + this.scale_w8y0m0$_0) / 2.0 + 1.0;
  };
  Swing.$metadata$ = {kind: Kind_CLASS, simpleName: 'Swing', interfaces: [Interpolation]};
  function SwingOut(scale) {
    this.scale_h9ro4a$_0 = scale;
  }
  SwingOut.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    a = a - 1;
    return a * a * ((this.scale_h9ro4a$_0 + 1.0) * a + this.scale_h9ro4a$_0) + 1.0;
  };
  SwingOut.$metadata$ = {kind: Kind_CLASS, simpleName: 'SwingOut', interfaces: [Interpolation]};
  function SwingIn(scale) {
    this.scale_xqik8z$_0 = scale;
  }
  SwingIn.prototype.apply_mx4ult$ = function (alpha) {
    return alpha * alpha * ((this.scale_xqik8z$_0 + 1.0) * alpha - this.scale_xqik8z$_0);
  };
  SwingIn.$metadata$ = {kind: Kind_CLASS, simpleName: 'SwingIn', interfaces: [Interpolation]};
  function Stepped() {
    Stepped_instance = this;
  }
  Stepped.prototype.apply_mx4ult$ = function (alpha) {
    return alpha === 1.0 ? 1.0 : 0.0;
  };
  Stepped.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Stepped', interfaces: [Interpolation]};
  var Stepped_instance = null;
  function Stepped_getInstance() {
    if (Stepped_instance === null) {
      new Stepped();
    }
    return Stepped_instance;
  }
  function Linear() {
    Linear_instance = this;
  }
  Linear.prototype.apply_mx4ult$ = function (alpha) {
    return alpha;
  };
  Linear.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Linear', interfaces: [Interpolation]};
  var Linear_instance = null;
  function Linear_getInstance() {
    if (Linear_instance === null) {
      new Linear();
    }
    return Linear_instance;
  }
  function Fade() {
    Fade_instance = this;
  }
  Fade.prototype.apply_mx4ult$ = function (alpha) {
    var value = alpha * alpha * alpha * (alpha * (alpha * 6.0 - 15.0) + 10.0);
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(value, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value;
    }
     while (false);
    return clamp_73gzaq$result;
  };
  Fade.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Fade', interfaces: [Interpolation]};
  var Fade_instance = null;
  function Fade_getInstance() {
    if (Fade_instance === null) {
      new Fade();
    }
    return Fade_instance;
  }
  function Sine() {
    Sine_instance = this;
  }
  Sine.prototype.apply_mx4ult$ = function (alpha) {
    return (1.0 - MathUtils_getInstance().cos_mx4ult$(alpha * PI)) / 2.0;
  };
  Sine.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Sine', interfaces: [Interpolation]};
  var Sine_instance = null;
  function Sine_getInstance() {
    if (Sine_instance === null) {
      new Sine();
    }
    return Sine_instance;
  }
  function SineIn() {
    SineIn_instance = this;
  }
  SineIn.prototype.apply_mx4ult$ = function (alpha) {
    return 1.0 - MathUtils_getInstance().cos_mx4ult$(alpha * PI / 2.0);
  };
  SineIn.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SineIn', interfaces: [Interpolation]};
  var SineIn_instance = null;
  function SineIn_getInstance() {
    if (SineIn_instance === null) {
      new SineIn();
    }
    return SineIn_instance;
  }
  function SineOut() {
    SineOut_instance = this;
  }
  SineOut.prototype.apply_mx4ult$ = function (alpha) {
    return MathUtils_getInstance().sin_mx4ult$(alpha * PI / 2.0);
  };
  SineOut.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SineOut', interfaces: [Interpolation]};
  var SineOut_instance = null;
  function SineOut_getInstance() {
    if (SineOut_instance === null) {
      new SineOut();
    }
    return SineOut_instance;
  }
  function Circle() {
    Circle_instance = this;
  }
  Circle.prototype.apply_mx4ult$ = function (alpha) {
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(alpha, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(alpha, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = alpha;
    }
     while (false);
    var a = clamp_73gzaq$result;
    if (a <= 0.5) {
      a *= 2.0;
      return (1 - Math_0.sqrt(1 - a * a)) / 2.0;
    }
    a = a - 1;
    a *= 2.0;
    return (Math_0.sqrt(1.0 - a * a) + 1.0) / 2.0;
  };
  Circle.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Circle', interfaces: [Interpolation]};
  var Circle_instance = null;
  function Circle_getInstance() {
    if (Circle_instance === null) {
      new Circle();
    }
    return Circle_instance;
  }
  function CircleIn() {
    CircleIn_instance = this;
  }
  CircleIn.prototype.apply_mx4ult$ = function (alpha) {
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(alpha, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(alpha, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = alpha;
    }
     while (false);
    var a = clamp_73gzaq$result;
    return 1 - Math_0.sqrt(1.0 - a * a);
  };
  CircleIn.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CircleIn', interfaces: [Interpolation]};
  var CircleIn_instance = null;
  function CircleIn_getInstance() {
    if (CircleIn_instance === null) {
      new CircleIn();
    }
    return CircleIn_instance;
  }
  function CircleOut() {
    CircleOut_instance = this;
  }
  CircleOut.prototype.apply_mx4ult$ = function (alpha) {
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(alpha, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(alpha, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = alpha;
    }
     while (false);
    var a = clamp_73gzaq$result;
    a = a - 1;
    return Math_0.sqrt(1.0 - a * a);
  };
  CircleOut.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CircleOut', interfaces: [Interpolation]};
  var CircleOut_instance = null;
  function CircleOut_getInstance() {
    if (CircleOut_instance === null) {
      new CircleOut();
    }
    return CircleOut_instance;
  }
  function Reverse(inner) {
    this.inner = inner;
  }
  function ToFro(inner, split) {
    if (split === void 0)
      split = 0.5;
    this.inner = inner;
    this.split = split;
  }
  function YoYo(inner, repetitions) {
    if (repetitions === void 0)
      repetitions = 1.0;
    this.inner = inner;
    this.repetitions = repetitions;
  }
  function Repeat(inner, repetitions) {
    if (repetitions === void 0)
      repetitions = 1.0;
    this.inner = inner;
    this.repetitions = repetitions;
  }
  function BasicBounce() {
    BasicBounce_instance = this;
  }
  var BasicBounce_instance = null;
  function BounceInPlace(bounces, restitution) {
    if (bounces === void 0)
      bounces = 4;
    if (restitution === void 0)
      restitution = 0.2;
    this.bounces = bounces;
    this.restitution = restitution;
    this.decays_0 = null;
    this.intervals_0 = null;
    if (this.bounces < 1 || this.bounces > 20)
      throw Exception_init('repetitions must be between 1 and 20');
    var r = {v: 1.0};
    var array = new Float32Array(this.bounces);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var prev = r.v;
      r.v *= this.restitution;
      array[i] = prev;
    }
    this.decays_0 = array;
    var array_0 = new Float32Array(this.bounces);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = Math_0.sqrt(this.decays_0[i_0]);
    }
    this.intervals_0 = array_0;
    scl(this.intervals_0, 1.0 / sum(this.intervals_0));
  }
  function Clamp(inner, startAlpha, endAlpha) {
    Clamp$Companion_getInstance();
    if (startAlpha === void 0)
      startAlpha = 0.0;
    if (endAlpha === void 0)
      endAlpha = 1.0;
    this.inner = inner;
    this.startAlpha = startAlpha;
    this.endAlpha = endAlpha;
  }
  var Clamp$Companion_instance = null;
  function Bezier(points) {
    this.segments_0 = null;
    var tmp$;
    var pts = plus(plus(listOf_0(new Vector2()), points), listOf_0(new Vector2(1.0, 1.0)));
    var segments = arrayListOf([new BezierSegment(pts.get_za3lpa$(0), pts.get_za3lpa$(1), pts.get_za3lpa$(2), pts.get_za3lpa$(3))]);
    tmp$ = get_lastIndex(pts) - 3 | 0;
    for (var i = 3; i <= tmp$; i += 3) {
      segments.add_11rb$(new BezierSegment(pts.get_za3lpa$(i), pts.get_za3lpa$(i + 1 | 0), pts.get_za3lpa$(i + 2 | 0), pts.get_za3lpa$(i + 3 | 0)));
    }
    this.segments_0 = segments;
  }
  function Easing() {
    Easing_instance = this;
    this.stepped = Stepped_getInstance();
    this.linear = Linear_getInstance();
    this.fade = Fade_getInstance();
    this.pow2 = new Pow(2);
    this.pow2In = new PowIn(2);
    this.pow2Out = new PowOut(2);
    this.pow3 = new Pow(3);
    this.pow3In = new PowIn(3);
    this.pow3Out = new PowOut(3);
    this.pow4 = new Pow(4);
    this.pow4In = new PowIn(4);
    this.pow4Out = new PowOut(4);
    this.pow5 = new Pow(5);
    this.pow5In = new PowIn(5);
    this.pow5Out = new PowOut(5);
    this.exp10 = new Exp(2.0, 10.0);
    this.exp10In = new ExpIn(2.0, 10.0);
    this.exp10Out = new ExpOut(2.0, 10.0);
    this.exp5 = new Exp(2.0, 5.0);
    this.exp5In = new ExpIn(2.0, 5.0);
    this.exp5Out = new ExpOut(2.0, 5.0);
    this.circle = Circle_getInstance();
    this.circleIn = CircleIn_getInstance();
    this.circleOut = CircleOut_getInstance();
    this.sine = Sine_getInstance();
    this.sineIn = SineIn_getInstance();
    this.sineOut = SineOut_getInstance();
    this.elastic = new Elastic(2.0, 10.0, 7, 1.0);
    this.elasticIn = new ElasticIn(2.0, 10.0, 7, 1.0);
    this.elasticOut = new ElasticOut(2.0, 10.0, 7, 1.0);
    this.swing = new Swing(1.5);
    this.swingIn = new SwingIn(2.0);
    this.swingOut = new SwingOut(2.0);
    this.registry_0 = mutableMapOf([to('stepped', this.stepped), to('linear', this.linear), to('fade', this.fade), to('pow2', this.pow2), to('pow2In', this.pow2In), to('pow2Out', this.pow2Out), to('pow3', this.pow3), to('pow3In', this.pow3In), to('pow3Out', this.pow3Out), to('pow4', this.pow4), to('pow4In', this.pow4In), to('pow4Out', this.pow4Out), to('pow5', this.pow5), to('pow5In', this.pow5In), to('pow5Out', this.pow5Out), to('exp10', this.exp10), to('exp10In', this.exp10In), to('exp10Out', this.exp10Out), to('exp5', this.exp5), to('exp5In', this.exp5In), to('exp5Out', this.exp5Out), to('circle', this.circle), to('circleIn', this.circleIn), to('circleOut', this.circleOut), to('sine', this.sine), to('sineIn', this.sineIn), to('sineOut', this.sineOut), to('elastic', this.elastic), to('elasticIn', this.elasticIn), to('elasticOut', this.elasticOut), to('swing', this.swing), to('swingIn', this.swingIn), to('swingOut', this.swingOut)]);
  }
  Easing.prototype.registerInterpolation_3r991m$ = function (name, value) {
    this.registry_0.put_xwzc9p$(name, value);
  };
  Easing.prototype.fromString_61zpoe$ = function (name) {
    return this.registry_0.get_11rb$(name);
  };
  Easing.prototype.toString_w318d9$ = function (value) {
    var tmp$;
    if (value == null)
      return null;
    tmp$ = this.registry_0.entries.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      if (entry.value === value)
        return entry.key;
    }
    return null;
  };
  Easing.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Easing', interfaces: []};
  var Easing_instance = null;
  function Easing_getInstance() {
    if (Easing_instance === null) {
      new Easing();
    }
    return Easing_instance;
  }
  function FrustumRo() {
  }
  FrustumRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'FrustumRo', interfaces: []};
  function Frustum(planes) {
    Frustum$Companion_getInstance();
    if (planes === void 0) {
      var tmp$;
      var a = ArrayList_init(6);
      tmp$ = 6 - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        a.add_11rb$(new Plane(new Vector3(), 0.0));
      }
      planes = a;
    }
    this.planes_yoscz3$_0 = planes;
    var tmp$_0;
    var a_0 = ArrayList_init(8);
    tmp$_0 = 8 - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      a_0.add_11rb$(new Vector3());
    }
    this.planePoints_y6rjm7$_0 = a_0;
    this.corners_slz59s$_0 = lazy(Frustum$corners$lambda);
  }
  Object.defineProperty(Frustum.prototype, 'planes', {get: function () {
    return this.planes_yoscz3$_0;
  }});
  Object.defineProperty(Frustum.prototype, 'planePoints', {get: function () {
    return this.planePoints_y6rjm7$_0;
  }});
  Frustum.prototype.update_pekf88$ = function (inverseProjectionView) {
    var tmp$;
    tmp$ = 8 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      inverseProjectionView.prj_9wm29k$(this.planePoints.get_za3lpa$(i).set_1fv2cb$(Frustum$Companion_getInstance().clipSpacePlanePoints.get_za3lpa$(i)));
    }
    this.planes.get_za3lpa$(0).set_qeea63$(this.planePoints.get_za3lpa$(1), this.planePoints.get_za3lpa$(0), this.planePoints.get_za3lpa$(2));
    this.planes.get_za3lpa$(1).set_qeea63$(this.planePoints.get_za3lpa$(4), this.planePoints.get_za3lpa$(5), this.planePoints.get_za3lpa$(7));
    this.planes.get_za3lpa$(2).set_qeea63$(this.planePoints.get_za3lpa$(0), this.planePoints.get_za3lpa$(4), this.planePoints.get_za3lpa$(3));
    this.planes.get_za3lpa$(3).set_qeea63$(this.planePoints.get_za3lpa$(5), this.planePoints.get_za3lpa$(1), this.planePoints.get_za3lpa$(6));
    this.planes.get_za3lpa$(4).set_qeea63$(this.planePoints.get_za3lpa$(2), this.planePoints.get_za3lpa$(3), this.planePoints.get_za3lpa$(6));
    this.planes.get_za3lpa$(5).set_qeea63$(this.planePoints.get_za3lpa$(4), this.planePoints.get_za3lpa$(0), this.planePoints.get_za3lpa$(1));
  };
  Frustum.prototype.pointInFrustum_1fv2cb$ = function (point) {
    var tmp$;
    tmp$ = this.planes;
    for (var i = 0; i !== tmp$.size; ++i) {
      var result = this.planes.get_za3lpa$(i).testPoint_1fv2cb$(point);
      if (result === PlaneSide$BACK_getInstance())
        return false;
    }
    return true;
  };
  Frustum.prototype.pointInFrustum_y2kzbl$ = function (x, y, z) {
    var tmp$;
    tmp$ = this.planes;
    for (var i = 0; i !== tmp$.size; ++i) {
      var result = this.planes.get_za3lpa$(i).testPoint_y2kzbl$(x, y, z);
      if (result === PlaneSide$BACK_getInstance())
        return false;
    }
    return true;
  };
  Frustum.prototype.sphereInFrustum_pz1gqy$ = function (center, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      if (this.planes.get_za3lpa$(i).normal.x * center.x + this.planes.get_za3lpa$(i).normal.y * center.y + this.planes.get_za3lpa$(i).normal.z * center.z < -radius - this.planes.get_za3lpa$(i).d)
        return false;
    return true;
  };
  Frustum.prototype.sphereInFrustum_7b5o5w$ = function (x, y, z, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      if (this.planes.get_za3lpa$(i).normal.x * x + this.planes.get_za3lpa$(i).normal.y * y + this.planes.get_za3lpa$(i).normal.z * z < -radius - this.planes.get_za3lpa$(i).d)
        return false;
    return true;
  };
  Frustum.prototype.sphereInFrustumWithoutNearFar_wscm5v$ = function (center, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 2; i <= tmp$; i++)
      if (this.planes.get_za3lpa$(i).normal.x * center.x + this.planes.get_za3lpa$(i).normal.y * center.y + this.planes.get_za3lpa$(i).normal.z * center.z < -radius - this.planes.get_za3lpa$(i).d)
        return false;
    return true;
  };
  Frustum.prototype.sphereInFrustumWithoutNearFar_7b5o5w$ = function (x, y, z, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 2; i <= tmp$; i++)
      if (this.planes.get_za3lpa$(i).normal.x * x + this.planes.get_za3lpa$(i).normal.y * y + this.planes.get_za3lpa$(i).normal.z * z < -radius - this.planes.get_za3lpa$(i).d)
        return false;
    return true;
  };
  Object.defineProperty(Frustum.prototype, 'corners_0', {get: function () {
    return this.corners_slz59s$_0.value;
  }});
  Frustum.prototype.boundsInFrustum_s3o7vk$ = function (bounds) {
    var tmp$, tmp$_0;
    var corners = bounds.getCorners_72zqb$(this.corners_0);
    var len = corners.size;
    tmp$ = get_lastIndex(this.planes);
    for (var i = 0; i <= tmp$; i++) {
      var out = 0;
      tmp$_0 = len - 1 | 0;
      for (var j = 0; j <= tmp$_0; j++)
        if (this.planes.get_za3lpa$(i).testPoint_1fv2cb$(corners.get_za3lpa$(j)) === PlaneSide$BACK_getInstance()) {
          out = out + 1 | 0;
        }
      if (out === 8)
        return false;
    }
    return true;
  };
  Frustum.prototype.boundsInFrustum_uwler8$ = function (center, dimensions) {
    return this.boundsInFrustum_w8lrqs$(center.x, center.y, center.z, dimensions.x / 2, dimensions.y / 2, dimensions.z / 2);
  };
  Frustum.prototype.boundsInFrustum_w8lrqs$ = function (x, y, z, halfWidth, halfHeight, halfDepth) {
    var tmp$;
    tmp$ = get_lastIndex(this.planes);
    for (var i = 0; i <= tmp$; i++) {
      var plane = this.planes.get_za3lpa$(i);
      if (plane.testPoint_y2kzbl$(x + halfWidth, y + halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x + halfWidth, y + halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x + halfWidth, y - halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x + halfWidth, y - halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y + halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y + halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y - halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y - halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      return false;
    }
    return true;
  };
  function Frustum$Companion() {
    Frustum$Companion_instance = this;
    this.clipSpacePlanePoints = listOf([new Vector3(-1.0, -1.0, -1.0), new Vector3(1.0, -1.0, -1.0), new Vector3(1.0, 1.0, -1.0), new Vector3(-1.0, 1.0, -1.0), new Vector3(-1.0, -1.0, 1.0), new Vector3(1.0, -1.0, 1.0), new Vector3(1.0, 1.0, 1.0), new Vector3(-1.0, 1.0, 1.0)]);
  }
  Frustum$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Frustum$Companion_instance = null;
  function Frustum$Companion_getInstance() {
    if (Frustum$Companion_instance === null) {
      new Frustum$Companion();
    }
    return Frustum$Companion_instance;
  }
  function Frustum$corners$lambda() {
    var tmp$;
    var a = ArrayList_init(8);
    tmp$ = 8 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      a.add_11rb$(new Vector3());
    }
    return a;
  }
  Frustum.$metadata$ = {kind: Kind_CLASS, simpleName: 'Frustum', interfaces: [FrustumRo]};
  Frustum.prototype.component1 = function () {
    return this.planes;
  };
  Frustum.prototype.copy_dp6prg$ = function (planes) {
    return new Frustum(planes === void 0 ? this.planes : planes);
  };
  Frustum.prototype.toString = function () {
    return 'Frustum(planes=' + Kotlin.toString(this.planes) + ')';
  };
  Frustum.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.planes) | 0;
    return result;
  };
  Frustum.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.planes, other.planes))));
  };
  var GeomUtils_instance = null;
  function IntRectangleRo() {
  }
  IntRectangleRo.prototype.copy = function () {
    return new IntRectangle(this.x, this.y, this.width, this.height);
  };
  IntRectangleRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'IntRectangleRo', interfaces: []};
  function IntRectangle(x, y, width, height) {
    IntRectangle$Companion_getInstance();
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    this.x_yzxp7s$_0 = x;
    this.y_yzxp8n$_0 = y;
    this.width_mxr8o6$_0 = width;
    this.height_9nlshf$_0 = height;
  }
  Object.defineProperty(IntRectangle.prototype, 'x', {get: function () {
    return this.x_yzxp7s$_0;
  }, set: function (x) {
    this.x_yzxp7s$_0 = x;
  }});
  Object.defineProperty(IntRectangle.prototype, 'y', {get: function () {
    return this.y_yzxp8n$_0;
  }, set: function (y) {
    this.y_yzxp8n$_0 = y;
  }});
  Object.defineProperty(IntRectangle.prototype, 'width', {get: function () {
    return this.width_mxr8o6$_0;
  }, set: function (width) {
    this.width_mxr8o6$_0 = width;
  }});
  Object.defineProperty(IntRectangle.prototype, 'height', {get: function () {
    return this.height_9nlshf$_0;
  }, set: function (height) {
    this.height_9nlshf$_0 = height;
  }});
  Object.defineProperty(IntRectangle.prototype, 'left', {get: function () {
    return this.x;
  }});
  Object.defineProperty(IntRectangle.prototype, 'top', {get: function () {
    return this.y;
  }});
  Object.defineProperty(IntRectangle.prototype, 'right', {get: function () {
    return this.x + this.width | 0;
  }});
  Object.defineProperty(IntRectangle.prototype, 'bottom', {get: function () {
    return this.y + this.height | 0;
  }});
  Object.defineProperty(IntRectangle.prototype, 'isEmpty', {get: function () {
    return this.width === 0 || this.height === 0;
  }});
  IntRectangle.prototype.set_tjonv8$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  IntRectangle.prototype.clear = function () {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  IntRectangle.prototype.setPosition_vux9f0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  IntRectangle.prototype.setSize_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  IntRectangle.prototype.intersects_vux9f0$ = function (x, y) {
    return this.x <= x && (this.x + this.width | 0) >= x && this.y <= y && (this.y + this.height | 0) >= y;
  };
  IntRectangle.prototype.contains_smhrz9$ = function (rectangle) {
    var xmin = rectangle.x;
    var xmax = xmin + rectangle.width | 0;
    var ymin = rectangle.y;
    var ymax = ymin + rectangle.height | 0;
    return xmin > this.x && xmin < (this.x + this.width | 0) && (xmax > this.x && xmax < (this.x + this.width | 0)) && (ymin > this.y && ymin < (this.y + this.height | 0) && (ymax > this.y && ymax < (this.y + this.height | 0)));
  };
  IntRectangle.prototype.intersects_smhrz9$ = function (r) {
    return this.intersects_tjonv8$(r.x, r.y, r.width, r.height);
  };
  IntRectangle.prototype.intersects_tjonv8$ = function (xVal, yVal, widthVal, heightVal) {
    return this.x < (xVal + widthVal | 0) && (this.x + this.width | 0) > xVal && this.y < (yVal + heightVal | 0) && (this.y + this.height | 0) > yVal;
  };
  IntRectangle.prototype.set_smhrz9$ = function (rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
    return this;
  };
  IntRectangle.prototype.canContain_vux9f0$ = function (width, height) {
    return this.width >= width && this.height >= height;
  };
  Object.defineProperty(IntRectangle.prototype, 'area', {get: function () {
    return Kotlin.imul(this.width, this.height);
  }});
  Object.defineProperty(IntRectangle.prototype, 'perimeter', {get: function () {
    return 2 * (this.width + this.height | 0) | 0;
  }});
  IntRectangle.prototype.inflate_tjonv8$ = function (left, top, right, bottom) {
    this.x = this.x - left | 0;
    this.width = this.width + (left + right) | 0;
    this.y = this.y - top | 0;
    this.height = this.height + (top + bottom) | 0;
  };
  IntRectangle.prototype.ext_vux9f0$ = function (x2, y2) {
    if (x2 > (this.x + this.width | 0))
      this.width = x2 - this.x | 0;
    if (x2 < this.x)
      this.x = x2;
    if (y2 > (this.y + this.height | 0))
      this.height = y2 - this.y | 0;
    if (y2 < this.y)
      this.y = y2;
  };
  IntRectangle.prototype.ext_smhrz9$ = function (rect) {
    var a = this.x;
    var b = rect.x;
    var minX = Math_0.min(a, b);
    var a_0 = this.x + this.width | 0;
    var b_0 = rect.x + rect.width | 0;
    var maxX = Math_0.max(a_0, b_0);
    this.x = minX;
    this.width = maxX - minX | 0;
    var a_1 = this.y;
    var b_1 = rect.y;
    var minY = Math_0.min(a_1, b_1);
    var a_2 = this.y + this.height | 0;
    var b_2 = rect.y + rect.height | 0;
    var maxY = Math_0.max(a_2, b_2);
    this.y = minY;
    this.height = maxY - minY | 0;
    return this;
  };
  IntRectangle.prototype.scl_za3lpa$ = function (scalar) {
    this.x = Kotlin.imul(this.x, scalar);
    this.y = Kotlin.imul(this.y, scalar);
    this.width = Kotlin.imul(this.width, scalar);
    this.height = Kotlin.imul(this.height, scalar);
  };
  function IntRectangle$Companion() {
    IntRectangle$Companion_instance = this;
    this.pool_0 = ClearableObjectPool_init(IntRectangle$Companion$pool$lambda);
  }
  IntRectangle$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  IntRectangle$Companion.prototype.free_v2n7uw$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  function IntRectangle$Companion$pool$lambda() {
    return new IntRectangle();
  }
  IntRectangle$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var IntRectangle$Companion_instance = null;
  function IntRectangle$Companion_getInstance() {
    if (IntRectangle$Companion_instance === null) {
      new IntRectangle$Companion();
    }
    return IntRectangle$Companion_instance;
  }
  IntRectangle.$metadata$ = {kind: Kind_CLASS, simpleName: 'IntRectangle', interfaces: [Clearable, IntRectangleRo]};
  IntRectangle.prototype.component1 = function () {
    return this.x;
  };
  IntRectangle.prototype.component2 = function () {
    return this.y;
  };
  IntRectangle.prototype.component3 = function () {
    return this.width;
  };
  IntRectangle.prototype.component4 = function () {
    return this.height;
  };
  IntRectangle.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new IntRectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  IntRectangle.prototype.toString = function () {
    return 'IntRectangle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  IntRectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  IntRectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function IntRectangleSerializer() {
    IntRectangleSerializer_instance = this;
  }
  IntRectangleSerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    int_0(writer, 'x', $receiver.x);
    int_0(writer, 'y', $receiver.y);
    int_0(writer, 'width', $receiver.width);
    int_0(writer, 'height', $receiver.height);
  };
  IntRectangleSerializer.prototype.read_gax0m7$ = function (reader) {
    return new IntRectangle(ensureNotNull(int(reader, 'x')), ensureNotNull(int(reader, 'y')), ensureNotNull(int(reader, 'width')), ensureNotNull(int(reader, 'height')));
  };
  IntRectangleSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'IntRectangleSerializer', interfaces: [From, To]};
  var IntRectangleSerializer_instance = null;
  function IntRectangleSerializer_getInstance() {
    if (IntRectangleSerializer_instance === null) {
      new IntRectangleSerializer();
    }
    return IntRectangleSerializer_instance;
  }
  var PI;
  var PI2;
  var E;
  var TO_DEG;
  var TO_RAD;
  function TrigLookup() {
    TrigLookup_instance = this;
    this.SIN_BITS = 14;
    this.SIN_MASK = ~(-1 << this.SIN_BITS);
    this.SIN_COUNT = this.SIN_MASK + 1 | 0;
    this.radFull = PI * 2;
    this.radToIndex = this.SIN_COUNT / this.radFull;
    this.table = new Float32Array(this.SIN_COUNT);
    var tmp$;
    tmp$ = this.SIN_COUNT - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      this.table[i] = Math.sin((i + 0.5) / this.SIN_COUNT * this.radFull);
    }
    for (var i_0 = 0; i_0 <= 16; i_0++) {
      var theta = i_0 * PI2 / 16;
      this.table[numberToInt(theta * this.radToIndex) & this.SIN_MASK] = Math.sin(theta);
    }
  }
  TrigLookup.prototype.sin_mx4ult$ = function (radians) {
    return this.table[numberToInt(radians * this.radToIndex) & this.SIN_MASK];
  };
  TrigLookup.prototype.cos_mx4ult$ = function (radians) {
    return this.table[numberToInt((radians + PI / 2.0) * this.radToIndex) & this.SIN_MASK];
  };
  TrigLookup.prototype.tan_mx4ult$ = function (radians) {
    return this.sin_mx4ult$(radians) / this.cos_mx4ult$(radians);
  };
  TrigLookup.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TrigLookup', interfaces: []};
  var TrigLookup_instance = null;
  function TrigLookup_getInstance() {
    if (TrigLookup_instance === null) {
      new TrigLookup();
    }
    return TrigLookup_instance;
  }
  function Atan2() {
    Atan2_instance = this;
    this.ATAN2_BITS_0 = 7;
    this.ATAN2_BITS2_0 = this.ATAN2_BITS_0 << 1;
    this.ATAN2_MASK_0 = ~(-1 << this.ATAN2_BITS2_0);
    this.ATAN2_COUNT_0 = this.ATAN2_MASK_0 + 1 | 0;
    this.ATAN2_DIM_0 = numberToInt(Math.sqrt(this.ATAN2_COUNT_0));
    this.INV_ATAN2_DIM_MINUS_1_0 = 1.0 / (this.ATAN2_DIM_0 - 1.0);
    this.table_8be2vx$ = new Float32Array(this.ATAN2_COUNT_0);
    var tmp$, tmp$_0;
    tmp$ = this.ATAN2_DIM_0 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      tmp$_0 = this.ATAN2_DIM_0 - 1 | 0;
      for (var j = 0; j <= tmp$_0; j++) {
        var x0 = i / this.ATAN2_DIM_0;
        var y0 = j / this.ATAN2_DIM_0;
        this.table_8be2vx$[Kotlin.imul(j, this.ATAN2_DIM_0) + i | 0] = Math.atan2(y0, x0);
      }
    }
  }
  Atan2.prototype.atan2_dleff0$ = function (y, x) {
    var yVar = y;
    var xVar = x;
    var add;
    var mul;
    if (xVar < 0) {
      if (yVar < 0) {
        yVar = -yVar;
        mul = 1.0;
      }
       else
        mul = -1.0;
      xVar = -xVar;
      add = -PI;
    }
     else {
      if (yVar < 0) {
        yVar = -yVar;
        mul = -1.0;
      }
       else
        mul = 1.0;
      add = 0.0;
    }
    var invDiv = 1 / ((xVar < yVar ? yVar : xVar) * this.INV_ATAN2_DIM_MINUS_1_0);
    var xi = numberToInt(xVar * invDiv);
    var yi = numberToInt(yVar * invDiv);
    return (Atan2_getInstance().table_8be2vx$[Kotlin.imul(yi, this.ATAN2_DIM_0) + xi | 0] + add) * mul;
  };
  Atan2.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Atan2', interfaces: []};
  var Atan2_instance = null;
  function Atan2_getInstance() {
    if (Atan2_instance === null) {
      new Atan2();
    }
    return Atan2_instance;
  }
  function MathUtils() {
    MathUtils_instance = this;
    this.nanoToSec = 1 / 1.0E9;
    this.FLOAT_ROUNDING_ERROR = 1.0E-6;
    this.radDeg = 180.0 / PI;
    this.degRad = PI / 180.0;
    this.rng = new Random();
  }
  MathUtils.prototype.sin_mx4ult$ = function (radians) {
    return TrigLookup_getInstance().sin_mx4ult$(radians);
  };
  MathUtils.prototype.cos_mx4ult$ = function (radians) {
    return TrigLookup_getInstance().cos_mx4ult$(radians);
  };
  MathUtils.prototype.tan_mx4ult$ = function (radians) {
    return TrigLookup_getInstance().tan_mx4ult$(radians);
  };
  MathUtils.prototype.atan2_dleff0$ = function (y, x) {
    return Atan2_getInstance().atan2_dleff0$(y, x);
  };
  MathUtils.prototype.random_za3lpa$ = function (range) {
    return this.rng.nextInt_za3lpa$(range + 1 | 0);
  };
  MathUtils.prototype.random_vux9f0$ = function (start, end) {
    return start + this.rng.nextInt_za3lpa$(end - start + 1 | 0) | 0;
  };
  MathUtils.prototype.random_s8cxhz$ = function (range) {
    return Kotlin.Long.fromNumber(this.rng.nextDouble() * range.toNumber());
  };
  MathUtils.prototype.random_3pjtqy$ = function (start, end) {
    return start.add(Kotlin.Long.fromNumber(this.rng.nextDouble() * end.subtract(start).toNumber()));
  };
  MathUtils.prototype.randomBoolean = function () {
    return this.rng.nextBoolean();
  };
  MathUtils.prototype.randomBoolean_mx4ult$ = function (chance) {
    return this.random() < chance;
  };
  MathUtils.prototype.random = function () {
    return this.rng.nextFloat();
  };
  MathUtils.prototype.random_mx4ult$ = function (range) {
    return this.rng.nextFloat() * range;
  };
  MathUtils.prototype.random_dleff0$ = function (start, end) {
    return start + this.rng.nextFloat() * (end - start);
  };
  MathUtils.prototype.randomSign = function () {
    return 1 | this.rng.nextInt() >> 31;
  };
  MathUtils.prototype.randomTriangular = function () {
    return this.rng.nextFloat() - this.rng.nextFloat();
  };
  MathUtils.prototype.randomTriangular_mx4ult$ = function (max) {
    return (this.rng.nextFloat() - this.rng.nextFloat()) * max;
  };
  MathUtils.prototype.randomTriangular_dleff0$ = function (min, max) {
    return this.randomTriangular_y2kzbl$(min, max, (max - min) * 0.5);
  };
  MathUtils.prototype.randomTriangular_y2kzbl$ = function (min, max, mode) {
    var u = this.rng.nextFloat();
    var d = max - min;
    if (u <= (mode - min) / d) {
      return min + Math_0.sqrt(u * d * (mode - min));
    }
    return max - Math_0.sqrt((1 - u) * d * (max - mode));
  };
  MathUtils.prototype.nextPowerOfTwo_za3lpa$ = function (value) {
    var v = value;
    if (v === 0)
      return 1;
    v = v - 1 | 0;
    v = v | v >> 1;
    v = v | v >> 2;
    v = v | v >> 4;
    v = v | v >> 8;
    v = v | v >> 16;
    return v + 1 | 0;
  };
  MathUtils.prototype.isPowerOfTwo_za3lpa$ = function (value) {
    return value !== 0 && (value & value - 1) === 0;
  };
  MathUtils.prototype.lerp_y2kzbl$ = function (fromValue, toValue, progress) {
    return fromValue + (toValue - fromValue) * progress;
  };
  MathUtils.prototype.abs_mx4ult$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_mx4ult$', function (value) {
    return value < 0.0 ? -value : value;
  });
  MathUtils.prototype.abs_14dthe$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_14dthe$', function (value) {
    return value < 0.0 ? -value : value;
  });
  MathUtils.prototype.abs_za3lpa$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_za3lpa$', function (value) {
    return value < 0.0 ? -value | 0 : value;
  });
  MathUtils.prototype.abs_s8cxhz$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_s8cxhz$', function (value) {
    return value.toNumber() < 0.0 ? value.unaryMinus() : value;
  });
  MathUtils.prototype.isZero_dleff0$ = function (value, tolerance) {
    if (tolerance === void 0)
      tolerance = this.FLOAT_ROUNDING_ERROR;
    return (value < 0.0 ? -value : value) <= tolerance;
  };
  MathUtils.prototype.isZero_vcfc77$ = function (value, tolerance) {
    if (tolerance === void 0)
      tolerance = this.FLOAT_ROUNDING_ERROR;
    return (value < 0.0 ? -value : value) <= tolerance;
  };
  MathUtils.prototype.isEqual_dleff0$ = function (a, b) {
    var value = a - b;
    return (value < 0.0 ? -value : value) <= this.FLOAT_ROUNDING_ERROR;
  };
  MathUtils.prototype.isEqual_y2kzbl$ = function (a, b, tolerance) {
    var value = a - b;
    return (value < 0.0 ? -value : value) <= tolerance;
  };
  MathUtils.prototype.log_dleff0$ = function (x, base) {
    return Math.log(x) / Math.log(base);
  };
  MathUtils.prototype.log2_mx4ult$ = function (x) {
    return this.log_dleff0$(x, 2.0);
  };
  MathUtils.prototype.clamp_73gzaq$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.clamp_73gzaq$', function (value, min, max) {
    if (Kotlin.compareTo(value, min) <= 0)
      return min;
    if (Kotlin.compareTo(value, max) >= 0)
      return max;
    return value;
  });
  MathUtils.prototype.min_sdesaw$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.min_sdesaw$', wrapFunction(function () {
    var minOf = Kotlin.kotlin.comparisons.minOf_sdesaw$;
    return function (x, y) {
      return minOf(x, y);
    };
  }));
  MathUtils.prototype.min_73gzaq$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.min_73gzaq$', wrapFunction(function () {
    var minOf = Kotlin.kotlin.comparisons.minOf_73gzaq$;
    return function (x, y, z) {
      return minOf(x, y, z);
    };
  }));
  MathUtils.prototype.min_3v16i4$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.min_3v16i4$', wrapFunction(function () {
    var minOf = Kotlin.kotlin.comparisons.minOf_sdesaw$;
    var minOf_0 = Kotlin.kotlin.comparisons.minOf_73gzaq$;
    return function (w, x, y, z) {
      return minOf_0(w, x, minOf(y, z));
    };
  }));
  MathUtils.prototype.max_sdesaw$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.max_sdesaw$', wrapFunction(function () {
    var maxOf = Kotlin.kotlin.comparisons.maxOf_sdesaw$;
    return function (x, y) {
      return maxOf(x, y);
    };
  }));
  MathUtils.prototype.max_73gzaq$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.max_73gzaq$', wrapFunction(function () {
    var maxOf = Kotlin.kotlin.comparisons.maxOf_73gzaq$;
    return function (x, y, z) {
      return maxOf(x, y, z);
    };
  }));
  MathUtils.prototype.max_3v16i4$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.max_3v16i4$', wrapFunction(function () {
    var maxOf = Kotlin.kotlin.comparisons.maxOf_sdesaw$;
    var maxOf_0 = Kotlin.kotlin.comparisons.maxOf_73gzaq$;
    return function (w, x, y, z) {
      return maxOf_0(w, x, maxOf(y, z));
    };
  }));
  MathUtils.prototype.ceil_mx4ult$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.ceil_mx4ult$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      return Math_0.ceil(v);
    };
  }));
  MathUtils.prototype.floor_mx4ult$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.floor_mx4ult$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      return Math_0.floor(v);
    };
  }));
  MathUtils.prototype.round_mx4ult$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.round_mx4ult$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      return Math_0.round(v);
    };
  }));
  MathUtils.prototype.sqrt_mx4ult$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.sqrt_mx4ult$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      return Math_0.sqrt(v);
    };
  }));
  MathUtils.prototype.pow_dleff0$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.pow_dleff0$', wrapFunction(function () {
    var Math_0 = Math;
    return function (a, b) {
      return Math_0.pow(a, b);
    };
  }));
  MathUtils.prototype.acos_mx4ult$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.acos_mx4ult$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      return Math_0.acos(v);
    };
  }));
  MathUtils.prototype.asin_mx4ult$ = defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.asin_mx4ult$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      return Math_0.asin(v);
    };
  }));
  MathUtils.prototype.signum_mx4ult$ = function (v) {
    if (v > 0)
      return 1.0;
    if (v < 0)
      return -1.0;
    if (isNaN_0(v))
      return kotlin_js_internal_FloatCompanionObject.NaN;
    return 0.0;
  };
  MathUtils.prototype.mod_dleff0$ = function (a, n) {
    return a < 0.0 ? (a % n + n) % n : a % n;
  };
  MathUtils.prototype.mod_vux9f0$ = function (a, n) {
    return a < 0 ? (a % n + n | 0) % n : a % n;
  };
  MathUtils.prototype.angleDiff_dleff0$ = function (a, b) {
    var diff = b - a;
    if (diff < -PI)
      diff = PI2 - diff;
    if (diff > PI2)
      diff %= PI2;
    if (diff >= PI)
      diff -= PI2;
    return diff;
  };
  MathUtils.prototype.getQuadraticRoots_kjmfqm$ = function (a, b, c, out) {
    out.clear();
    if (a === 0.0) {
      if (b === 0.0)
        return;
      out.add_11rb$(-c / b);
    }
    var q = b * b - 4.0 * a * c;
    var signQ = q > 0.0 ? 1 : q < 0.0 ? -1 : 0;
    if (signQ >= 0)
      if (signQ === 0) {
        out.add_11rb$(-b / (2.0 * a));
      }
       else {
        var aa = -b / (2.0 * a);
        var tmp = Math_0.sqrt(q) / (2.0 * a);
        out.add_11rb$(aa - tmp);
        out.add_11rb$(aa + tmp);
      }
  };
  MathUtils.prototype.getCubicRoots_kvo1rj$ = function (a, b, c, d, out) {
    if (a === void 0)
      a = 0.0;
    if (b === void 0)
      b = 0.0;
    if (c === void 0)
      c = 0.0;
    if (d === void 0)
      d = 0.0;
    if (a === 0.0) {
      return this.getQuadraticRoots_kjmfqm$(b, c, d, out);
    }
    out.clear();
    var b_0 = b;
    var c_0 = c;
    var d_0 = d;
    if (a !== 1.0) {
      b_0 /= a;
      c_0 /= a;
      d_0 /= a;
    }
    var q = (b_0 * b_0 - 3.0 * c_0) / 9.0;
    var q3 = q * q * q;
    var r = (2.0 * b_0 * b_0 * b_0 - 9.0 * b_0 * c_0 + 27.0 * d_0) / 54.0;
    var diff = q3 - r * r;
    if (diff >= 0) {
      if (q === 0.0) {
        out.add_11rb$(0.0);
      }
       else {
        var theta = Math_0.acos(r / Math_0.sqrt(q3));
        var qSqrt = Math_0.sqrt(q);
        out.add_11rb$(-2.0 * qSqrt * this.cos_mx4ult$(theta / 3.0) - b_0 / 3.0);
        out.add_11rb$(-2.0 * qSqrt * this.cos_mx4ult$((theta + 2.0 * PI) / 3.0) - b_0 / 3.0);
        out.add_11rb$(-2.0 * qSqrt * this.cos_mx4ult$((theta + 4.0 * PI) / 3.0) - b_0 / 3.0);
      }
    }
     else {
      var tmp = Math_0.pow(Math_0.sqrt(-diff) + (r < 0.0 ? -r : r), 1.0 / 3.0);
      var rSign = r > 0.0 ? 1.0 : r < 0.0 ? -1.0 : 0.0;
      out.add_11rb$(-rSign * (tmp + q / tmp) - b_0 / 3.0);
    }
  };
  MathUtils.prototype.roundToNearest_y2kzbl$ = function (value, snap, offset) {
    if (offset === void 0)
      offset = 0.0;
    if (snap <= 0)
      return value;
    var v = value - offset;
    v /= snap;
    v = Math_0.round(v);
    v *= snap;
    return v + offset;
  };
  MathUtils.prototype.floorToNearest_y2kzbl$ = function (value, snap, offset) {
    if (offset === void 0)
      offset = 0.0;
    if (snap <= 0)
      return value;
    var v = value - offset;
    v /= snap;
    v = Math_0.floor(v);
    v *= snap;
    return v + offset;
  };
  MathUtils.prototype.ceilToNearest_y2kzbl$ = function (value, snap, offset) {
    if (offset === void 0)
      offset = 0.0;
    if (snap <= 0)
      return value;
    var v = value - offset;
    v /= snap;
    v = Math_0.ceil(v);
    v *= snap;
    return v + offset;
  };
  MathUtils.$metadata$ = {kind: Kind_OBJECT, simpleName: 'MathUtils', interfaces: []};
  var MathUtils_instance = null;
  function MathUtils_getInstance() {
    if (MathUtils_instance === null) {
      new MathUtils();
    }
    return MathUtils_instance;
  }
  function Matrix3Ro() {
  }
  Matrix3Ro.prototype.copy = function () {
    return new Matrix3(copy(this.values));
  };
  Matrix3Ro.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Matrix3Ro', interfaces: []};
  function Matrix3(values) {
    Matrix3$Companion_getInstance();
    if (values === void 0)
      values = arrayListOf([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);
    this.values_1wi4z8$_0 = values;
  }
  Object.defineProperty(Matrix3.prototype, 'values', {get: function () {
    return this.values_1wi4z8$_0;
  }});
  Matrix3.prototype.idt = function () {
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, 1.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M10, 0.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M20, 0.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M01, 0.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, 1.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M21, 0.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M02, 0.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M12, 0.0);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M22, 1.0);
    return this;
  };
  Matrix3.prototype.mul_pekfyx$ = function (matrix) {
    Matrix3$Companion_getInstance().mul_0(this.values, matrix.values);
    return this;
  };
  Matrix3.prototype.times_pekfyx$ = function (matrix) {
    return this.copy().mul_pekfyx$(matrix);
  };
  Matrix3.prototype.mulLeft_pekfyx$ = function (m) {
    var v00 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20);
    var v01 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21);
    var v02 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22);
    var v10 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20);
    var v11 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21);
    var v12 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22);
    var v20 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M22) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20);
    var v21 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M22) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21);
    var v22 = m.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) + m.values.get_za3lpa$(Matrix3$Companion_getInstance().M22) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, v00);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M10, v10);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M20, v20);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M01, v01);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, v11);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M21, v21);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M02, v02);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M12, v12);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M22, v22);
    return this;
  };
  Matrix3.prototype.prj_9wm29l$ = function (vec) {
    var mat = this.values;
    var x = vec.x * mat.get_za3lpa$(0) + vec.y * mat.get_za3lpa$(3) + mat.get_za3lpa$(6);
    var y = vec.x * mat.get_za3lpa$(1) + vec.y * mat.get_za3lpa$(4) + mat.get_za3lpa$(7);
    vec.x = x;
    vec.y = y;
    return vec;
  };
  Matrix3.prototype.toString = function () {
    return '[' + toString(this.values.get_za3lpa$(0)) + '|' + toString(this.values.get_za3lpa$(3)) + '|' + toString(this.values.get_za3lpa$(6)) + ']\n' + '[' + toString(this.values.get_za3lpa$(1)) + '|' + toString(this.values.get_za3lpa$(4)) + '|' + toString(this.values.get_za3lpa$(7)) + ']\n' + '[' + toString(this.values.get_za3lpa$(2)) + '|' + toString(this.values.get_za3lpa$(5)) + '|' + toString(this.values.get_za3lpa$(8)) + ']';
  };
  Matrix3.prototype.det = function () {
    return this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22) + this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) + this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20);
  };
  Matrix3.prototype.inv = function () {
    var det = this.det();
    if (det === 0.0)
      throw Exception_init("Can't invert a singular matrix");
    var invDet = 1.0 / det;
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M00, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M10, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M20, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M01, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M11, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M22) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M21, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M02, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M12, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12));
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M22, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) - this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M00));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M10, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M10));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M20, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M20));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M01, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M01));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M11));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M21, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M21));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M02, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M02));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M12, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M12));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M22, invDet * Matrix3$Companion_getInstance().tmp_0.get_za3lpa$(Matrix3$Companion_getInstance().M22));
    return this;
  };
  Matrix3.prototype.set_pekfyx$ = function (mat) {
    var tmp$;
    tmp$ = 9 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.values.set_wxm5ur$(i, mat.values.get_za3lpa$(i));
    }
    return this;
  };
  Matrix3.prototype.set_pekf88$ = function (mat) {
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, mat.values.get_za3lpa$(0));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M10, mat.values.get_za3lpa$(1));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M20, mat.values.get_za3lpa$(2));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M01, mat.values.get_za3lpa$(4));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, mat.values.get_za3lpa$(5));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M21, mat.values.get_za3lpa$(6));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M02, mat.values.get_za3lpa$(8));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M12, mat.values.get_za3lpa$(9));
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M22, mat.values.get_za3lpa$(10));
    return this;
  };
  Matrix3.prototype.set_hcyabg$ = function (values) {
    var tmp$;
    tmp$ = 9 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.values.set_wxm5ur$(i, values.get_za3lpa$(i));
    }
    return this;
  };
  Matrix3.prototype.setTranslation_dleff0$ = function (x, y) {
    this.values.set_wxm5ur$(6, x);
    this.values.set_wxm5ur$(7, y);
    return this;
  };
  Matrix3.prototype.trn_dleff0$ = function (x, y) {
    this.values.set_wxm5ur$(6, this.values.get_za3lpa$(6) + x);
    this.values.set_wxm5ur$(7, this.values.get_za3lpa$(7) + y);
    return this;
  };
  Matrix3.prototype.trn_9wm29l$ = function (vector) {
    this.values.set_wxm5ur$(6, this.values.get_za3lpa$(6) + vector.x);
    this.values.set_wxm5ur$(7, this.values.get_za3lpa$(7) + vector.y);
    return this;
  };
  Matrix3.prototype.trn_9wm29k$ = function (vector) {
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M02, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02) + vector.x);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M12, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12) + vector.y);
    return this;
  };
  Matrix3.prototype.rotate_mx4ult$ = function (radians) {
    if (radians === 0.0)
      return this;
    var cos = MathUtils_getInstance().cos_mx4ult$(radians);
    var sin = MathUtils_getInstance().sin_mx4ult$(radians);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M00, cos);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M10, sin);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M20, 0.0);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M01, -sin);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M11, cos);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M21, 0.0);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M02, 0.0);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M12, 0.0);
    Matrix3$Companion_getInstance().tmp_0.set_wxm5ur$(Matrix3$Companion_getInstance().M22, 1.0);
    Matrix3$Companion_getInstance().mul_0(this.values, Matrix3$Companion_getInstance().tmp_0);
    return this;
  };
  Matrix3.prototype.getTranslation_9wm29l$ = function (out) {
    out.x = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02);
    out.y = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12);
    return out;
  };
  Matrix3.prototype.getScale_9wm29l$ = function (out) {
    out.x = Math.sqrt(this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) + this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01));
    out.y = Math.sqrt(this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10) + this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11));
    return out;
  };
  Matrix3.prototype.getRotation = function () {
    return MathUtils_getInstance().atan2_dleff0$(this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10), this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00));
  };
  Matrix3.prototype.scl_mx4ult$ = function (scale) {
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * scale);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * scale);
    return this;
  };
  Matrix3.prototype.scl_dleff0$ = function (scaleX, scaleY) {
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * scaleX);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * scaleY);
    return this;
  };
  Matrix3.prototype.scl_1fv330$ = function (scale) {
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * scale.x);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * scale.y);
    return this;
  };
  Matrix3.prototype.scl_1fv2cb$ = function (scale) {
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M00, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M00) * scale.x);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M11, this.values.get_za3lpa$(Matrix3$Companion_getInstance().M11) * scale.y);
    return this;
  };
  Matrix3.prototype.transpose = function () {
    var v01 = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M10);
    var v02 = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M20);
    var v10 = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M01);
    var v12 = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M21);
    var v20 = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M02);
    var v21 = this.values.get_za3lpa$(Matrix3$Companion_getInstance().M12);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M01, v01);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M02, v02);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M10, v10);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M12, v12);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M20, v20);
    this.values.set_wxm5ur$(Matrix3$Companion_getInstance().M21, v21);
    return this;
  };
  function Matrix3$Companion() {
    Matrix3$Companion_instance = this;
    this.tmp_0 = arrayListOf([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
    this.IDENTITY = new Matrix3();
    this.M00 = 0;
    this.M01 = 3;
    this.M02 = 6;
    this.M10 = 1;
    this.M11 = 4;
    this.M12 = 7;
    this.M20 = 2;
    this.M21 = 5;
    this.M22 = 8;
  }
  Matrix3$Companion.prototype.mul_0 = function (matA, matB) {
    var v00 = matA.get_za3lpa$(0) * matB.get_za3lpa$(0) + matA.get_za3lpa$(3) * matB.get_za3lpa$(1) + matA.get_za3lpa$(6) * matB.get_za3lpa$(2);
    var v01 = matA.get_za3lpa$(0) * matB.get_za3lpa$(3) + matA.get_za3lpa$(3) * matB.get_za3lpa$(4) + matA.get_za3lpa$(6) * matB.get_za3lpa$(5);
    var v02 = matA.get_za3lpa$(0) * matB.get_za3lpa$(6) + matA.get_za3lpa$(3) * matB.get_za3lpa$(7) + matA.get_za3lpa$(6) * matB.get_za3lpa$(8);
    var v10 = matA.get_za3lpa$(1) * matB.get_za3lpa$(0) + matA.get_za3lpa$(4) * matB.get_za3lpa$(1) + matA.get_za3lpa$(7) * matB.get_za3lpa$(2);
    var v11 = matA.get_za3lpa$(1) * matB.get_za3lpa$(3) + matA.get_za3lpa$(4) * matB.get_za3lpa$(4) + matA.get_za3lpa$(7) * matB.get_za3lpa$(5);
    var v12 = matA.get_za3lpa$(1) * matB.get_za3lpa$(6) + matA.get_za3lpa$(4) * matB.get_za3lpa$(7) + matA.get_za3lpa$(7) * matB.get_za3lpa$(8);
    var v20 = matA.get_za3lpa$(2) * matB.get_za3lpa$(0) + matA.get_za3lpa$(5) * matB.get_za3lpa$(1) + matA.get_za3lpa$(8) * matB.get_za3lpa$(2);
    var v21 = matA.get_za3lpa$(2) * matB.get_za3lpa$(3) + matA.get_za3lpa$(5) * matB.get_za3lpa$(4) + matA.get_za3lpa$(8) * matB.get_za3lpa$(5);
    var v22 = matA.get_za3lpa$(2) * matB.get_za3lpa$(6) + matA.get_za3lpa$(5) * matB.get_za3lpa$(7) + matA.get_za3lpa$(8) * matB.get_za3lpa$(8);
    matA.set_wxm5ur$(0, v00);
    matA.set_wxm5ur$(1, v10);
    matA.set_wxm5ur$(2, v20);
    matA.set_wxm5ur$(3, v01);
    matA.set_wxm5ur$(4, v11);
    matA.set_wxm5ur$(5, v21);
    matA.set_wxm5ur$(6, v02);
    matA.set_wxm5ur$(7, v12);
    matA.set_wxm5ur$(8, v22);
  };
  Matrix3$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Matrix3$Companion_instance = null;
  function Matrix3$Companion_getInstance() {
    if (Matrix3$Companion_instance === null) {
      new Matrix3$Companion();
    }
    return Matrix3$Companion_instance;
  }
  Matrix3.$metadata$ = {kind: Kind_CLASS, simpleName: 'Matrix3', interfaces: [Matrix3Ro]};
  Matrix3.prototype.component1 = function () {
    return this.values;
  };
  Matrix3.prototype.copy_yn39w1$ = function (values) {
    return new Matrix3(values === void 0 ? this.values : values);
  };
  Matrix3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  Matrix3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.values, other.values))));
  };
  function Matrix4Ro() {
  }
  Matrix4Ro.prototype.getRotation_tt8t29$ = function (out, normalizeAxes, callback$default) {
    if (normalizeAxes === void 0)
      normalizeAxes = false;
    return callback$default ? callback$default(out, normalizeAxes) : this.getRotation_tt8t29$$default(out, normalizeAxes);
  };
  Matrix4Ro.prototype.copy = function () {
    return new Matrix4(copy(this.values));
  };
  Matrix4Ro.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Matrix4Ro', interfaces: []};
  function Matrix4(values) {
    Matrix4$Companion_getInstance();
    if (values === void 0)
      values = arrayListOf([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.values_rzlvt7$_0 = values;
  }
  Object.defineProperty(Matrix4.prototype, 'values', {get: function () {
    return this.values_rzlvt7$_0;
  }});
  Matrix4.prototype.set_pekf88$ = function (matrix) {
    return this.set_hcyabg$(matrix.values);
  };
  Matrix4.prototype.set_hcyabg$ = function (values) {
    var tmp$;
    tmp$ = 16 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.values.set_wxm5ur$(i, values.get_za3lpa$(i));
    }
    return this;
  };
  Matrix4.prototype.set_qe7e4j$ = function (quaternion) {
    return this.set_7b5o5w$(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  };
  Matrix4.prototype.set_7b5o5w$ = function (quaternionX, quaternionY, quaternionZ, quaternionW) {
    return this.set_b3rrsf$(0.0, 0.0, 0.0, quaternionX, quaternionY, quaternionZ, quaternionW);
  };
  Matrix4.prototype.set_tq1sxw$ = function (position, orientation) {
    return this.set_b3rrsf$(position.x, position.y, position.z, orientation.x, orientation.y, orientation.z, orientation.w);
  };
  Matrix4.prototype.set_b3rrsf$ = function (translationX, translationY, translationZ, quaternionX, quaternionY, quaternionZ, quaternionW) {
    var xs = quaternionX * 2.0;
    var ys = quaternionY * 2.0;
    var zs = quaternionZ * 2.0;
    var wx = quaternionW * xs;
    var wy = quaternionW * ys;
    var wz = quaternionW * zs;
    var xx = quaternionX * xs;
    var xy = quaternionX * ys;
    var xz = quaternionX * zs;
    var yy = quaternionY * ys;
    var yz = quaternionY * zs;
    var zz = quaternionZ * zs;
    this.values.set_wxm5ur$(0, 1.0 - (yy + zz));
    this.values.set_wxm5ur$(4, xy - wz);
    this.values.set_wxm5ur$(8, xz + wy);
    this.values.set_wxm5ur$(12, translationX);
    this.values.set_wxm5ur$(1, xy + wz);
    this.values.set_wxm5ur$(5, 1.0 - (xx + zz));
    this.values.set_wxm5ur$(9, yz - wx);
    this.values.set_wxm5ur$(13, translationY);
    this.values.set_wxm5ur$(2, xz - wy);
    this.values.set_wxm5ur$(6, yz + wx);
    this.values.set_wxm5ur$(10, 1.0 - (xx + yy));
    this.values.set_wxm5ur$(14, translationZ);
    this.values.set_wxm5ur$(3, 0.0);
    this.values.set_wxm5ur$(7, 0.0);
    this.values.set_wxm5ur$(11, 0.0);
    this.values.set_wxm5ur$(15, 1.0);
    return this;
  };
  Matrix4.prototype.set_4n9xua$ = function (position, orientation, scale) {
    return this.set_vdf28c$(position.x, position.y, position.z, orientation.x, orientation.y, orientation.z, orientation.w, scale.x, scale.y, scale.z);
  };
  Matrix4.prototype.set_vdf28c$ = function (translationX, translationY, translationZ, quaternionX, quaternionY, quaternionZ, quaternionW, scaleX, scaleY, scaleZ) {
    var xs = quaternionX * 2.0;
    var ys = quaternionY * 2.0;
    var zs = quaternionZ * 2.0;
    var wx = quaternionW * xs;
    var wy = quaternionW * ys;
    var wz = quaternionW * zs;
    var xx = quaternionX * xs;
    var xy = quaternionX * ys;
    var xz = quaternionX * zs;
    var yy = quaternionY * ys;
    var yz = quaternionY * zs;
    var zz = quaternionZ * zs;
    this.values.set_wxm5ur$(0, scaleX * (1.0 - (yy + zz)));
    this.values.set_wxm5ur$(4, scaleY * (xy - wz));
    this.values.set_wxm5ur$(8, scaleZ * (xz + wy));
    this.values.set_wxm5ur$(12, translationX);
    this.values.set_wxm5ur$(1, scaleX * (xy + wz));
    this.values.set_wxm5ur$(5, scaleY * (1.0 - (xx + zz)));
    this.values.set_wxm5ur$(9, scaleZ * (yz - wx));
    this.values.set_wxm5ur$(13, translationY);
    this.values.set_wxm5ur$(2, scaleX * (xz - wy));
    this.values.set_wxm5ur$(6, scaleY * (yz + wx));
    this.values.set_wxm5ur$(10, scaleZ * (1.0 - (xx + yy)));
    this.values.set_wxm5ur$(14, translationZ);
    this.values.set_wxm5ur$(3, 0.0);
    this.values.set_wxm5ur$(7, 0.0);
    this.values.set_wxm5ur$(11, 0.0);
    this.values.set_wxm5ur$(15, 1.0);
    return this;
  };
  Matrix4.prototype.set_hcpy8k$ = function (xAxis, yAxis, zAxis, pos) {
    this.values.set_wxm5ur$(0, xAxis.x);
    this.values.set_wxm5ur$(4, xAxis.y);
    this.values.set_wxm5ur$(8, xAxis.z);
    this.values.set_wxm5ur$(1, yAxis.x);
    this.values.set_wxm5ur$(5, yAxis.y);
    this.values.set_wxm5ur$(9, yAxis.z);
    this.values.set_wxm5ur$(2, zAxis.x);
    this.values.set_wxm5ur$(6, zAxis.y);
    this.values.set_wxm5ur$(10, zAxis.z);
    this.values.set_wxm5ur$(12, pos.x);
    this.values.set_wxm5ur$(13, pos.y);
    this.values.set_wxm5ur$(14, pos.z);
    this.values.set_wxm5ur$(3, 0.0);
    this.values.set_wxm5ur$(7, 0.0);
    this.values.set_wxm5ur$(11, 0.0);
    this.values.set_wxm5ur$(15, 1.0);
    return this;
  };
  Matrix4.prototype.trn_1fv2cb$ = function (vector) {
    this.values.set_wxm5ur$(12, this.values.get_za3lpa$(12) + vector.x);
    this.values.set_wxm5ur$(13, this.values.get_za3lpa$(13) + vector.y);
    this.values.set_wxm5ur$(14, this.values.get_za3lpa$(14) + vector.z);
    return this;
  };
  Matrix4.prototype.trn_y2kzbl$ = function (x, y, z) {
    this.values.set_wxm5ur$(12, this.values.get_za3lpa$(12) + x);
    this.values.set_wxm5ur$(13, this.values.get_za3lpa$(13) + y);
    this.values.set_wxm5ur$(14, this.values.get_za3lpa$(14) + z);
    return this;
  };
  Matrix4.prototype.mul_pekf88$ = function (matrix) {
    Matrix4$Companion_getInstance().mul_0(this.values, matrix.values);
    return this;
  };
  Matrix4.prototype.mulLeft_pekf88$ = function (matrix) {
    Matrix4$Companion_getInstance().tmpMat_0.set_pekf88$(matrix);
    Matrix4$Companion_getInstance().mul_0(Matrix4$Companion_getInstance().tmpMat_0.values, this.values);
    return this.set_pekf88$(Matrix4$Companion_getInstance().tmpMat_0);
  };
  Matrix4.prototype.tra = function () {
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(0, this.values.get_za3lpa$(0));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(4, this.values.get_za3lpa$(1));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(8, this.values.get_za3lpa$(2));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(12, this.values.get_za3lpa$(3));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(1, this.values.get_za3lpa$(4));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(5, this.values.get_za3lpa$(5));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(9, this.values.get_za3lpa$(6));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(13, this.values.get_za3lpa$(7));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(2, this.values.get_za3lpa$(8));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(6, this.values.get_za3lpa$(9));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(10, this.values.get_za3lpa$(10));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(14, this.values.get_za3lpa$(11));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(3, this.values.get_za3lpa$(12));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(7, this.values.get_za3lpa$(13));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(11, this.values.get_za3lpa$(14));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(15, this.values.get_za3lpa$(15));
    return this.set_hcyabg$(Matrix4$Companion_getInstance().tmp_0);
  };
  Matrix4.prototype.idt = function () {
    this.values.set_wxm5ur$(0, 1.0);
    this.values.set_wxm5ur$(4, 0.0);
    this.values.set_wxm5ur$(8, 0.0);
    this.values.set_wxm5ur$(12, 0.0);
    this.values.set_wxm5ur$(1, 0.0);
    this.values.set_wxm5ur$(5, 1.0);
    this.values.set_wxm5ur$(9, 0.0);
    this.values.set_wxm5ur$(13, 0.0);
    this.values.set_wxm5ur$(2, 0.0);
    this.values.set_wxm5ur$(6, 0.0);
    this.values.set_wxm5ur$(10, 1.0);
    this.values.set_wxm5ur$(14, 0.0);
    this.values.set_wxm5ur$(3, 0.0);
    this.values.set_wxm5ur$(7, 0.0);
    this.values.set_wxm5ur$(11, 0.0);
    this.values.set_wxm5ur$(15, 1.0);
    return this;
  };
  Matrix4.prototype.inv = function () {
    var lDet = this.det();
    if (lDet === 0.0)
      throw RuntimeException_init('non-invertible matrix');
    var invDet = 1.0 / lDet;
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(0, this.values.get_za3lpa$(9) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(13) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(13) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(5) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(9) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(5) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(4, this.values.get_za3lpa$(12) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(11) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(11) + this.values.get_za3lpa$(8) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(15) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(8, this.values.get_za3lpa$(8) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(12) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(12, this.values.get_za3lpa$(12) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(6) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(6) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(10) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(10) + this.values.get_za3lpa$(8) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(14) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(14));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(1, this.values.get_za3lpa$(13) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(9) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(13) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(11) + this.values.get_za3lpa$(1) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(11) + this.values.get_za3lpa$(9) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(15) - this.values.get_za3lpa$(1) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(5, this.values.get_za3lpa$(8) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(3) + this.values.get_za3lpa$(12) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(9, this.values.get_za3lpa$(12) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(11) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(11) + this.values.get_za3lpa$(8) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(15) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(13, this.values.get_za3lpa$(8) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(2) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(2) + this.values.get_za3lpa$(12) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(10) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(10) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(14) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(14));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(2, this.values.get_za3lpa$(5) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(13) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(3) + this.values.get_za3lpa$(13) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(1) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(5) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(1) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(6, this.values.get_za3lpa$(12) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(14) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(15) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(10, this.values.get_za3lpa$(4) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(3) + this.values.get_za3lpa$(12) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(15));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(14, this.values.get_za3lpa$(12) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(2) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(2) - this.values.get_za3lpa$(12) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(6) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(13) * this.values.get_za3lpa$(6) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(14) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(14));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(3, this.values.get_za3lpa$(9) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(5) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(9) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(1) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(5) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(1) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(11));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(7, this.values.get_za3lpa$(4) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(3) + this.values.get_za3lpa$(8) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(7) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(2) * this.values.get_za3lpa$(11) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(11));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(11, this.values.get_za3lpa$(8) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(3) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(7) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(11) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(11));
    Matrix4$Companion_getInstance().tmp_0.set_wxm5ur$(15, this.values.get_za3lpa$(4) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(2) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(2) + this.values.get_za3lpa$(8) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(6) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(6) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(10) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(10));
    this.values.set_wxm5ur$(0, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(0) * invDet);
    this.values.set_wxm5ur$(4, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(4) * invDet);
    this.values.set_wxm5ur$(8, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(8) * invDet);
    this.values.set_wxm5ur$(12, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(12) * invDet);
    this.values.set_wxm5ur$(1, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(1) * invDet);
    this.values.set_wxm5ur$(5, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(5) * invDet);
    this.values.set_wxm5ur$(9, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(9) * invDet);
    this.values.set_wxm5ur$(13, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(13) * invDet);
    this.values.set_wxm5ur$(2, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(2) * invDet);
    this.values.set_wxm5ur$(6, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(6) * invDet);
    this.values.set_wxm5ur$(10, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(10) * invDet);
    this.values.set_wxm5ur$(14, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(14) * invDet);
    this.values.set_wxm5ur$(3, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(3) * invDet);
    this.values.set_wxm5ur$(7, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(7) * invDet);
    this.values.set_wxm5ur$(11, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(11) * invDet);
    this.values.set_wxm5ur$(15, Matrix4$Companion_getInstance().tmp_0.get_za3lpa$(15) * invDet);
    return this;
  };
  Matrix4.prototype.det = function () {
    return this.values.get_za3lpa$(3) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(12) - this.values.get_za3lpa$(2) * this.values.get_za3lpa$(7) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(12) - this.values.get_za3lpa$(3) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(12) + this.values.get_za3lpa$(1) * this.values.get_za3lpa$(7) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(12) + this.values.get_za3lpa$(2) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(11) * this.values.get_za3lpa$(12) - this.values.get_za3lpa$(1) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(11) * this.values.get_za3lpa$(12) - this.values.get_za3lpa$(3) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(8) * this.values.get_za3lpa$(13) + this.values.get_za3lpa$(2) * this.values.get_za3lpa$(7) * this.values.get_za3lpa$(8) * this.values.get_za3lpa$(13) + this.values.get_za3lpa$(3) * this.values.get_za3lpa$(4) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(13) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(7) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(13) - this.values.get_za3lpa$(2) * this.values.get_za3lpa$(4) * this.values.get_za3lpa$(11) * this.values.get_za3lpa$(13) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(11) * this.values.get_za3lpa$(13) + this.values.get_za3lpa$(3) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(8) * this.values.get_za3lpa$(14) - this.values.get_za3lpa$(1) * this.values.get_za3lpa$(7) * this.values.get_za3lpa$(8) * this.values.get_za3lpa$(14) - this.values.get_za3lpa$(3) * this.values.get_za3lpa$(4) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(14) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(7) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(14) + this.values.get_za3lpa$(1) * this.values.get_za3lpa$(4) * this.values.get_za3lpa$(11) * this.values.get_za3lpa$(14) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(11) * this.values.get_za3lpa$(14) - this.values.get_za3lpa$(2) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(8) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(1) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(8) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(2) * this.values.get_za3lpa$(4) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(15) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(6) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(15) - this.values.get_za3lpa$(1) * this.values.get_za3lpa$(4) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(15) + this.values.get_za3lpa$(0) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(10) * this.values.get_za3lpa$(15);
  };
  Matrix4.prototype.det3x3 = function () {
    return this.values.get_za3lpa$(0) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(10) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(2) + this.values.get_za3lpa$(8) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(6) - this.values.get_za3lpa$(0) * this.values.get_za3lpa$(9) * this.values.get_za3lpa$(6) - this.values.get_za3lpa$(4) * this.values.get_za3lpa$(1) * this.values.get_za3lpa$(10) - this.values.get_za3lpa$(8) * this.values.get_za3lpa$(5) * this.values.get_za3lpa$(2);
  };
  Matrix4.prototype.setTranslation_1fv2cb$ = function (vector) {
    this.values.set_wxm5ur$(12, vector.x);
    this.values.set_wxm5ur$(13, vector.y);
    this.values.set_wxm5ur$(14, vector.z);
    return this;
  };
  Matrix4.prototype.setTranslation_y2kzbl$ = function (x, y, z) {
    this.values.set_wxm5ur$(12, x);
    this.values.set_wxm5ur$(13, y);
    this.values.set_wxm5ur$(14, z);
    return this;
  };
  Matrix4.prototype.setFromEulerAnglesRad_y2kzbl$ = function (yaw, pitch, roll) {
    Matrix4$Companion_getInstance().quat_0.setEulerAnglesRad_y2kzbl$(yaw, pitch, roll);
    return this.set_qe7e4j$(Matrix4$Companion_getInstance().quat_0);
  };
  Matrix4.prototype.setToLookAt_uwler8$ = function (direction, up) {
    Matrix4$Companion_getInstance().l_vez_0.set_1fv2cb$(direction).nor();
    Matrix4$Companion_getInstance().l_vex_0.set_1fv2cb$(direction).nor();
    Matrix4$Companion_getInstance().l_vex_0.crs_1fv2cb$(up).nor();
    Matrix4$Companion_getInstance().l_vey_0.set_1fv2cb$(Matrix4$Companion_getInstance().l_vex_0).crs_1fv2cb$(Matrix4$Companion_getInstance().l_vez_0).nor();
    this.idt();
    this.values.set_wxm5ur$(0, Matrix4$Companion_getInstance().l_vex_0.x);
    this.values.set_wxm5ur$(4, Matrix4$Companion_getInstance().l_vex_0.y);
    this.values.set_wxm5ur$(8, Matrix4$Companion_getInstance().l_vex_0.z);
    this.values.set_wxm5ur$(1, Matrix4$Companion_getInstance().l_vey_0.x);
    this.values.set_wxm5ur$(5, Matrix4$Companion_getInstance().l_vey_0.y);
    this.values.set_wxm5ur$(9, Matrix4$Companion_getInstance().l_vey_0.z);
    this.values.set_wxm5ur$(2, -Matrix4$Companion_getInstance().l_vez_0.x);
    this.values.set_wxm5ur$(6, -Matrix4$Companion_getInstance().l_vez_0.y);
    this.values.set_wxm5ur$(10, -Matrix4$Companion_getInstance().l_vez_0.z);
    return this;
  };
  Matrix4.prototype.setToLookAt_qeea63$ = function (position, target, up) {
    Matrix4$Companion_getInstance().tmpVec_0.set_1fv2cb$(target).sub_1fv2cb$(position);
    this.setToLookAt_uwler8$(Matrix4$Companion_getInstance().tmpVec_0, up);
    this.translate_y2kzbl$(-position.x, -position.y, -position.z);
    return this;
  };
  Matrix4.prototype.setToGlobal_qeea63$ = function (position, forward, up) {
    Matrix4$Companion_getInstance().tmpForward_0.set_1fv2cb$(forward).nor();
    Matrix4$Companion_getInstance().right_0.set_1fv2cb$(Matrix4$Companion_getInstance().tmpForward_0).crs_1fv2cb$(up).nor();
    Matrix4$Companion_getInstance().tmpUp_0.set_1fv2cb$(Matrix4$Companion_getInstance().right_0).crs_1fv2cb$(Matrix4$Companion_getInstance().tmpForward_0).nor();
    this.set_hcpy8k$(Matrix4$Companion_getInstance().right_0, Matrix4$Companion_getInstance().tmpUp_0, Matrix4$Companion_getInstance().tmpForward_0.scl_mx4ult$(-1.0), position);
    return this;
  };
  Matrix4.prototype.toString = function () {
    return '[' + toString(this.values.get_za3lpa$(0)) + '|' + toString(this.values.get_za3lpa$(4)) + '|' + toString(this.values.get_za3lpa$(8)) + '|' + toString(this.values.get_za3lpa$(12)) + ']\n' + '[' + toString(this.values.get_za3lpa$(1)) + '|' + toString(this.values.get_za3lpa$(5)) + '|' + toString(this.values.get_za3lpa$(9)) + '|' + toString(this.values.get_za3lpa$(13)) + ']\n' + '[' + toString(this.values.get_za3lpa$(2)) + '|' + toString(this.values.get_za3lpa$(6)) + '|' + toString(this.values.get_za3lpa$(10)) + '|' + toString(this.values.get_za3lpa$(14)) + ']\n' + '[' + toString(this.values.get_za3lpa$(3)) + '|' + toString(this.values.get_za3lpa$(7)) + '|' + toString(this.values.get_za3lpa$(11)) + '|' + toString(this.values.get_za3lpa$(15)) + ']\n';
  };
  Matrix4.prototype.set_pekfyx$ = function (mat) {
    this.values.set_wxm5ur$(0, mat.values.get_za3lpa$(0));
    this.values.set_wxm5ur$(1, mat.values.get_za3lpa$(1));
    this.values.set_wxm5ur$(2, mat.values.get_za3lpa$(2));
    this.values.set_wxm5ur$(3, 0.0);
    this.values.set_wxm5ur$(4, mat.values.get_za3lpa$(3));
    this.values.set_wxm5ur$(5, mat.values.get_za3lpa$(4));
    this.values.set_wxm5ur$(6, mat.values.get_za3lpa$(5));
    this.values.set_wxm5ur$(7, 0.0);
    this.values.set_wxm5ur$(8, 0.0);
    this.values.set_wxm5ur$(9, 0.0);
    this.values.set_wxm5ur$(10, 1.0);
    this.values.set_wxm5ur$(11, 0.0);
    this.values.set_wxm5ur$(12, mat.values.get_za3lpa$(6));
    this.values.set_wxm5ur$(13, mat.values.get_za3lpa$(7));
    this.values.set_wxm5ur$(14, 0.0);
    this.values.set_wxm5ur$(15, mat.values.get_za3lpa$(8));
    return this;
  };
  Matrix4.prototype.scl_1fv2cb$ = function (scale) {
    this.values.set_wxm5ur$(0, this.values.get_za3lpa$(0) * scale.x);
    this.values.set_wxm5ur$(5, this.values.get_za3lpa$(5) * scale.y);
    this.values.set_wxm5ur$(10, this.values.get_za3lpa$(10) * scale.z);
    return this;
  };
  Matrix4.prototype.scl_y2kzbl$ = function (x, y, z) {
    this.values.set_wxm5ur$(0, this.values.get_za3lpa$(0) * x);
    this.values.set_wxm5ur$(5, this.values.get_za3lpa$(5) * y);
    this.values.set_wxm5ur$(10, this.values.get_za3lpa$(10) * z);
    return this;
  };
  Matrix4.prototype.scl_mx4ult$ = function (scale) {
    this.values.set_wxm5ur$(0, this.values.get_za3lpa$(0) * scale);
    this.values.set_wxm5ur$(5, this.values.get_za3lpa$(5) * scale);
    this.values.set_wxm5ur$(10, this.values.get_za3lpa$(10) * scale);
    return this;
  };
  Object.defineProperty(Matrix4.prototype, 'translationX', {get: function () {
    return this.values.get_za3lpa$(12);
  }});
  Object.defineProperty(Matrix4.prototype, 'translationY', {get: function () {
    return this.values.get_za3lpa$(13);
  }});
  Object.defineProperty(Matrix4.prototype, 'translationZ', {get: function () {
    return this.values.get_za3lpa$(14);
  }});
  Matrix4.prototype.getTranslation_9wm29k$ = function (out) {
    out.x = this.values.get_za3lpa$(12);
    out.y = this.values.get_za3lpa$(13);
    out.z = this.values.get_za3lpa$(14);
    return out;
  };
  Matrix4.prototype.getRotation_tt8t29$$default = function (out, normalizeAxes) {
    return out.setFromMatrix_e7v9es$(this, normalizeAxes);
  };
  Matrix4.prototype.getScaleXSquared = function () {
    return this.values.get_za3lpa$(0) * this.values.get_za3lpa$(0) + this.values.get_za3lpa$(4) * this.values.get_za3lpa$(4) + this.values.get_za3lpa$(8) * this.values.get_za3lpa$(8);
  };
  Matrix4.prototype.getScaleYSquared = function () {
    return this.values.get_za3lpa$(1) * this.values.get_za3lpa$(1) + this.values.get_za3lpa$(5) * this.values.get_za3lpa$(5) + this.values.get_za3lpa$(9) * this.values.get_za3lpa$(9);
  };
  Matrix4.prototype.getScaleZSquared = function () {
    return this.values.get_za3lpa$(2) * this.values.get_za3lpa$(2) + this.values.get_za3lpa$(6) * this.values.get_za3lpa$(6) + this.values.get_za3lpa$(10) * this.values.get_za3lpa$(10);
  };
  Matrix4.prototype.getScaleX = function () {
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(this.values.get_za3lpa$(4)) && MathUtils_getInstance().isZero_dleff0$(this.values.get_za3lpa$(8))) {
      var value = this.values.get_za3lpa$(0);
      tmp$ = value < 0.0 ? -value : value;
    }
     else {
      tmp$ = Math_0.sqrt(this.getScaleXSquared());
    }
    return tmp$;
  };
  Matrix4.prototype.getScaleY = function () {
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(this.values.get_za3lpa$(1)) && MathUtils_getInstance().isZero_dleff0$(this.values.get_za3lpa$(9))) {
      var value = this.values.get_za3lpa$(5);
      tmp$ = value < 0.0 ? -value : value;
    }
     else {
      tmp$ = Math_0.sqrt(this.getScaleYSquared());
    }
    return tmp$;
  };
  Matrix4.prototype.getScaleZ = function () {
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(this.values.get_za3lpa$(2)) && MathUtils_getInstance().isZero_dleff0$(this.values.get_za3lpa$(6))) {
      var value = this.values.get_za3lpa$(10);
      tmp$ = value < 0.0 ? -value : value;
    }
     else {
      tmp$ = Math_0.sqrt(this.getScaleZSquared());
    }
    return tmp$;
  };
  Matrix4.prototype.getScale_9wm29k$ = function (scale) {
    return scale.set_y2kzbl$(this.getScaleX(), this.getScaleY(), this.getScaleZ());
  };
  Matrix4.prototype.toNormalMatrix = function () {
    this.values.set_wxm5ur$(12, 0.0);
    this.values.set_wxm5ur$(13, 0.0);
    this.values.set_wxm5ur$(14, 0.0);
    return this.inv().tra();
  };
  Matrix4.prototype.translate_1fv2cb$ = function (translation) {
    return this.translate_y2kzbl$(translation.x, translation.y, translation.z);
  };
  Matrix4.prototype.translate_y2kzbl$ = function (x, y, z) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    var matA = this.values;
    var v03 = matA.get_za3lpa$(0) * x + matA.get_za3lpa$(4) * y + matA.get_za3lpa$(8) * z + matA.get_za3lpa$(12);
    var v13 = matA.get_za3lpa$(1) * x + matA.get_za3lpa$(5) * y + matA.get_za3lpa$(9) * z + matA.get_za3lpa$(13);
    var v23 = matA.get_za3lpa$(2) * x + matA.get_za3lpa$(6) * y + matA.get_za3lpa$(10) * z + matA.get_za3lpa$(14);
    var v33 = matA.get_za3lpa$(3) * x + matA.get_za3lpa$(7) * y + matA.get_za3lpa$(11) * z + matA.get_za3lpa$(15);
    matA.set_wxm5ur$(12, v03);
    matA.set_wxm5ur$(13, v13);
    matA.set_wxm5ur$(14, v23);
    matA.set_wxm5ur$(15, v33);
    return this;
  };
  Matrix4.prototype.rotate_pz1gqy$ = function (axis, radians) {
    if (radians === 0.0)
      return this;
    Matrix4$Companion_getInstance().quat_0.setFromAxis_pz1gqy$(axis, radians);
    return this.rotate_qe7e4j$(Matrix4$Companion_getInstance().quat_0);
  };
  Matrix4.prototype.rotate_7b5o5w$ = function (axisX, axisY, axisZ, radians) {
    if (radians === 0.0)
      return this;
    Matrix4$Companion_getInstance().quat_0.setFromAxis_7b5o5w$(axisX, axisY, axisZ, radians);
    return this.rotate_qe7e4j$(Matrix4$Companion_getInstance().quat_0);
  };
  Matrix4.prototype.rotate_qe7e4j$ = function (rotation) {
    Matrix4$Companion_getInstance().tmpMat_0.set_qe7e4j$(rotation);
    Matrix4$Companion_getInstance().mul_0(this.values, Matrix4$Companion_getInstance().tmpMat_0.values);
    return this;
  };
  Matrix4.prototype.rotate_uwler8$ = function (v1, v2) {
    return this.rotate_qe7e4j$(Matrix4$Companion_getInstance().quat_0.setFromCross_uwler8$(v1, v2));
  };
  Matrix4.prototype.scale_1fv2cb$ = function (scale) {
    return this.scale_y2kzbl$(scale.x, scale.y, scale.z);
  };
  Matrix4.prototype.scale_y2kzbl$ = function (scaleX, scaleY, scaleZ) {
    if (scaleX === 1.0 && scaleY === 1.0 && scaleZ === 1.0)
      return this;
    Matrix4$Companion_getInstance().tmpMat_0.idt();
    Matrix4$Companion_getInstance().tmpMat_0.scl_y2kzbl$(scaleX, scaleY, scaleZ);
    return this.mul_pekf88$(Matrix4$Companion_getInstance().tmpMat_0);
  };
  Matrix4.prototype.extract4x3Matrix_yn39w1$ = function (out) {
    out.set_wxm5ur$(0, this.values.get_za3lpa$(0));
    out.set_wxm5ur$(1, this.values.get_za3lpa$(1));
    out.set_wxm5ur$(2, this.values.get_za3lpa$(2));
    out.set_wxm5ur$(3, this.values.get_za3lpa$(4));
    out.set_wxm5ur$(4, this.values.get_za3lpa$(5));
    out.set_wxm5ur$(5, this.values.get_za3lpa$(6));
    out.set_wxm5ur$(6, this.values.get_za3lpa$(8));
    out.set_wxm5ur$(7, this.values.get_za3lpa$(9));
    out.set_wxm5ur$(8, this.values.get_za3lpa$(10));
    out.set_wxm5ur$(9, this.values.get_za3lpa$(12));
    out.set_wxm5ur$(10, this.values.get_za3lpa$(13));
    out.set_wxm5ur$(11, this.values.get_za3lpa$(14));
    return out;
  };
  Matrix4.prototype.prj_9wm29k$ = function (vec) {
    var mat = this.values;
    var inv_w = 1.0 / (vec.x * mat.get_za3lpa$(3) + vec.y * mat.get_za3lpa$(7) + vec.z * mat.get_za3lpa$(11) + mat.get_za3lpa$(15));
    var x = (vec.x * mat.get_za3lpa$(0) + vec.y * mat.get_za3lpa$(4) + vec.z * mat.get_za3lpa$(8) + mat.get_za3lpa$(12)) * inv_w;
    var y = (vec.x * mat.get_za3lpa$(1) + vec.y * mat.get_za3lpa$(5) + vec.z * mat.get_za3lpa$(9) + mat.get_za3lpa$(13)) * inv_w;
    var z = (vec.x * mat.get_za3lpa$(2) + vec.y * mat.get_za3lpa$(6) + vec.z * mat.get_za3lpa$(10) + mat.get_za3lpa$(14)) * inv_w;
    vec.x = x;
    vec.y = y;
    vec.z = z;
    return vec;
  };
  Matrix4.prototype.prj_9wm29l$ = function (vec) {
    var mat = this.values;
    var inv_w = 1.0 / (vec.x * mat.get_za3lpa$(3) + vec.y * mat.get_za3lpa$(7) + mat.get_za3lpa$(15));
    var x = (vec.x * mat.get_za3lpa$(0) + vec.y * mat.get_za3lpa$(4) + mat.get_za3lpa$(12)) * inv_w;
    var y = (vec.x * mat.get_za3lpa$(1) + vec.y * mat.get_za3lpa$(5) + mat.get_za3lpa$(13)) * inv_w;
    vec.x = x;
    vec.y = y;
    return vec;
  };
  Matrix4.prototype.rot_9wm29k$ = function (vec) {
    var mat = this.values;
    var x = vec.x * mat.get_za3lpa$(0) + vec.y * mat.get_za3lpa$(4) + vec.z * mat.get_za3lpa$(8);
    var y = vec.x * mat.get_za3lpa$(1) + vec.y * mat.get_za3lpa$(5) + vec.z * mat.get_za3lpa$(9);
    var z = vec.x * mat.get_za3lpa$(2) + vec.y * mat.get_za3lpa$(6) + vec.z * mat.get_za3lpa$(10);
    vec.x = x;
    vec.y = y;
    vec.z = z;
    return vec;
  };
  Matrix4.prototype.rot_9wm29l$ = function (vec) {
    var mat = this.values;
    var x = vec.x * mat.get_za3lpa$(0) + vec.y * mat.get_za3lpa$(4);
    var y = vec.x * mat.get_za3lpa$(1) + vec.y * mat.get_za3lpa$(5);
    vec.x = x;
    vec.y = y;
    return vec;
  };
  function Matrix4$Companion() {
    Matrix4$Companion_instance = this;
    var tmp$;
    var a = ArrayList_init(16);
    tmp$ = 16 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      a.add_11rb$(0.0);
    }
    this.tmp_0 = a;
    this.M00 = 0;
    this.M01 = 4;
    this.M02 = 8;
    this.M03 = 12;
    this.M10 = 1;
    this.M11 = 5;
    this.M12 = 9;
    this.M13 = 13;
    this.M20 = 2;
    this.M21 = 6;
    this.M22 = 10;
    this.M23 = 14;
    this.M30 = 3;
    this.M31 = 7;
    this.M32 = 11;
    this.M33 = 15;
    this.IDENTITY = new Matrix4();
    this.quat_0 = new Quaternion();
    this.l_vez_0 = new Vector3();
    this.l_vex_0 = new Vector3();
    this.l_vey_0 = new Vector3();
    this.tmpVec_0 = new Vector3();
    this.tmpMat_0 = new Matrix4();
    this.right_0 = new Vector3();
    this.tmpForward_0 = new Vector3();
    this.tmpUp_0 = new Vector3();
  }
  Matrix4$Companion.prototype.mul_0 = function (matA, matB) {
    var v00 = matA.get_za3lpa$(0) * matB.get_za3lpa$(0) + matA.get_za3lpa$(4) * matB.get_za3lpa$(1) + matA.get_za3lpa$(8) * matB.get_za3lpa$(2) + matA.get_za3lpa$(12) * matB.get_za3lpa$(3);
    var v01 = matA.get_za3lpa$(0) * matB.get_za3lpa$(4) + matA.get_za3lpa$(4) * matB.get_za3lpa$(5) + matA.get_za3lpa$(8) * matB.get_za3lpa$(6) + matA.get_za3lpa$(12) * matB.get_za3lpa$(7);
    var v02 = matA.get_za3lpa$(0) * matB.get_za3lpa$(8) + matA.get_za3lpa$(4) * matB.get_za3lpa$(9) + matA.get_za3lpa$(8) * matB.get_za3lpa$(10) + matA.get_za3lpa$(12) * matB.get_za3lpa$(11);
    var v03 = matA.get_za3lpa$(0) * matB.get_za3lpa$(12) + matA.get_za3lpa$(4) * matB.get_za3lpa$(13) + matA.get_za3lpa$(8) * matB.get_za3lpa$(14) + matA.get_za3lpa$(12) * matB.get_za3lpa$(15);
    var v10 = matA.get_za3lpa$(1) * matB.get_za3lpa$(0) + matA.get_za3lpa$(5) * matB.get_za3lpa$(1) + matA.get_za3lpa$(9) * matB.get_za3lpa$(2) + matA.get_za3lpa$(13) * matB.get_za3lpa$(3);
    var v11 = matA.get_za3lpa$(1) * matB.get_za3lpa$(4) + matA.get_za3lpa$(5) * matB.get_za3lpa$(5) + matA.get_za3lpa$(9) * matB.get_za3lpa$(6) + matA.get_za3lpa$(13) * matB.get_za3lpa$(7);
    var v12 = matA.get_za3lpa$(1) * matB.get_za3lpa$(8) + matA.get_za3lpa$(5) * matB.get_za3lpa$(9) + matA.get_za3lpa$(9) * matB.get_za3lpa$(10) + matA.get_za3lpa$(13) * matB.get_za3lpa$(11);
    var v13 = matA.get_za3lpa$(1) * matB.get_za3lpa$(12) + matA.get_za3lpa$(5) * matB.get_za3lpa$(13) + matA.get_za3lpa$(9) * matB.get_za3lpa$(14) + matA.get_za3lpa$(13) * matB.get_za3lpa$(15);
    var v20 = matA.get_za3lpa$(2) * matB.get_za3lpa$(0) + matA.get_za3lpa$(6) * matB.get_za3lpa$(1) + matA.get_za3lpa$(10) * matB.get_za3lpa$(2) + matA.get_za3lpa$(14) * matB.get_za3lpa$(3);
    var v21 = matA.get_za3lpa$(2) * matB.get_za3lpa$(4) + matA.get_za3lpa$(6) * matB.get_za3lpa$(5) + matA.get_za3lpa$(10) * matB.get_za3lpa$(6) + matA.get_za3lpa$(14) * matB.get_za3lpa$(7);
    var v22 = matA.get_za3lpa$(2) * matB.get_za3lpa$(8) + matA.get_za3lpa$(6) * matB.get_za3lpa$(9) + matA.get_za3lpa$(10) * matB.get_za3lpa$(10) + matA.get_za3lpa$(14) * matB.get_za3lpa$(11);
    var v23 = matA.get_za3lpa$(2) * matB.get_za3lpa$(12) + matA.get_za3lpa$(6) * matB.get_za3lpa$(13) + matA.get_za3lpa$(10) * matB.get_za3lpa$(14) + matA.get_za3lpa$(14) * matB.get_za3lpa$(15);
    var v30 = matA.get_za3lpa$(3) * matB.get_za3lpa$(0) + matA.get_za3lpa$(7) * matB.get_za3lpa$(1) + matA.get_za3lpa$(11) * matB.get_za3lpa$(2) + matA.get_za3lpa$(15) * matB.get_za3lpa$(3);
    var v31 = matA.get_za3lpa$(3) * matB.get_za3lpa$(4) + matA.get_za3lpa$(7) * matB.get_za3lpa$(5) + matA.get_za3lpa$(11) * matB.get_za3lpa$(6) + matA.get_za3lpa$(15) * matB.get_za3lpa$(7);
    var v32 = matA.get_za3lpa$(3) * matB.get_za3lpa$(8) + matA.get_za3lpa$(7) * matB.get_za3lpa$(9) + matA.get_za3lpa$(11) * matB.get_za3lpa$(10) + matA.get_za3lpa$(15) * matB.get_za3lpa$(11);
    var v33 = matA.get_za3lpa$(3) * matB.get_za3lpa$(12) + matA.get_za3lpa$(7) * matB.get_za3lpa$(13) + matA.get_za3lpa$(11) * matB.get_za3lpa$(14) + matA.get_za3lpa$(15) * matB.get_za3lpa$(15);
    matA.set_wxm5ur$(0, v00);
    matA.set_wxm5ur$(4, v01);
    matA.set_wxm5ur$(8, v02);
    matA.set_wxm5ur$(12, v03);
    matA.set_wxm5ur$(1, v10);
    matA.set_wxm5ur$(5, v11);
    matA.set_wxm5ur$(9, v12);
    matA.set_wxm5ur$(13, v13);
    matA.set_wxm5ur$(2, v20);
    matA.set_wxm5ur$(6, v21);
    matA.set_wxm5ur$(10, v22);
    matA.set_wxm5ur$(14, v23);
    matA.set_wxm5ur$(3, v30);
    matA.set_wxm5ur$(7, v31);
    matA.set_wxm5ur$(11, v32);
    matA.set_wxm5ur$(15, v33);
  };
  Matrix4$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Matrix4$Companion_instance = null;
  function Matrix4$Companion_getInstance() {
    if (Matrix4$Companion_instance === null) {
      new Matrix4$Companion();
    }
    return Matrix4$Companion_instance;
  }
  Matrix4.prototype.shearZ_dleff0$ = function (shearXZ, shearYZ) {
    if (shearXZ === void 0)
      shearXZ = 0.0;
    if (shearYZ === void 0)
      shearYZ = 0.0;
    var tmp0 = this.values.get_za3lpa$(0) + shearYZ * this.values.get_za3lpa$(4);
    var tmp1 = this.values.get_za3lpa$(4) + shearXZ * this.values.get_za3lpa$(0);
    this.values.set_wxm5ur$(0, tmp0);
    this.values.set_wxm5ur$(4, tmp1);
    tmp0 = this.values.get_za3lpa$(1) + shearYZ * this.values.get_za3lpa$(5);
    tmp1 = this.values.get_za3lpa$(5) + shearXZ * this.values.get_za3lpa$(1);
    this.values.set_wxm5ur$(1, tmp0);
    this.values.set_wxm5ur$(5, tmp1);
    return this;
  };
  Matrix4.$metadata$ = {kind: Kind_CLASS, simpleName: 'Matrix4', interfaces: [Matrix4Ro]};
  Matrix4.prototype.component1 = function () {
    return this.values;
  };
  Matrix4.prototype.copy_yn39w1$ = function (values) {
    return new Matrix4(values === void 0 ? this.values : values);
  };
  Matrix4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  Matrix4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.values, other.values))));
  };
  function MinMaxRo() {
    MinMaxRo$Companion_getInstance();
  }
  MinMaxRo.prototype.isEmpty = function () {
    return this.xMax <= this.xMin || this.yMax <= this.yMin;
  };
  MinMaxRo.prototype.isNotEmpty = function () {
    return !this.isEmpty();
  };
  MinMaxRo.prototype.intersects_5yfmeh$ = function (other) {
    return this.xMax > other.xMin && this.yMax > other.yMin && this.xMin < other.xMax && this.yMin < other.yMax;
  };
  MinMaxRo.prototype.contains_dleff0$ = function (x, y) {
    return x > this.xMin && y > this.yMin && x < this.xMax && y < this.yMax;
  };
  MinMaxRo.prototype.clampPoint_9wm29l$ = function (value) {
    if (value.x < this.xMin)
      value.x = this.xMin;
    if (value.y < this.yMin)
      value.y = this.yMin;
    if (value.x > this.xMax)
      value.x = this.xMax;
    if (value.y > this.yMax)
      value.y = this.yMax;
    return value;
  };
  function MinMaxRo$Companion() {
    MinMaxRo$Companion_instance = this;
    this.NEGATIVE_INFINITY = new MinMax();
    this.POSITIVE_INFINITY = new MinMax(kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY, kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY, kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY, kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY);
  }
  MinMaxRo$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var MinMaxRo$Companion_instance = null;
  function MinMaxRo$Companion_getInstance() {
    if (MinMaxRo$Companion_instance === null) {
      new MinMaxRo$Companion();
    }
    return MinMaxRo$Companion_instance;
  }
  MinMaxRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MinMaxRo', interfaces: []};
  function MinMax(xMin, yMin, xMax, yMax) {
    if (xMin === void 0)
      xMin = kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY;
    if (yMin === void 0)
      yMin = kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY;
    if (xMax === void 0)
      xMax = kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
    if (yMax === void 0)
      yMax = kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
    this.xMin_k2usb0$_0 = xMin;
    this.yMin_k3ekwd$_0 = yMin;
    this.xMax_k2umm2$_0 = xMax;
    this.yMax_k3ef7f$_0 = yMax;
  }
  Object.defineProperty(MinMax.prototype, 'xMin', {get: function () {
    return this.xMin_k2usb0$_0;
  }, set: function (xMin) {
    this.xMin_k2usb0$_0 = xMin;
  }});
  Object.defineProperty(MinMax.prototype, 'yMin', {get: function () {
    return this.yMin_k3ekwd$_0;
  }, set: function (yMin) {
    this.yMin_k3ekwd$_0 = yMin;
  }});
  Object.defineProperty(MinMax.prototype, 'xMax', {get: function () {
    return this.xMax_k2umm2$_0;
  }, set: function (xMax) {
    this.xMax_k2umm2$_0 = xMax;
  }});
  Object.defineProperty(MinMax.prototype, 'yMax', {get: function () {
    return this.yMax_k3ef7f$_0;
  }, set: function (yMax) {
    this.yMax_k3ef7f$_0 = yMax;
  }});
  MinMax.prototype.inf = function () {
    this.xMin = kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY;
    this.yMin = kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY;
    this.xMax = kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
    this.yMax = kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
  };
  MinMax.prototype.ext_dleff0$ = function (x, y) {
    if (x < this.xMin)
      this.xMin = x;
    if (y < this.yMin)
      this.yMin = y;
    if (x > this.xMax)
      this.xMax = x;
    if (y > this.yMax)
      this.yMax = y;
  };
  MinMax.prototype.scl_dleff0$ = function (x, y) {
    this.xMin = this.xMin * x;
    this.yMin = this.yMin * y;
    this.xMax = this.xMax * x;
    this.yMax = this.yMax * y;
  };
  MinMax.prototype.inflate_7b5o5w$ = function (left, top, right, bottom) {
    this.xMin = this.xMin - left;
    this.yMin = this.yMin - top;
    this.xMax = this.xMax + right;
    this.yMax = this.yMax + bottom;
  };
  Object.defineProperty(MinMax.prototype, 'width', {get: function () {
    return this.xMax - this.xMin;
  }});
  Object.defineProperty(MinMax.prototype, 'height', {get: function () {
    return this.yMax - this.yMin;
  }});
  MinMax.prototype.set_5yfmeh$ = function (other) {
    this.xMin = other.xMin;
    this.yMin = other.yMin;
    this.xMax = other.xMax;
    this.yMax = other.yMax;
    return this;
  };
  MinMax.prototype.set_7b5o5w$ = function (xMin, yMin, xMax, yMax) {
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
    return this;
  };
  MinMax.prototype.intersection_5yfmeh$ = function (other) {
    var a = this.xMin;
    var b = other.xMin;
    this.xMin = Math_0.max(a, b);
    var a_0 = this.yMin;
    var b_0 = other.yMin;
    this.yMin = Math_0.max(a_0, b_0);
    var a_1 = this.xMax;
    var b_1 = other.xMax;
    this.xMax = Math_0.min(a_1, b_1);
    var a_2 = this.yMax;
    var b_2 = other.yMax;
    this.yMax = Math_0.min(a_2, b_2);
  };
  MinMax.prototype.ext_5yfmeh$ = function (other) {
    this.ext_dleff0$(other.xMin, other.yMin);
    this.ext_dleff0$(other.xMax, other.yMax);
  };
  MinMax.$metadata$ = {kind: Kind_CLASS, simpleName: 'MinMax', interfaces: [MinMaxRo]};
  MinMax.prototype.component1 = function () {
    return this.xMin;
  };
  MinMax.prototype.component2 = function () {
    return this.yMin;
  };
  MinMax.prototype.component3 = function () {
    return this.xMax;
  };
  MinMax.prototype.component4 = function () {
    return this.yMax;
  };
  MinMax.prototype.copy_7b5o5w$ = function (xMin, yMin, xMax, yMax) {
    return new MinMax(xMin === void 0 ? this.xMin : xMin, yMin === void 0 ? this.yMin : yMin, xMax === void 0 ? this.xMax : xMax, yMax === void 0 ? this.yMax : yMax);
  };
  MinMax.prototype.toString = function () {
    return 'MinMax(xMin=' + Kotlin.toString(this.xMin) + (', yMin=' + Kotlin.toString(this.yMin)) + (', xMax=' + Kotlin.toString(this.xMax)) + (', yMax=' + Kotlin.toString(this.yMax)) + ')';
  };
  MinMax.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.xMin) | 0;
    result = result * 31 + Kotlin.hashCode(this.yMin) | 0;
    result = result * 31 + Kotlin.hashCode(this.xMax) | 0;
    result = result * 31 + Kotlin.hashCode(this.yMax) | 0;
    return result;
  };
  MinMax.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.xMin, other.xMin) && Kotlin.equals(this.yMin, other.yMin) && Kotlin.equals(this.xMax, other.xMax) && Kotlin.equals(this.yMax, other.yMax)))));
  };
  function PadRo() {
  }
  PadRo.prototype.copy_789ags$$default = function (top, right, bottom, left) {
    return new Pad(top != null ? top : this.top, right != null ? right : this.right, bottom != null ? bottom : this.bottom, left != null ? left : this.left);
  };
  PadRo.prototype.copy_789ags$ = function (top, right, bottom, left, callback$default) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    return callback$default ? callback$default(top, right, bottom, left) : this.copy_789ags$$default(top, right, bottom, left);
  };
  PadRo.prototype.reduceWidth_81sz4$ = function (width) {
    if (width == null)
      return null;
    return width - this.left - this.right;
  };
  PadRo.prototype.reduceHeight_81sz4$ = function (height) {
    if (height == null)
      return null;
    return height - this.top - this.bottom;
  };
  PadRo.prototype.reduceWidth2_mx4ult$ = function (width) {
    return width - this.left - this.right;
  };
  PadRo.prototype.reduceHeight2_mx4ult$ = function (height) {
    return height - this.top - this.bottom;
  };
  PadRo.prototype.expandWidth_81sz4$ = function (width) {
    if (width == null)
      return null;
    return width + this.left + this.right;
  };
  PadRo.prototype.expandHeight_81sz4$ = function (height) {
    if (height == null)
      return null;
    return height + this.top + this.bottom;
  };
  PadRo.prototype.expandWidth2_mx4ult$ = function (width) {
    return width + this.left + this.right;
  };
  PadRo.prototype.expandHeight2_mx4ult$ = function (height) {
    return height + this.top + this.bottom;
  };
  PadRo.prototype.toCssString = function () {
    return this.top.toString() + 'px ' + this.right + 'px ' + this.bottom + 'px ' + this.left + 'px';
  };
  PadRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PadRo', interfaces: []};
  function Pad(top, right, bottom, left) {
    Pad$Companion_getInstance();
    this.top_sx7pe0$_0 = top;
    this.right_ki4k2p$_0 = right;
    this.bottom_mdgxmc$_0 = bottom;
    this.left_qxer80$_0 = left;
  }
  Object.defineProperty(Pad.prototype, 'top', {get: function () {
    return this.top_sx7pe0$_0;
  }, set: function (top) {
    this.top_sx7pe0$_0 = top;
  }});
  Object.defineProperty(Pad.prototype, 'right', {get: function () {
    return this.right_ki4k2p$_0;
  }, set: function (right) {
    this.right_ki4k2p$_0 = right;
  }});
  Object.defineProperty(Pad.prototype, 'bottom', {get: function () {
    return this.bottom_mdgxmc$_0;
  }, set: function (bottom) {
    this.bottom_mdgxmc$_0 = bottom;
  }});
  Object.defineProperty(Pad.prototype, 'left', {get: function () {
    return this.left_qxer80$_0;
  }, set: function (left) {
    this.left_qxer80$_0 = left;
  }});
  Pad.prototype.set_mx4ult$ = function (all) {
    this.top = all;
    this.bottom = all;
    this.right = all;
    this.left = all;
    return this;
  };
  Pad.prototype.set_rw8g7s$ = function (other) {
    this.top = other.top;
    this.bottom = other.bottom;
    this.right = other.right;
    this.left = other.left;
    return this;
  };
  Pad.prototype.set_7b5o5w$ = function (left, top, right, bottom) {
    if (left === void 0)
      left = 0.0;
    if (top === void 0)
      top = 0.0;
    if (right === void 0)
      right = 0.0;
    if (bottom === void 0)
      bottom = 0.0;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    return this;
  };
  Pad.prototype.clear = function () {
    this.top = 0.0;
    this.right = 0.0;
    this.bottom = 0.0;
    this.left = 0.0;
  };
  Pad.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, PadRo))
      return false;
    if (this.top !== other.top)
      return false;
    if (this.right !== other.right)
      return false;
    if (this.bottom !== other.bottom)
      return false;
    if (this.left !== other.left)
      return false;
    return true;
  };
  Pad.prototype.hashCode = function () {
    var result = hashCode(this.top);
    result = (31 * result | 0) + hashCode(this.right) | 0;
    result = (31 * result | 0) + hashCode(this.bottom) | 0;
    result = (31 * result | 0) + hashCode(this.left) | 0;
    return result;
  };
  function Pad$Companion() {
    Pad$Companion_instance = this;
    this.EMPTY_PAD = Pad_init();
  }
  Pad$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Pad$Companion_instance = null;
  function Pad$Companion_getInstance() {
    if (Pad$Companion_instance === null) {
      new Pad$Companion();
    }
    return Pad$Companion_instance;
  }
  Pad.$metadata$ = {kind: Kind_CLASS, simpleName: 'Pad', interfaces: [Clearable, PadRo]};
  function Pad_init($this) {
    $this = $this || Object.create(Pad.prototype);
    Pad.call($this, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function Pad_init_0(all, $this) {
    $this = $this || Object.create(Pad.prototype);
    Pad.call($this, all, all, all, all);
    return $this;
  }
  function PadSerializer() {
    PadSerializer_instance = this;
  }
  var PadSerializer_instance = null;
  function PlaneRo() {
  }
  PlaneRo.prototype.distance_1fv2cb$ = function (vec) {
    return this.normal.dot_1fv2cb$(vec) + this.d;
  };
  PlaneRo.prototype.testPoint_1fv2cb$ = function (point) {
    var dist = this.normal.dot_1fv2cb$(point) + this.d;
    if (dist === 0.0)
      return PlaneSide$ON_PLANE_getInstance();
    else if (dist < 0)
      return PlaneSide$BACK_getInstance();
    else
      return PlaneSide$FRONT_getInstance();
  };
  PlaneRo.prototype.testPoint_y2kzbl$ = function (x, y, z) {
    var dist = this.normal.dot_y2kzbl$(x, y, z) + this.d;
    if (dist === 0.0)
      return PlaneSide$ON_PLANE_getInstance();
    else if (dist < 0)
      return PlaneSide$BACK_getInstance();
    else
      return PlaneSide$FRONT_getInstance();
  };
  PlaneRo.prototype.isFrontFacing_1fv2cb$ = function (direction) {
    var dot = this.normal.dot_1fv2cb$(direction);
    return dot <= 0;
  };
  PlaneRo.prototype.intersects_y8xsj$$default = function (r, out) {
    var m = r.direction.dot_1fv2cb$(this.normal);
    if (m === 0.0)
      return false;
    var t = -(r.origin.dot_1fv2cb$(this.normal) + this.d) / m;
    if (t >= 0) {
      if (out != null)
        out.set_1fv2cb$(r.direction).scl_mx4ult$(t).add_1fv2cb$(r.origin);
      return true;
    }
     else {
      return false;
    }
  };
  PlaneRo.prototype.intersects_y8xsj$ = function (r, out, callback$default) {
    if (out === void 0)
      out = null;
    return callback$default ? callback$default(r, out) : this.intersects_y8xsj$$default(r, out);
  };
  PlaneRo.prototype.prj_9wm29k$ = function (out) {
    var t = this.normal.dot_1fv2cb$(out) + this.d;
    out.set_y2kzbl$(t * -this.normal.x + out.x, t * -this.normal.y + out.y, t * -this.normal.z + out.z);
    return out;
  };
  PlaneRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PlaneRo', interfaces: []};
  function Plane(normal, d) {
    Plane$Companion_getInstance();
    if (normal === void 0)
      normal = new Vector3();
    if (d === void 0)
      d = 0.0;
    this.normal_2smtsp$_0 = normal;
    this.d_n60akw$_0 = d;
  }
  Object.defineProperty(Plane.prototype, 'normal', {get: function () {
    return this.normal_2smtsp$_0;
  }});
  Object.defineProperty(Plane.prototype, 'd', {get: function () {
    return this.d_n60akw$_0;
  }, set: function (d) {
    this.d_n60akw$_0 = d;
  }});
  Plane.prototype.set_qeea63$ = function (point1, point2, point3) {
    this.normal.set_1fv2cb$(point1).sub_1fv2cb$(point2).crs_y2kzbl$(point2.x - point3.x, point2.y - point3.y, point2.z - point3.z).nor();
    this.d = -point1.dot_1fv2cb$(this.normal);
  };
  Plane.prototype.set_7b5o5w$ = function (nx, ny, nz, d) {
    this.normal.set_y2kzbl$(nx, ny, nz);
    this.d = d;
  };
  Plane.prototype.set_e0esfj$ = function (point, normal) {
    this.normal.set_1fv2cb$(normal);
    this.d = -point.dot_1fv2cb$(normal);
  };
  Plane.prototype.set_w8lrqs$ = function (pointX, pointY, pointZ, norX, norY, norZ) {
    this.normal.set_y2kzbl$(norX, norY, norZ);
    this.d = -(pointX * norX + pointY * norY + pointZ * norZ);
  };
  Plane.prototype.set_nns03z$ = function (plane) {
    this.normal.set_1fv2cb$(plane.normal);
    this.d = plane.d;
  };
  Plane.prototype.free = function () {
    Plane$Companion_getInstance().pool_0.free_11rb$(this);
  };
  Plane.prototype.clear = function () {
    this.normal.clear();
    this.d = 0.0;
  };
  function Plane$Companion() {
    Plane$Companion_instance = this;
    this.pool_0 = ClearableObjectPool_init(Plane$Companion$pool$lambda);
  }
  Plane$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  function Plane$Companion$pool$lambda() {
    return new Plane();
  }
  Plane$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Plane$Companion_instance = null;
  function Plane$Companion_getInstance() {
    if (Plane$Companion_instance === null) {
      new Plane$Companion();
    }
    return Plane$Companion_instance;
  }
  Plane.$metadata$ = {kind: Kind_CLASS, simpleName: 'Plane', interfaces: [PlaneRo, Clearable]};
  Plane.prototype.component1 = function () {
    return this.normal;
  };
  Plane.prototype.component2 = function () {
    return this.d;
  };
  Plane.prototype.copy_wscm5v$ = function (normal, d) {
    return new Plane(normal === void 0 ? this.normal : normal, d === void 0 ? this.d : d);
  };
  Plane.prototype.toString = function () {
    return 'Plane(normal=' + Kotlin.toString(this.normal) + (', d=' + Kotlin.toString(this.d)) + ')';
  };
  Plane.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.normal) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    return result;
  };
  Plane.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.normal, other.normal) && Kotlin.equals(this.d, other.d)))));
  };
  function PlaneSide(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PlaneSide_initFields() {
    PlaneSide_initFields = function () {
    };
    PlaneSide$ON_PLANE_instance = new PlaneSide('ON_PLANE', 0);
    PlaneSide$BACK_instance = new PlaneSide('BACK', 1);
    PlaneSide$FRONT_instance = new PlaneSide('FRONT', 2);
  }
  var PlaneSide$ON_PLANE_instance;
  function PlaneSide$ON_PLANE_getInstance() {
    PlaneSide_initFields();
    return PlaneSide$ON_PLANE_instance;
  }
  var PlaneSide$BACK_instance;
  function PlaneSide$BACK_getInstance() {
    PlaneSide_initFields();
    return PlaneSide$BACK_instance;
  }
  var PlaneSide$FRONT_instance;
  function PlaneSide$FRONT_getInstance() {
    PlaneSide_initFields();
    return PlaneSide$FRONT_instance;
  }
  PlaneSide.$metadata$ = {kind: Kind_CLASS, simpleName: 'PlaneSide', interfaces: [Enum]};
  function PlaneSide$values() {
    return [PlaneSide$ON_PLANE_getInstance(), PlaneSide$BACK_getInstance(), PlaneSide$FRONT_getInstance()];
  }
  PlaneSide.values = PlaneSide$values;
  function PlaneSide$valueOf(name) {
    switch (name) {
      case 'ON_PLANE':
        return PlaneSide$ON_PLANE_getInstance();
      case 'BACK':
        return PlaneSide$BACK_getInstance();
      case 'FRONT':
        return PlaneSide$FRONT_getInstance();
      default:throwISE('No enum constant com.acornui.math.PlaneSide.' + name);
    }
  }
  PlaneSide.valueOf_61zpoe$ = PlaneSide$valueOf;
  function QuaternionRo() {
    QuaternionRo$Companion_getInstance();
  }
  QuaternionRo.prototype.transform_9wm29k$ = function (v) {
    QuaternionRo$Companion_getInstance().tmp2_0.set_qe7e4j$(this);
    QuaternionRo$Companion_getInstance().tmp2_0.conjugate();
    QuaternionRo$Companion_getInstance().tmp2_0.mulLeft_qe7e4j$(QuaternionRo$Companion_getInstance().tmp1_0.set_7b5o5w$(v.x, v.y, v.z, 0.0)).mulLeft_qe7e4j$(this);
    v.x = QuaternionRo$Companion_getInstance().tmp2_0.x;
    v.y = QuaternionRo$Companion_getInstance().tmp2_0.y;
    v.z = QuaternionRo$Companion_getInstance().tmp2_0.z;
    return v;
  };
  QuaternionRo.prototype.closeTo_imyaox$$default = function (other, epsilon) {
    if (other == null)
      return false;
    return closeTo(this.x, other.x, epsilon) && closeTo(this.y, other.y, epsilon) && closeTo(this.z, other.z, epsilon) && closeTo(this.w, other.w, epsilon);
  };
  QuaternionRo.prototype.closeTo_imyaox$ = function (other, epsilon, callback$default) {
    if (epsilon === void 0)
      epsilon = 1.0E-4;
    return callback$default ? callback$default(other, epsilon) : this.closeTo_imyaox$$default(other, epsilon);
  };
  function QuaternionRo$Companion() {
    QuaternionRo$Companion_instance = this;
    this.tmp1_0 = new Quaternion(0.0, 0.0, 0.0, 0.0);
    this.tmp2_0 = new Quaternion(0.0, 0.0, 0.0, 0.0);
  }
  QuaternionRo$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var QuaternionRo$Companion_instance = null;
  function QuaternionRo$Companion_getInstance() {
    if (QuaternionRo$Companion_instance === null) {
      new QuaternionRo$Companion();
    }
    return QuaternionRo$Companion_instance;
  }
  QuaternionRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'QuaternionRo', interfaces: []};
  function Quaternion(x, y, z, w) {
    Quaternion$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    if (w === void 0)
      w = 1.0;
    this.x_y5088m$_0 = x;
    this.y_y5087r$_0 = y;
    this.z_y5086w$_0 = z;
    this.w_y5089h$_0 = w;
  }
  Object.defineProperty(Quaternion.prototype, 'x', {get: function () {
    return this.x_y5088m$_0;
  }, set: function (x) {
    this.x_y5088m$_0 = x;
  }});
  Object.defineProperty(Quaternion.prototype, 'y', {get: function () {
    return this.y_y5087r$_0;
  }, set: function (y) {
    this.y_y5087r$_0 = y;
  }});
  Object.defineProperty(Quaternion.prototype, 'z', {get: function () {
    return this.z_y5086w$_0;
  }, set: function (z) {
    this.z_y5086w$_0 = z;
  }});
  Object.defineProperty(Quaternion.prototype, 'w', {get: function () {
    return this.w_y5089h$_0;
  }, set: function (w) {
    this.w_y5089h$_0 = w;
  }});
  Quaternion.prototype.set_7b5o5w$ = function (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  };
  Quaternion.prototype.set_qe7e4j$ = function (quaternion) {
    return this.set_7b5o5w$(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  };
  Quaternion.prototype.len = function () {
    return Math_0.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  };
  Quaternion.prototype.toString = function () {
    return '[' + this.x + '|' + this.y + '|' + this.z + '|' + this.w + ']';
  };
  Quaternion.prototype.setEulerAnglesRad_y2kzbl$ = function (yaw, pitch, roll) {
    var hr = roll * 0.5;
    var shr = MathUtils_getInstance().sin_mx4ult$(hr);
    var chr = MathUtils_getInstance().cos_mx4ult$(hr);
    var hp = pitch * 0.5;
    var shp = MathUtils_getInstance().sin_mx4ult$(hp);
    var chp = MathUtils_getInstance().cos_mx4ult$(hp);
    var hy = yaw * 0.5;
    var shy = MathUtils_getInstance().sin_mx4ult$(hy);
    var chy = MathUtils_getInstance().cos_mx4ult$(hy);
    var chy_shp = chy * shp;
    var shy_chp = shy * chp;
    var chy_chp = chy * chp;
    var shy_shp = shy * shp;
    this.x = chy_shp * chr + shy_chp * shr;
    this.y = shy_chp * chr - chy_shp * shr;
    this.z = chy_chp * shr - shy_shp * chr;
    this.w = chy_chp * chr + shy_shp * shr;
    return this;
  };
  Quaternion.prototype.getGimbalPole = function () {
    var t = this.y * this.x + this.z * this.w;
    return t > 0.499 ? 1 : t < -0.499 ? -1 : 0;
  };
  Quaternion.prototype.getRollRad = function () {
    var pole = this.getGimbalPole();
    return pole === 0 ? MathUtils_getInstance().atan2_dleff0$(2.0 * (this.w * this.z + this.y * this.x), 1.0 - 2.0 * (this.x * this.x + this.z * this.z)) : pole * 2.0 * MathUtils_getInstance().atan2_dleff0$(this.y, this.w);
  };
  Quaternion.prototype.getPitchRad = function () {
    var pole = this.getGimbalPole();
    var tmp$;
    if (pole === 0) {
      MathUtils_getInstance();
      var value = 2.0 * (this.w * this.x - this.z * this.y);
      var min = -1.0;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: do {
        if (Kotlin.compareTo(value, min) <= 0) {
          clamp_73gzaq$result = min;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value;
      }
       while (false);
      tmp$ = Math_0.asin(clamp_73gzaq$result);
    }
     else
      tmp$ = pole * PI * 0.5;
    return tmp$;
  };
  Quaternion.prototype.getYawRad = function () {
    return this.getGimbalPole() === 0 ? MathUtils_getInstance().atan2_dleff0$(2.0 * (this.y * this.w + this.x * this.z), 1.0 - 2.0 * (this.y * this.y + this.x * this.x)) : 0.0;
  };
  Quaternion.prototype.len2 = function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  };
  Quaternion.prototype.nor = function () {
    var len = this.len2();
    if (len !== 0.0 && !MathUtils_getInstance().isEqual_dleff0$(len, 1.0)) {
      len = Math_0.sqrt(len);
      this.w = this.w / len;
      this.x = this.x / len;
      this.y = this.y / len;
      this.z = this.z / len;
    }
    return this;
  };
  Quaternion.prototype.conjugate = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  };
  Quaternion.prototype.mul_qe7e4j$ = function (other) {
    var newX = this.w * other.x + this.x * other.w + this.y * other.z - this.z * other.y;
    var newY = this.w * other.y + this.y * other.w + this.z * other.x - this.x * other.z;
    var newZ = this.w * other.z + this.z * other.w + this.x * other.y - this.y * other.x;
    var newW = this.w * other.w - this.x * other.x - this.y * other.y - this.z * other.z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.times_qe7e4j$ = function (other) {
    return this.copy_7b5o5w$().mul_qe7e4j$(other);
  };
  Quaternion.prototype.mul_7b5o5w$ = function (x, y, z, w) {
    var newX = this.w * x + this.x * w + this.y * z - this.z * y;
    var newY = this.w * y + this.y * w + this.z * x - this.x * z;
    var newZ = this.w * z + this.z * w + this.x * y - this.y * x;
    var newW = this.w * w - this.x * x - this.y * y - this.z * z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.mulLeft_qe7e4j$ = function (other) {
    var newX = other.w * this.x + other.x * this.w + other.y * this.z - other.z * this.y;
    var newY = other.w * this.y + other.y * this.w + other.z * this.x - other.x * this.z;
    var newZ = other.w * this.z + other.z * this.w + other.x * this.y - other.y * this.x;
    var newW = other.w * this.w - other.x * this.x - other.y * this.y - other.z * this.z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.mulLeft_7b5o5w$ = function (x, y, z, w) {
    var newX = w * this.x + x * this.w + y * this.z - z * y;
    var newY = w * this.y + y * this.w + z * this.x - x * z;
    var newZ = w * this.z + z * this.w + x * this.y - y * x;
    var newW = w * this.w - x * this.x - y * this.y - z * z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.add_qe7e4j$ = function (quaternion) {
    this.x = this.x + quaternion.x;
    this.y = this.y + quaternion.y;
    this.z = this.z + quaternion.z;
    this.w = this.w + quaternion.w;
    return this;
  };
  Quaternion.prototype.plus_qe7e4j$ = function (quaternion) {
    return this.copy_7b5o5w$().plus_qe7e4j$(quaternion);
  };
  Quaternion.prototype.add_7b5o5w$ = function (qx, qy, qz, qw) {
    this.x = this.x + qx;
    this.y = this.y + qy;
    this.z = this.z + qz;
    this.w = this.w + qw;
    return this;
  };
  Quaternion.prototype.idt = function () {
    return this.set_7b5o5w$(0.0, 0.0, 0.0, 1.0);
  };
  Quaternion.prototype.isIdentity = function () {
    return MathUtils_getInstance().isZero_dleff0$(this.x) && MathUtils_getInstance().isZero_dleff0$(this.y) && MathUtils_getInstance().isZero_dleff0$(this.z) && MathUtils_getInstance().isEqual_dleff0$(this.w, 1.0);
  };
  Quaternion.prototype.isIdentity_mx4ult$ = function (tolerance) {
    return MathUtils_getInstance().isZero_dleff0$(this.x, tolerance) && MathUtils_getInstance().isZero_dleff0$(this.y, tolerance) && MathUtils_getInstance().isZero_dleff0$(this.z, tolerance) && MathUtils_getInstance().isEqual_y2kzbl$(this.w, 1.0, tolerance);
  };
  Quaternion.prototype.setFromAxis_pz1gqy$ = function (axis, radians) {
    return this.setFromAxis_7b5o5w$(axis.x, axis.y, axis.z, radians);
  };
  Quaternion.prototype.setFromAxis_7b5o5w$ = function (x, y, z, radians) {
    var d = Vector3$Companion_getInstance().len_y2kzbl$(x, y, z);
    if (d === 0.0)
      return this.idt();
    d = 1.0 / d;
    var l_ang = radians;
    var l_sin = MathUtils_getInstance().sin_mx4ult$(l_ang / 2.0);
    var l_cos = MathUtils_getInstance().cos_mx4ult$(l_ang / 2.0);
    return this.set_7b5o5w$(d * x * l_sin, d * y * l_sin, d * z * l_sin, l_cos).nor();
  };
  Quaternion.prototype.setFromMatrix_e7v9es$ = function (matrix, normalizeAxes) {
    if (normalizeAxes === void 0)
      normalizeAxes = false;
    return this.setFromAxes_p6y6nc$(matrix.values.get_za3lpa$(0), matrix.values.get_za3lpa$(4), matrix.values.get_za3lpa$(8), matrix.values.get_za3lpa$(1), matrix.values.get_za3lpa$(5), matrix.values.get_za3lpa$(9), matrix.values.get_za3lpa$(2), matrix.values.get_za3lpa$(6), matrix.values.get_za3lpa$(10), normalizeAxes);
  };
  Quaternion.prototype.setFromMatrix_nytvwb$ = function (normalizeAxes, matrix) {
    return this.setFromAxes_p6y6nc$(matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M00), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M01), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M02), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M10), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M11), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M12), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M20), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M21), matrix.values.get_za3lpa$(Matrix3$Companion_getInstance().M22), normalizeAxes);
  };
  Quaternion.prototype.setFromMatrix_1ktw3a$ = function (matrix) {
    return this.setFromMatrix_nytvwb$(false, matrix);
  };
  Quaternion.prototype.setFromAxes_b32tf5$ = function (xx, xy, xz, yx, yy, yz, zx, zy, zz) {
    return this.setFromAxes_p6y6nc$(xx, xy, xz, yx, yy, yz, zx, zy, zz, false);
  };
  Quaternion.prototype.setFromAxes_p6y6nc$ = function (xx, xy, xz, yx, yy, yz, zx, zy, zz, normalizeAxes) {
    if (normalizeAxes === void 0)
      normalizeAxes = false;
    var xx_0 = xx;
    var xy_0 = xy;
    var xz_0 = xz;
    var yy_0 = yy;
    var yz_0 = yz;
    var zx_0 = zx;
    var zy_0 = zy;
    var zz_0 = zz;
    if (normalizeAxes) {
      var lx = 1.0 / Vector3$Companion_getInstance().len_y2kzbl$(xx_0, xy_0, xz_0);
      var ly = 1.0 / Vector3$Companion_getInstance().len_y2kzbl$(yx, yy_0, yz_0);
      var lz = 1.0 / Vector3$Companion_getInstance().len_y2kzbl$(zx_0, zy_0, zz_0);
      xx_0 *= lx;
      xy_0 *= lx;
      xz_0 *= lx;
      yz_0 *= ly;
      yy_0 *= ly;
      yz_0 *= ly;
      zx_0 *= lz;
      zy_0 *= lz;
      zz_0 *= lz;
    }
    var t = xx_0 + yy_0 + zz_0;
    if (t >= 0) {
      var s = Math_0.sqrt(t + 1);
      this.w = 0.5 * s;
      s = 0.5 / s;
      this.x = (zy_0 - yz_0) * s;
      this.y = (xz_0 - zx_0) * s;
      this.z = (yx - xy_0) * s;
    }
     else if (xx_0 > yy_0 && xx_0 > zz_0) {
      var s_0 = Math_0.sqrt(1.0 + xx_0 - yy_0 - zz_0);
      this.x = s_0 * 0.5;
      s_0 = 0.5 / s_0;
      this.y = (yx + xy_0) * s_0;
      this.z = (xz_0 + zx_0) * s_0;
      this.w = (zy_0 - yz_0) * s_0;
    }
     else if (yy_0 > zz_0) {
      var s_1 = Math_0.sqrt(1.0 + yy_0 - xx_0 - zz_0);
      this.y = s_1 * 0.5;
      s_1 = 0.5 / s_1;
      this.x = (yx + xy_0) * s_1;
      this.z = (zy_0 + yz_0) * s_1;
      this.w = (xz_0 - zx_0) * s_1;
    }
     else {
      var s_2 = Math_0.sqrt(1.0 + zz_0 - xx_0 - yy_0);
      this.z = s_2 * 0.5;
      s_2 = 0.5 / s_2;
      this.x = (xz_0 + zx_0) * s_2;
      this.y = (zy_0 + yz_0) * s_2;
      this.w = (yx - xy_0) * s_2;
    }
    return this;
  };
  Quaternion.prototype.setFromCross_uwler8$ = function (v1, v2) {
    var value = v1.dot_1fv2cb$(v2);
    var min = -1.0;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(value, min) <= 0) {
        clamp_73gzaq$result = min;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value;
    }
     while (false);
    var dot = clamp_73gzaq$result;
    var angle = Math_0.acos(dot);
    return this.setFromAxis_7b5o5w$(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x, angle);
  };
  Quaternion.prototype.setFromCross_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    var value = Vector3$Companion_getInstance().dot_w8lrqs$(x1, y1, z1, x2, y2, z2);
    var min = -1.0;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(value, min) <= 0) {
        clamp_73gzaq$result = min;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value;
    }
     while (false);
    var dot = clamp_73gzaq$result;
    var angle = Math_0.acos(dot);
    return this.setFromAxis_7b5o5w$(y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2, angle);
  };
  Quaternion.prototype.slerp_j0lihk$ = function (end, alpha) {
    var dot = this.dot_qe7e4j$(end);
    var absDot = dot < 0.0 ? -dot : dot;
    var scale0 = 1.0 - alpha;
    var scale1 = alpha;
    if (1.0 - absDot > 0.1) {
      var angle = Math_0.acos(absDot);
      var invSinTheta = 1.0 / MathUtils_getInstance().sin_mx4ult$(angle);
      scale0 = MathUtils_getInstance().sin_mx4ult$((1.0 - alpha) * angle) * invSinTheta;
      scale1 = MathUtils_getInstance().sin_mx4ult$(alpha * angle) * invSinTheta;
    }
    if (dot < 0.0)
      scale1 = -scale1;
    this.x = scale0 * this.x + scale1 * end.x;
    this.y = scale0 * this.y + scale1 * end.y;
    this.z = scale0 * this.z + scale1 * end.z;
    this.w = scale0 * this.w + scale1 * end.w;
    return this;
  };
  Quaternion.prototype.slerp_2ccfco$ = function (q) {
    var tmp$;
    var w = 1.0 / q.length;
    this.set_qe7e4j$(q[0]).exp_mx4ult$(w);
    tmp$ = get_lastIndex_0(q);
    for (var i = 1; i <= tmp$; i++)
      this.mul_qe7e4j$(Quaternion$Companion_getInstance().tmp1_0.set_qe7e4j$(q[i]).exp_mx4ult$(w));
    this.nor();
    return this;
  };
  Quaternion.prototype.slerp_48tmu2$ = function (q, w) {
    var tmp$;
    this.set_qe7e4j$(q[0]).exp_mx4ult$(w[0]);
    tmp$ = get_lastIndex_0(q);
    for (var i = 1; i <= tmp$; i++)
      this.mul_qe7e4j$(Quaternion$Companion_getInstance().tmp1_0.set_qe7e4j$(q[i]).exp_mx4ult$(w[i]));
    this.nor();
    return this;
  };
  Quaternion.prototype.exp_mx4ult$ = function (alpha) {
    var norm = this.len();
    var normExp = Math_0.pow(norm, alpha);
    var theta = Math_0.acos(this.w / norm);
    var coeff;
    if ((theta < 0.0 ? -theta : theta) < 0.001)
      coeff = normExp * alpha / norm;
    else
      coeff = normExp * MathUtils_getInstance().sin_mx4ult$(alpha * theta) / (norm * MathUtils_getInstance().sin_mx4ult$(theta));
    this.w = normExp * MathUtils_getInstance().cos_mx4ult$(alpha * theta);
    this.x = this.x * coeff;
    this.y = this.y * coeff;
    this.z = this.z * coeff;
    this.nor();
    return this;
  };
  Quaternion.prototype.dot_qe7e4j$ = function (other) {
    return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
  };
  Quaternion.prototype.dot_7b5o5w$ = function (x, y, z, w) {
    return this.x * x + this.y * y + this.z * z + this.w * w;
  };
  Quaternion.prototype.mul_mx4ult$ = function (scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    this.z = this.z * scalar;
    this.w = this.w * scalar;
    return this;
  };
  Quaternion.prototype.times_mx4ult$ = function (scalar) {
    return this.copy_7b5o5w$().mul_mx4ult$(scalar);
  };
  Quaternion.prototype.getAxisAngleRad_9wm29k$ = function (axis) {
    if (this.w > 1.0)
      this.nor();
    var angle = 2.0 * Math_0.acos(this.w);
    var s = Math_0.sqrt(1.0 - this.w * this.w);
    if (s < MathUtils_getInstance().FLOAT_ROUNDING_ERROR) {
      axis.x = this.x;
      axis.y = this.y;
      axis.z = this.z;
    }
     else {
      axis.x = this.x / s;
      axis.y = this.y / s;
      axis.z = this.z / s;
    }
    return angle;
  };
  Quaternion.prototype.getAngleRad = function () {
    return 2.0 * Math_0.acos(this.w > 1 ? this.w / this.len() : this.w);
  };
  Quaternion.prototype.getSwingTwist_rd6wrh$ = function (axisX, axisY, axisZ, swing, twist) {
    var d = Vector3$Companion_getInstance().dot_w8lrqs$(this.x, this.y, this.z, axisX, axisY, axisZ);
    twist.set_7b5o5w$(axisX * d, axisY * d, axisZ * d, this.w).nor();
    swing.set_qe7e4j$(twist).conjugate().mulLeft_qe7e4j$(this);
  };
  Quaternion.prototype.getSwingTwist_bqqzr0$ = function (axis, swing, twist) {
    this.getSwingTwist_rd6wrh$(axis.x, axis.y, axis.z, swing, twist);
  };
  Quaternion.prototype.getAngleAroundRad_y2kzbl$ = function (axisX, axisY, axisZ) {
    var d = Vector3$Companion_getInstance().dot_w8lrqs$(this.x, this.y, this.z, axisX, axisY, axisZ);
    var l2 = Quaternion$Companion_getInstance().len2_7b5o5w$(axisX * d, axisY * d, axisZ * d, this.w);
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(l2))
      tmp$ = 0.0;
    else {
      MathUtils_getInstance();
      MathUtils_getInstance();
      var value = this.w / Math_0.sqrt(l2);
      var min = -1.0;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: do {
        if (Kotlin.compareTo(value, min) <= 0) {
          clamp_73gzaq$result = min;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value;
      }
       while (false);
      tmp$ = 2.0 * Math_0.acos(clamp_73gzaq$result);
    }
    return tmp$;
  };
  Quaternion.prototype.getAngleAroundRad_9wm29k$ = function (axis) {
    return this.getAngleAroundRad_y2kzbl$(axis.x, axis.y, axis.z);
  };
  function Quaternion$Companion() {
    Quaternion$Companion_instance = this;
    this.tmp1_0 = new Quaternion(0.0, 0.0, 0.0, 0.0);
    this.tmp2_0 = new Quaternion(0.0, 0.0, 0.0, 0.0);
  }
  Quaternion$Companion.prototype.len_7b5o5w$ = function (x, y, z, w) {
    return Math_0.sqrt(x * x + y * y + z * z + w * w);
  };
  Quaternion$Companion.prototype.len2_7b5o5w$ = function (x, y, z, w) {
    return x * x + y * y + z * z + w * w;
  };
  Quaternion$Companion.prototype.dot_nkj9yk$ = function (x1, y1, z1, w1, x2, y2, z2, w2) {
    return x1 * x2 + y1 * y2 + z1 * z2 + w1 * w2;
  };
  Quaternion$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Quaternion$Companion_instance = null;
  function Quaternion$Companion_getInstance() {
    if (Quaternion$Companion_instance === null) {
      new Quaternion$Companion();
    }
    return Quaternion$Companion_instance;
  }
  Quaternion.$metadata$ = {kind: Kind_CLASS, simpleName: 'Quaternion', interfaces: [QuaternionRo]};
  Quaternion.prototype.component1 = function () {
    return this.x;
  };
  Quaternion.prototype.component2 = function () {
    return this.y;
  };
  Quaternion.prototype.component3 = function () {
    return this.z;
  };
  Quaternion.prototype.component4 = function () {
    return this.w;
  };
  Quaternion.prototype.copy_7b5o5w$ = function (x, y, z, w) {
    return new Quaternion(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Quaternion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Quaternion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  function Random(seed0, seed1) {
    Random$Companion_getInstance();
    if (seed0 === void 0)
      seed0 = Kotlin.Long.ZERO;
    if (seed1 === void 0)
      seed1 = Kotlin.Long.ZERO;
    this.seed0 = seed0;
    this.seed1 = seed1;
    if (equals(this.seed0, Kotlin.Long.ZERO)) {
      this.setSeed_s8cxhz$(Kotlin.Long.fromNumber(Math.random() * (new Kotlin.Long(-1, 2097151)).toNumber()));
    }
     else if (equals(this.seed1, Kotlin.Long.ZERO)) {
      this.setSeed_s8cxhz$(this.seed0);
    }
  }
  function Random$Companion() {
    Random$Companion_instance = this;
    this.NORM_DOUBLE_0 = 1.0 / (1 << 53);
    this.NORM_FLOAT_0 = 1.0 / (1 << 24);
  }
  Random$Companion.prototype.murmurHash3_0 = function (x) {
    var xV = x;
    xV = xV.xor(xV.shiftRightUnsigned(33));
    xV = xV.multiply(new Kotlin.Long(-313160499, -11423785));
    xV = xV.xor(xV.shiftRightUnsigned(33));
    xV = xV.multiply(new Kotlin.Long(444984403, -993084930));
    xV = xV.xor(xV.shiftRightUnsigned(33));
    return xV;
  };
  Random$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Random$Companion_instance = null;
  function Random$Companion_getInstance() {
    if (Random$Companion_instance === null) {
      new Random$Companion();
    }
    return Random$Companion_instance;
  }
  Random.prototype.nextLong = function () {
    var s1 = this.seed0;
    var s0 = this.seed1;
    this.seed0 = s0;
    s1 = s1.xor(s1.shiftLeft(23));
    this.seed1 = s1.xor(s0).xor(s1.shiftRightUnsigned(17)).xor(s0.shiftRightUnsigned(26));
    return this.seed1.add(s0);
  };
  Random.prototype.next_za3lpa$ = function (bits) {
    return this.nextLong().and(Kotlin.Long.fromInt((1 << bits) - 1 | 0)).toInt();
  };
  Random.prototype.nextInt = function () {
    return this.nextLong().toInt();
  };
  Random.prototype.nextInt_za3lpa$ = function (n) {
    return this.nextLong_s8cxhz$(Kotlin.Long.fromInt(n)).toInt();
  };
  Random.prototype.nextLong_s8cxhz$ = function (n) {
    if (n.compareTo_11rb$(Kotlin.Long.fromInt(0)) <= 0)
      throw IllegalArgumentException_init('n must be positive');
    while (true) {
      var bits = this.nextLong().shiftRightUnsigned(1);
      var value = bits.modulo(n);
      if (bits.subtract(value).add(n.subtract(Kotlin.Long.fromInt(1))).compareTo_11rb$(Kotlin.Long.fromInt(0)) >= 0)
        return value;
    }
  };
  Random.prototype.nextDouble = function () {
    return this.nextLong().shiftRightUnsigned(11).toNumber() * Random$Companion_getInstance().NORM_DOUBLE_0;
  };
  Random.prototype.nextFloat = function () {
    return this.nextLong().shiftRightUnsigned(40).toNumber() * Random$Companion_getInstance().NORM_FLOAT_0;
  };
  Random.prototype.nextBoolean = function () {
    return !equals(this.nextLong().and(Kotlin.Long.ONE), Kotlin.Long.ZERO);
  };
  Random.prototype.nextBytes_fqrh44$ = function (bytes) {
    var tmp$;
    var i = bytes.length;
    while (i !== 0) {
      var a = i;
      var n = Math_0.min(a, 8);
      var bits = this.nextLong();
      while ((tmp$ = n, n = tmp$ - 1 | 0, tmp$) !== 0) {
        bytes[i = i - 1 | 0, i] = toByte(bits.toInt());
        bits = bits.shiftRight(8);
      }
    }
  };
  Random.prototype.setSeed_s8cxhz$ = function (seed) {
    var seed0 = Random$Companion_getInstance().murmurHash3_0(equals(seed, Kotlin.Long.ZERO) ? new Kotlin.Long(0, -2097152) : seed);
    this.setState_3pjtqy$(seed0, Random$Companion_getInstance().murmurHash3_0(seed0));
  };
  Random.prototype.setState_3pjtqy$ = function (seed0, seed1) {
    this.seed0 = seed0;
    this.seed1 = seed1;
  };
  Random.$metadata$ = {kind: Kind_CLASS, simpleName: 'Random', interfaces: []};
  function Range2Ro() {
  }
  Range2Ro.prototype.contains_mef7kx$ = function (value) {
    if (this.min != null && Kotlin.compareTo(ensureNotNull(this.min), value) > 0)
      return false;
    if (this.max != null && Kotlin.compareTo(ensureNotNull(this.max), value) < 0)
      return false;
    return true;
  };
  Range2Ro.prototype.clamp_mef7kx$ = function (value) {
    if (value == null)
      return null;
    if (this.min != null && Kotlin.compareTo(value, ensureNotNull(this.min)) < 0)
      return ensureNotNull(this.min);
    if (this.max != null && Kotlin.compareTo(value, ensureNotNull(this.max)) > 0)
      return ensureNotNull(this.max);
    return value;
  };
  Range2Ro.prototype.clamp2_mef7kx$ = function (value) {
    if (this.min != null && Kotlin.compareTo(value, ensureNotNull(this.min)) < 0)
      return ensureNotNull(this.min);
    if (this.max != null && Kotlin.compareTo(value, ensureNotNull(this.max)) > 0)
      return ensureNotNull(this.max);
    return value;
  };
  Range2Ro.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Range2Ro', interfaces: []};
  function Range2(min, max) {
    if (min === void 0)
      min = null;
    if (max === void 0)
      max = null;
    this.min_2ax7xj$_0 = min;
    this.max_2axdmh$_0 = max;
  }
  Object.defineProperty(Range2.prototype, 'min', {get: function () {
    return this.min_2ax7xj$_0;
  }, set: function (min) {
    this.min_2ax7xj$_0 = min;
  }});
  Object.defineProperty(Range2.prototype, 'max', {get: function () {
    return this.max_2axdmh$_0;
  }, set: function (max) {
    this.max_2axdmh$_0 = max;
  }});
  Range2.prototype.bound_ja1rg3$ = function (range) {
    if (this.min == null)
      this.min = range.min;
    else if (range.min != null)
      this.min = maxOf(ensureNotNull(range.min), ensureNotNull(this.min));
    if (this.max == null)
      this.max = range.max;
    else if (range.max != null)
      this.max = minOf(ensureNotNull(range.max), ensureNotNull(this.max));
    return this;
  };
  Range2.prototype.set_ja1rg3$ = function (other) {
    this.min = other.min;
    this.max = other.max;
  };
  Range2.prototype.clear = function () {
    this.min = null;
    this.max = null;
  };
  Range2.$metadata$ = {kind: Kind_CLASS, simpleName: 'Range2', interfaces: [Range2Ro, Clearable]};
  Range2.prototype.component1 = function () {
    return this.min;
  };
  Range2.prototype.component2 = function () {
    return this.max;
  };
  Range2.prototype.copy_n65qkk$ = function (min, max) {
    return new Range2(min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  Range2.prototype.toString = function () {
    return 'Range2(min=' + Kotlin.toString(this.min) + (', max=' + Kotlin.toString(this.max)) + ')';
  };
  Range2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  Range2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  function RayRo() {
  }
  RayRo.prototype.intersects_owlv2i$ = function (ray, out, callback$default) {
    if (out === void 0)
      out = null;
    return callback$default ? callback$default(ray, out) : this.intersects_owlv2i$$default(ray, out);
  };
  RayRo.prototype.intersects_6bb61c$ = function (v1, v2, v3, out, callback$default) {
    if (out === void 0)
      out = null;
    return callback$default ? callback$default(v1, v2, v3, out) : this.intersects_6bb61c$$default(v1, v2, v3, out);
  };
  RayRo.prototype.copy = function () {
    var r = new Ray(this.origin.copy(), this.direction.copy());
    r.update();
    return r;
  };
  RayRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RayRo', interfaces: []};
  function Ray(origin, direction) {
    Ray$Companion_getInstance();
    if (origin === void 0)
      origin = new Vector3();
    if (direction === void 0)
      direction = new Vector3();
    this.origin_k9qf5k$_0 = origin;
    this.direction_6glmmx$_0 = direction;
    this.directionInv_a55858$_0 = new Vector3();
  }
  Object.defineProperty(Ray.prototype, 'origin', {get: function () {
    return this.origin_k9qf5k$_0;
  }});
  Object.defineProperty(Ray.prototype, 'direction', {get: function () {
    return this.direction_6glmmx$_0;
  }});
  Object.defineProperty(Ray.prototype, 'directionInv', {get: function () {
    return this.directionInv_a55858$_0;
  }});
  Ray.prototype.update = function () {
    this.direction.nor();
    this.directionInv.set_y2kzbl$(1.0 / this.direction.x, 1.0 / this.direction.y, 1.0 / this.direction.z);
  };
  Ray.prototype.getEndPoint_4lg16t$ = function (distance, out) {
    return out.set_1fv2cb$(this.direction).scl_mx4ult$(distance).add_1fv2cb$(this.origin);
  };
  Ray.prototype.getPointAtZ_4lg16s$ = function (z, out) {
    if (this.direction.z === 0.0)
      throw Exception_init('direction.z is zero');
    var d = (z - this.origin.z) / this.direction.z;
    return out.set_dleff0$(this.direction.x, this.direction.y).scl_mx4ult$(d).add_dleff0$(this.origin.x, this.origin.y);
  };
  Ray.prototype.mul_pekf88$ = function (matrix) {
    Ray$Companion_getInstance().tmpVec_0.set_1fv2cb$(this.origin).add_1fv2cb$(this.direction);
    Ray$Companion_getInstance().tmpVec_0.mul_pekf88$(matrix);
    this.origin.mul_pekf88$(matrix);
    this.direction.set_1fv2cb$(Ray$Companion_getInstance().tmpVec_0.sub_1fv2cb$(this.origin));
    this.update();
    return this;
  };
  Ray.prototype.set_uwler8$ = function (origin, direction) {
    this.origin.set_1fv2cb$(origin);
    this.direction.set_1fv2cb$(direction);
    this.update();
    return this;
  };
  Ray.prototype.set_w8lrqs$ = function (x, y, z, dX, dY, dZ) {
    this.origin.set_y2kzbl$(x, y, z);
    this.direction.set_y2kzbl$(dX, dY, dZ);
    this.update();
    return this;
  };
  Ray.prototype.set_rv4fgh$ = function (ray) {
    this.origin.set_1fv2cb$(ray.origin);
    this.direction.set_1fv2cb$(ray.direction);
    return this;
  };
  Ray.prototype.intersects_owlv2i$$default = function (ray, out) {
    var tmp$;
    if ((tmp$ = this.origin) != null ? tmp$.equals(ray.origin) : null) {
      out != null ? out.set_1fv2cb$(this.origin) : null;
      return true;
    }
    var d1 = this.direction;
    var d2 = ray.direction;
    var cross = Vector3$Companion_getInstance().obtain();
    cross.set_1fv2cb$(d1).crs_1fv2cb$(d2);
    var u = cross.dot_1fv2cb$(this.origin);
    var u2 = cross.dot_1fv2cb$(ray.origin);
    if (notCloseTo(u, u2)) {
      Vector3$Companion_getInstance().free_9wm29k$(cross);
      return false;
    }
    var perp1 = Vector3$Companion_getInstance().obtain();
    perp1.set_1fv2cb$(d1).crs_1fv2cb$(cross);
    var v = perp1.dot_1fv2cb$(this.origin);
    if (out != null) {
      var t = (v - perp1.x * ray.origin.x - perp1.y * ray.origin.y - perp1.z * ray.origin.z) / (perp1.y * ray.direction.y + perp1.x * ray.direction.x + perp1.z * ray.direction.z);
      ray.getEndPoint_4lg16t$(t, out);
    }
    Vector3$Companion_getInstance().free_9wm29k$(cross);
    Vector3$Companion_getInstance().free_9wm29k$(perp1);
    return true;
  };
  Ray.prototype.intersects_w3gmro$ = function (plane, out) {
    var tmp$, tmp$_0;
    var denom = this.direction.dot_1fv2cb$(plane.normal);
    if (denom !== 0.0) {
      var t = -(this.origin.dot_1fv2cb$(plane.normal) + plane.d) / denom;
      if (t < 0.0)
        return false;
      (tmp$ = out != null ? out.set_1fv2cb$(this.origin) : null) != null ? tmp$.add_1fv2cb$(Ray$Companion_getInstance().v3_0_0.set_1fv2cb$(this.direction).scl_mx4ult$(t)) : null;
      tmp$_0 = true;
    }
     else if (plane.testPoint_1fv2cb$(this.origin) === PlaneSide$ON_PLANE_getInstance()) {
      out != null ? out.set_1fv2cb$(this.origin) : null;
      tmp$_0 = true;
    }
     else
      tmp$_0 = false;
    return tmp$_0;
  };
  Ray.prototype.intersects_6bb61c$$default = function (v1, v2, v3, out) {
    var tmp$;
    Ray$Companion_getInstance().plane_0.set_qeea63$(v1, v2, v3);
    if (!this.intersects_w3gmro$(Ray$Companion_getInstance().plane_0, Ray$Companion_getInstance().v3_3_0))
      return false;
    Ray$Companion_getInstance().v3_0_0.set_1fv2cb$(v3).sub_1fv2cb$(v1);
    Ray$Companion_getInstance().v3_1_0.set_1fv2cb$(v2).sub_1fv2cb$(v1);
    Ray$Companion_getInstance().v3_2_0.set_1fv2cb$(Ray$Companion_getInstance().v3_3_0).sub_1fv2cb$(v1);
    var dot00 = Ray$Companion_getInstance().v3_0_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_0_0);
    var dot01 = Ray$Companion_getInstance().v3_0_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_1_0);
    var dot02 = Ray$Companion_getInstance().v3_0_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_2_0);
    var dot11 = Ray$Companion_getInstance().v3_1_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_1_0);
    var dot12 = Ray$Companion_getInstance().v3_1_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_2_0);
    var denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0.0)
      return false;
    var u = (dot11 * dot02 - dot01 * dot12) / denom;
    var v = (dot00 * dot12 - dot01 * dot02) / denom;
    if (u >= -MathUtils_getInstance().FLOAT_ROUNDING_ERROR && v >= -MathUtils_getInstance().FLOAT_ROUNDING_ERROR && u + v <= 1.0 + MathUtils_getInstance().FLOAT_ROUNDING_ERROR) {
      out != null ? out.set_1fv2cb$(Ray$Companion_getInstance().v3_3_0) : null;
      tmp$ = true;
    }
     else {
      tmp$ = false;
    }
    return tmp$;
  };
  Ray.prototype.clear = function () {
    this.origin.clear();
    this.direction.clear();
    this.directionInv.clear();
  };
  function Ray$Companion() {
    Ray$Companion_instance = this;
    this.tmpVec_0 = new Vector3();
    this.plane_0 = new Plane(new Vector3(), 0.0);
    this.v3_0_0 = new Vector3();
    this.v3_1_0 = new Vector3();
    this.v3_2_0 = new Vector3();
    this.v3_3_0 = new Vector3();
    this.pool_0 = ClearableObjectPool_init(Ray$Companion$pool$lambda);
  }
  Ray$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  Ray$Companion.prototype.free_ujzndq$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  function Ray$Companion$pool$lambda() {
    return new Ray();
  }
  Ray$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Ray$Companion_instance = null;
  function Ray$Companion_getInstance() {
    if (Ray$Companion_instance === null) {
      new Ray$Companion();
    }
    return Ray$Companion_instance;
  }
  Ray.$metadata$ = {kind: Kind_CLASS, simpleName: 'Ray', interfaces: [RayRo, Clearable]};
  Ray.prototype.component1 = function () {
    return this.origin;
  };
  Ray.prototype.component2 = function () {
    return this.direction;
  };
  Ray.prototype.copy_s18mjw$ = function (origin, direction) {
    return new Ray(origin === void 0 ? this.origin : origin, direction === void 0 ? this.direction : direction);
  };
  Ray.prototype.toString = function () {
    return 'Ray(origin=' + Kotlin.toString(this.origin) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  Ray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  Ray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.origin, other.origin) && Kotlin.equals(this.direction, other.direction)))));
  };
  function Ray2Ro() {
  }
  Ray2Ro.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Ray2Ro', interfaces: []};
  function Ray2(origin, direction) {
    Ray2$Companion_getInstance();
    if (origin === void 0)
      origin = new Vector2();
    if (direction === void 0)
      direction = new Vector2();
    this.origin_x1bx56$_0 = origin;
    this.direction_ykymyh$_0 = direction;
  }
  Object.defineProperty(Ray2.prototype, 'origin', {get: function () {
    return this.origin_x1bx56$_0;
  }});
  Object.defineProperty(Ray2.prototype, 'direction', {get: function () {
    return this.direction_ykymyh$_0;
  }});
  Ray2.prototype.intersects_a6cm3q$ = function (ray, out) {
    return Ray2$Companion_getInstance().intersects_gkesqv$(this.origin, this.direction, ray.origin, ray.direction, out);
  };
  Ray2.prototype.free = function () {
    Ray2$Companion_getInstance().pool_0.free_11rb$(this);
  };
  Ray2.prototype.clear = function () {
    this.origin.clear();
    this.direction.clear();
  };
  function Ray2$Companion() {
    Ray2$Companion_instance = this;
    this.pool_0 = ClearableObjectPool_init(Ray2$Companion$pool$lambda);
  }
  Ray2$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  Ray2$Companion.prototype.free_nt8f3k$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  Ray2$Companion.prototype.intersects_n34qss$ = function (start1, direction1, start2, direction2) {
    var diffX = start2.x - start1.x;
    var diffY = start2.y - start1.y;
    var d1xd2 = direction1.x * direction2.y - direction1.y * direction2.x;
    if (d1xd2 === 0.0) {
      return kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY;
    }
    var d2sx = direction2.x / d1xd2;
    var d2sy = direction2.y / d1xd2;
    return diffX * d2sy - diffY * d2sx;
  };
  Ray2$Companion.prototype.intersects_gkesqv$ = function (start1, direction1, start2, direction2, out) {
    var tmp$;
    var f = this.intersects_n34qss$(start1, direction1, start2, direction2);
    if (f < kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY) {
      out.set_1fv330$(direction1).scl_mx4ult$(f).add_1fv330$(start1);
      tmp$ = true;
    }
     else {
      out.set_1fv330$(start1);
      tmp$ = false;
    }
    return tmp$;
  };
  function Ray2$Companion$pool$lambda() {
    return new Ray2();
  }
  Ray2$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Ray2$Companion_instance = null;
  function Ray2$Companion_getInstance() {
    if (Ray2$Companion_instance === null) {
      new Ray2$Companion();
    }
    return Ray2$Companion_instance;
  }
  Ray2.$metadata$ = {kind: Kind_CLASS, simpleName: 'Ray2', interfaces: [Ray2Ro, Clearable]};
  Ray2.prototype.component1 = function () {
    return this.origin;
  };
  Ray2.prototype.component2 = function () {
    return this.direction;
  };
  Ray2.prototype.copy_rirrik$ = function (origin, direction) {
    return new Ray2(origin === void 0 ? this.origin : origin, direction === void 0 ? this.direction : direction);
  };
  Ray2.prototype.toString = function () {
    return 'Ray2(origin=' + Kotlin.toString(this.origin) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  Ray2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  Ray2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.origin, other.origin) && Kotlin.equals(this.direction, other.direction)))));
  };
  function RectangleRo() {
  }
  RectangleRo.prototype.intersects_y8xsj$ = function (r, out, callback$default) {
    if (out === void 0)
      out = null;
    return callback$default ? callback$default(r, out) : this.intersects_y8xsj$$default(r, out);
  };
  RectangleRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RectangleRo', interfaces: []};
  function Rectangle(x, y, width, height) {
    Rectangle$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.x_ywqcd3$_0 = x;
    this.y_ywqcc8$_0 = y;
    this.width_rm69lx$_0 = width;
    this.height_cmbhlg$_0 = height;
  }
  Object.defineProperty(Rectangle.prototype, 'x', {get: function () {
    return this.x_ywqcd3$_0;
  }, set: function (x) {
    this.x_ywqcd3$_0 = x;
  }});
  Object.defineProperty(Rectangle.prototype, 'y', {get: function () {
    return this.y_ywqcc8$_0;
  }, set: function (y) {
    this.y_ywqcc8$_0 = y;
  }});
  Object.defineProperty(Rectangle.prototype, 'width', {get: function () {
    return this.width_rm69lx$_0;
  }, set: function (width) {
    this.width_rm69lx$_0 = width;
  }});
  Object.defineProperty(Rectangle.prototype, 'height', {get: function () {
    return this.height_cmbhlg$_0;
  }, set: function (height) {
    this.height_cmbhlg$_0 = height;
  }});
  Object.defineProperty(Rectangle.prototype, 'left', {get: function () {
    return this.x;
  }});
  Object.defineProperty(Rectangle.prototype, 'top', {get: function () {
    return this.y;
  }});
  Object.defineProperty(Rectangle.prototype, 'right', {get: function () {
    return this.x + this.width;
  }});
  Object.defineProperty(Rectangle.prototype, 'bottom', {get: function () {
    return this.y + this.height;
  }});
  Rectangle.prototype.isEmpty = function () {
    return this.width === 0.0 || this.height === 0.0;
  };
  Rectangle.prototype.isNotEmpty = function () {
    return !this.isEmpty();
  };
  Rectangle.prototype.set_7b5o5w$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  Rectangle.prototype.set_tjonv8$ = function (x, y, width, height) {
    return this.set_7b5o5w$(x, y, width, height);
  };
  Rectangle.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.width = 0.0;
    this.height = 0.0;
  };
  Rectangle.prototype.getPosition_9wm29l$ = function (position) {
    return position.set_dleff0$(this.x, this.y);
  };
  Rectangle.prototype.setPosition_9wm29l$ = function (position) {
    this.x = position.x;
    this.y = position.y;
    return this;
  };
  Rectangle.prototype.setPosition_dleff0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Rectangle.prototype.setSize_dleff0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  Rectangle.prototype.getSize_9wm29l$ = function (out) {
    return out.set_dleff0$(this.width, this.height);
  };
  Rectangle.prototype.intersects_dleff0$ = function (x, y) {
    return this.x <= x && this.x + this.width >= x && this.y <= y && this.y + this.height >= y;
  };
  Rectangle.prototype.intersects_9wm29l$ = function (point) {
    return this.intersects_dleff0$(point.x, point.y);
  };
  Rectangle.prototype.intersects_y8xsj$$default = function (r, out) {
    if (r.direction.z === 0.0)
      return false;
    var m = -r.origin.z * r.directionInv.z;
    if (m < 0)
      return false;
    var x2 = r.origin.x + m * r.direction.x;
    var y2 = r.origin.y + m * r.direction.y;
    var intersects = x2 >= this.x && x2 <= this.x + this.width && y2 >= this.y && y2 <= this.y + this.height;
    if (out != null && intersects) {
      r.getEndPoint_4lg16t$(m, out);
    }
    return intersects;
  };
  Rectangle.prototype.contains_jhujlw$ = function (rectangle) {
    var xMin = rectangle.x;
    var xMax = xMin + rectangle.width;
    var yMin = rectangle.y;
    var yMax = yMin + rectangle.height;
    return xMin > this.x && xMin < this.x + this.width && (xMax > this.x && xMax < this.x + this.width) && (yMin > this.y && yMin < this.y + this.height && (yMax > this.y && yMax < this.y + this.height));
  };
  Rectangle.prototype.intersects_jhujlw$ = function (r) {
    return this.intersects_7b5o5w$(r.x, r.y, r.width, r.height);
  };
  Rectangle.prototype.intersects_7b5o5w$ = function (xVal, yVal, widthVal, heightVal) {
    return this.x < xVal + widthVal && this.x + this.width > xVal && this.y < yVal + heightVal && this.y + this.height > yVal;
  };
  Rectangle.prototype.set_jhujlw$ = function (rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
    return this;
  };
  Rectangle.prototype.getAspectRatio = function () {
    return this.height === 0.0 ? 0.0 : this.width / this.height;
  };
  Rectangle.prototype.getCenter_9wm29l$ = function (vector) {
    vector.x = this.x + this.width * 0.5;
    vector.y = this.y + this.height * 0.5;
    return vector;
  };
  Rectangle.prototype.setCenter_dleff0$ = function (x, y) {
    this.setPosition_dleff0$(x - this.width * 0.5, y - this.height * 0.5);
    return this;
  };
  Rectangle.prototype.setCenter_9wm29l$ = function (position) {
    this.setPosition_dleff0$(position.x - this.width * 0.5, position.y - this.height * 0.5);
    return this;
  };
  Rectangle.prototype.fitOutside_o5do7t$ = function (rect) {
    var ratio = this.getAspectRatio();
    if (ratio > rect.getAspectRatio()) {
      this.setSize_dleff0$(rect.height * ratio, rect.height);
    }
     else {
      this.setSize_dleff0$(rect.width, rect.width / ratio);
    }
    this.setPosition_dleff0$(rect.x + rect.width * 0.5 - this.width * 0.5, rect.y + rect.height * 0.5 - this.height * 0.5);
    return this;
  };
  Rectangle.prototype.fitInside_o5do7t$ = function (rect) {
    var ratio = this.getAspectRatio();
    if (ratio < rect.getAspectRatio()) {
      this.setSize_dleff0$(rect.height * ratio, rect.height);
    }
     else {
      this.setSize_dleff0$(rect.width, rect.width / ratio);
    }
    this.setPosition_dleff0$(rect.x + rect.width / 2 - this.width / 2, rect.y + rect.height / 2 - this.height / 2);
    return this;
  };
  Rectangle.prototype.canContain_dleff0$ = function (width, height) {
    return this.width >= width && this.height >= height;
  };
  Rectangle.prototype.area = function () {
    return this.width * this.height;
  };
  Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
  };
  Rectangle.prototype.inflate_7b5o5w$ = function (left, top, right, bottom) {
    this.x = this.x - left;
    this.width = this.width + (left + right);
    this.y = this.y - top;
    this.height = this.height + (top + bottom);
  };
  Rectangle.prototype.inflate_rw8g7s$ = function (pad) {
    this.inflate_7b5o5w$(pad.left, pad.top, pad.right, pad.bottom);
  };
  Rectangle.prototype.ext_dleff0$ = function (x2, y2) {
    if (x2 > this.x + this.width)
      this.width = x2 - this.x;
    if (x2 < this.x)
      this.x = x2;
    if (y2 > this.y + this.height)
      this.height = y2 - this.y;
    if (y2 < this.y)
      this.y = y2;
  };
  Rectangle.prototype.ext_jhujlw$ = function (rect) {
    var a = this.x;
    var b = rect.x;
    var minX = Math_0.min(a, b);
    var a_0 = this.x + this.width;
    var b_0 = rect.x + rect.width;
    var maxX = Math_0.max(a_0, b_0);
    this.x = minX;
    this.width = maxX - minX;
    var a_1 = this.y;
    var b_1 = rect.y;
    var minY = Math_0.min(a_1, b_1);
    var a_2 = this.y + this.height;
    var b_2 = rect.y + rect.height;
    var maxY = Math_0.max(a_2, b_2);
    this.y = minY;
    this.height = maxY - minY;
    return this;
  };
  Rectangle.prototype.scl_mx4ult$ = function (scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    this.width = this.width * scalar;
    this.height = this.height * scalar;
  };
  function Rectangle$Companion() {
    Rectangle$Companion_instance = this;
    this.pool_0 = ClearableObjectPool_init(Rectangle$Companion$pool$lambda);
  }
  Rectangle$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  Rectangle$Companion.prototype.free_o5do7t$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  function Rectangle$Companion$pool$lambda() {
    return new Rectangle();
  }
  Rectangle$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Rectangle$Companion_instance = null;
  function Rectangle$Companion_getInstance() {
    if (Rectangle$Companion_instance === null) {
      new Rectangle$Companion();
    }
    return Rectangle$Companion_instance;
  }
  Rectangle.$metadata$ = {kind: Kind_CLASS, simpleName: 'Rectangle', interfaces: [RectangleRo, Clearable]};
  Rectangle.prototype.component1 = function () {
    return this.x;
  };
  Rectangle.prototype.component2 = function () {
    return this.y;
  };
  Rectangle.prototype.component3 = function () {
    return this.width;
  };
  Rectangle.prototype.component4 = function () {
    return this.height;
  };
  Rectangle.prototype.copy_7b5o5w$ = function (x, y, width, height) {
    return new Rectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Rectangle.prototype.toString = function () {
    return 'Rectangle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Rectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Rectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function RectangleSerializer() {
    RectangleSerializer_instance = this;
  }
  var RectangleSerializer_instance = null;
  function Vector2Ro() {
  }
  Vector2Ro.prototype.component1 = function () {
    return this.x;
  };
  Vector2Ro.prototype.component2 = function () {
    return this.y;
  };
  Vector2Ro.prototype.copy = function () {
    return new Vector2(this.x, this.y);
  };
  Vector2Ro.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Vector2Ro', interfaces: []};
  function Vector2(x, y) {
    Vector2$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x_qdbnyh$_0 = x;
    this.y_qdbnzc$_0 = y;
  }
  Object.defineProperty(Vector2.prototype, 'x', {get: function () {
    return this.x_qdbnyh$_0;
  }, set: function (x) {
    this.x_qdbnyh$_0 = x;
  }});
  Object.defineProperty(Vector2.prototype, 'y', {get: function () {
    return this.y_qdbnzc$_0;
  }, set: function (y) {
    this.y_qdbnzc$_0 = y;
  }});
  Vector2.prototype.len = function () {
    return Math_0.sqrt(this.x * this.x + this.y * this.y);
  };
  Vector2.prototype.len2 = function () {
    return this.x * this.x + this.y * this.y;
  };
  Vector2.prototype.set_1fv330$ = function (v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  };
  Vector2.prototype.set_dleff0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Vector2.prototype.sub_1fv330$ = function (v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
    return this;
  };
  Vector2.prototype.sub_dleff0$ = function (x, y) {
    this.x = this.x - x;
    this.y = this.y - y;
    return this;
  };
  Vector2.prototype.nor = function () {
    var len = this.len();
    if (len > 1.0E-5) {
      this.x = this.x / len;
      this.y = this.y / len;
    }
    return this;
  };
  Vector2.prototype.add_1fv330$ = function (v) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
    return this;
  };
  Vector2.prototype.add_dleff0$ = function (x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    return this;
  };
  Vector2.prototype.dot_1fv330$ = function (v) {
    return this.x * v.x + this.y * v.y;
  };
  Vector2.prototype.dot_dleff0$ = function (ox, oy) {
    return this.x * ox + this.y * oy;
  };
  Vector2.prototype.scl_mx4ult$ = function (scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    return this;
  };
  Vector2.prototype.scl_dleff0$ = function (x, y) {
    this.x = this.x * x;
    this.y = this.y * y;
    return this;
  };
  Vector2.prototype.scl_1fv330$ = function (v) {
    this.x = this.x * v.x;
    this.y = this.y * v.y;
    return this;
  };
  Vector2.prototype.dst_1fv330$ = function (v) {
    var x_d = v.x - this.x;
    var y_d = v.y - this.y;
    return Math_0.sqrt(x_d * x_d + y_d * y_d);
  };
  Vector2.prototype.dst_dleff0$ = function (x, y) {
    var x_d = x - this.x;
    var y_d = y - this.y;
    return Math_0.sqrt(x_d * x_d + y_d * y_d);
  };
  Vector2.prototype.dst2_1fv330$ = function (v) {
    var x_d = v.x - this.x;
    var y_d = v.y - this.y;
    return x_d * x_d + y_d * y_d;
  };
  Vector2.prototype.dst2_dleff0$ = function (x, y) {
    var x_d = x - this.x;
    var y_d = y - this.y;
    return x_d * x_d + y_d * y_d;
  };
  Vector2.prototype.manhattanDst_1fv330$ = function (v) {
    var x_d = v.x - this.x;
    var y_d = v.y - this.y;
    return (x_d < 0.0 ? -x_d : x_d) + (y_d < 0.0 ? -y_d : y_d);
  };
  Vector2.prototype.limit_mx4ult$ = function (limit) {
    if (this.len2() > limit * limit) {
      this.nor();
      this.scl_mx4ult$(limit);
    }
    return this;
  };
  Vector2.prototype.random = function () {
    this.x = MathUtils_getInstance().random() * 2.0 - 1.0;
    this.y = MathUtils_getInstance().random() * 2.0 - 1.0;
    return this;
  };
  Vector2.prototype.clamp_dleff0$ = function (min, max) {
    var l2 = this.len2();
    if (l2 === 0.0)
      return this;
    if (l2 > max * max)
      return this.nor().scl_mx4ult$(max);
    if (l2 < min * min)
      return this.nor().scl_mx4ult$(min);
    return this;
  };
  Vector2.prototype.mul_1ktw3a$ = function (mat) {
    var vals = mat.values;
    var x2 = this.x * vals.get_za3lpa$(0) + this.y * vals.get_za3lpa$(3) + vals.get_za3lpa$(6);
    var y2 = this.x * vals.get_za3lpa$(1) + this.y * vals.get_za3lpa$(4) + vals.get_za3lpa$(7);
    this.x = x2;
    this.y = y2;
    return this;
  };
  Vector2.prototype.crs_1fv330$ = function (v) {
    return this.x * v.y - this.y * v.x;
  };
  Vector2.prototype.crs_dleff0$ = function (x, y) {
    return this.x * y - this.y * x;
  };
  Vector2.prototype.angleRad = function () {
    return MathUtils_getInstance().atan2_dleff0$(this.y, this.x);
  };
  Vector2.prototype.angleRad_1fv330$ = function (reference) {
    return MathUtils_getInstance().atan2_dleff0$(this.crs_1fv330$(reference), this.dot_1fv330$(reference));
  };
  Vector2.prototype.setAngleRad_mx4ult$ = function (radians) {
    this.set_dleff0$(this.len(), 0.0);
    this.rotateRad_mx4ult$(radians);
    return this;
  };
  Vector2.prototype.rotateRad_mx4ult$ = function (radians) {
    var cos = MathUtils_getInstance().cos_mx4ult$(radians);
    var sin = MathUtils_getInstance().sin_mx4ult$(radians);
    var newX = this.x * cos - this.y * sin;
    var newY = this.x * sin + this.y * cos;
    this.x = newX;
    this.y = newY;
    return this;
  };
  Vector2.prototype.lerp_hj2y21$ = function (target, alpha) {
    var invAlpha = 1.0 - alpha;
    this.x = this.x * invAlpha + target.x * alpha;
    this.y = this.y * invAlpha + target.y * alpha;
    return this;
  };
  Vector2.prototype.lerp_y2kzbl$ = function (x2, y2, alpha) {
    var invAlpha = 1.0 - alpha;
    this.x = this.x * invAlpha + x2 * alpha;
    this.y = this.y * invAlpha + y2 * alpha;
    return this;
  };
  Vector2.prototype.interpolate_1n5v2p$ = function (target, alpha, interpolation) {
    return this.lerp_hj2y21$(target, interpolation.apply_mx4ult$(alpha));
  };
  Vector2.prototype.epsilonEquals_f37ny8$ = function (other, epsilon) {
    if (other == null)
      return false;
    var value = other.x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = other.y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    return true;
  };
  Vector2.prototype.epsilonEquals_y2kzbl$ = function (x, y, epsilon) {
    var value = x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    return true;
  };
  Vector2.prototype.isUnit = function () {
    return this.isUnit_mx4ult$(1.0E-9);
  };
  Vector2.prototype.isUnit_mx4ult$ = function (margin) {
    var value = this.len2() - 1.0;
    return (value < 0.0 ? -value : value) < margin;
  };
  Vector2.prototype.isZero = function () {
    return this.x === 0.0 && this.y === 0.0;
  };
  Vector2.prototype.isZero_mx4ult$ = function (margin2) {
    return this.len2() < margin2;
  };
  Vector2.prototype.isOnLine_1fv330$ = function (other) {
    return MathUtils_getInstance().isZero_dleff0$(this.x * other.y - this.y * other.x);
  };
  Vector2.prototype.isOnLine_hj2y21$ = function (other, epsilon2) {
    return MathUtils_getInstance().isZero_dleff0$(this.x * other.y - this.y * other.x, epsilon2);
  };
  Vector2.prototype.isCollinear_hj2y21$ = function (other, epsilon) {
    return this.isOnLine_hj2y21$(other, epsilon) && this.dot_1fv330$(other) > 0.0;
  };
  Vector2.prototype.isCollinear_1fv330$ = function (other) {
    return this.isOnLine_1fv330$(other) && this.dot_1fv330$(other) > 0.0;
  };
  Vector2.prototype.isCollinearOpposite_hj2y21$ = function (other, epsilon) {
    return this.isOnLine_hj2y21$(other, epsilon) && this.dot_1fv330$(other) < 0.0;
  };
  Vector2.prototype.isCollinearOpposite_1fv330$ = function (other) {
    return this.isOnLine_1fv330$(other) && this.dot_1fv330$(other) < 0.0;
  };
  Vector2.prototype.isPerpendicular_1fv330$ = function (vector) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv330$(vector));
  };
  Vector2.prototype.isPerpendicular_hj2y21$ = function (vector, epsilon) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv330$(vector), epsilon);
  };
  Vector2.prototype.hasSameDirection_1fv330$ = function (vector) {
    return this.dot_1fv330$(vector) > 0;
  };
  Vector2.prototype.hasOppositeDirection_1fv330$ = function (vector) {
    return this.dot_1fv330$(vector) < 0;
  };
  Vector2.prototype.ext_dleff0$ = function (x, y) {
    if (x > this.x)
      this.x = x;
    if (y > this.y)
      this.y = y;
  };
  Vector2.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
  };
  Vector2.prototype.free = function () {
    Vector2$Companion_getInstance().pool_0.free_11rb$(this);
  };
  function Vector2$Companion() {
    Vector2$Companion_instance = this;
    this.X = new Vector2(1.0, 0.0);
    this.Y = new Vector2(0.0, 1.0);
    this.ZERO = new Vector2(0.0, 0.0);
    this.pool_0 = ClearableObjectPool_init(Vector2$Companion$pool$lambda);
  }
  Vector2$Companion.prototype.len_dleff0$ = function (x, y) {
    return Math_0.sqrt(x * x + y * y);
  };
  Vector2$Companion.prototype.len2_dleff0$ = function (x, y) {
    return x * x + y * y;
  };
  Vector2$Companion.prototype.dot_7b5o5w$ = function (x1, y1, x2, y2) {
    return x1 * x2 + y1 * y2;
  };
  Vector2$Companion.prototype.dst_7b5o5w$ = function (x1, y1, x2, y2) {
    var x_d = x2 - x1;
    var y_d = y2 - y1;
    return Math_0.sqrt(x_d * x_d + y_d * y_d);
  };
  Vector2$Companion.prototype.dst2_7b5o5w$ = function (x1, y1, x2, y2) {
    var x_d = x2 - x1;
    var y_d = y2 - y1;
    return x_d * x_d + y_d * y_d;
  };
  Vector2$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  Vector2$Companion.prototype.free_9wm29l$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  function Vector2$Companion$pool$lambda() {
    return new Vector2();
  }
  Vector2$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Vector2$Companion_instance = null;
  function Vector2$Companion_getInstance() {
    if (Vector2$Companion_instance === null) {
      new Vector2$Companion();
    }
    return Vector2$Companion_instance;
  }
  Vector2.$metadata$ = {kind: Kind_CLASS, simpleName: 'Vector2', interfaces: [Vector2Ro, Clearable]};
  Vector2.prototype.component1 = function () {
    return this.x;
  };
  Vector2.prototype.component2 = function () {
    return this.y;
  };
  Vector2.prototype.copy_dleff0$ = function (x, y) {
    return new Vector2(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vector2.prototype.toString = function () {
    return 'Vector2(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Vector2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vector2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Vector2Serializer() {
    Vector2Serializer_instance = this;
  }
  var Vector2Serializer_instance = null;
  function Vector3Ro() {
  }
  Vector3Ro.prototype.component1 = function () {
    return this.x;
  };
  Vector3Ro.prototype.component2 = function () {
    return this.y;
  };
  Vector3Ro.prototype.component3 = function () {
    return this.z;
  };
  Vector3Ro.prototype.isUnit_mx4ult$ = function (margin, callback$default) {
    if (margin === void 0)
      margin = 1.0E-9;
    return callback$default ? callback$default(margin) : this.isUnit_mx4ult$$default(margin);
  };
  Vector3Ro.prototype.closeTo_7aight$ = function (other, epsilon, callback$default) {
    if (epsilon === void 0)
      epsilon = 1.0E-4;
    return callback$default ? callback$default(other, epsilon) : this.closeTo_7aight$$default(other, epsilon);
  };
  Vector3Ro.prototype.closeTo_7b5o5w$ = function (x, y, z, epsilon, callback$default) {
    if (epsilon === void 0)
      epsilon = 1.0E-4;
    return callback$default ? callback$default(x, y, z, epsilon) : this.closeTo_7b5o5w$$default(x, y, z, epsilon);
  };
  Vector3Ro.prototype.copy = function () {
    return new Vector3(this.x, this.y, this.z);
  };
  Vector3Ro.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Vector3Ro', interfaces: []};
  function Vector3(x, y, z) {
    Vector3$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    this.x_qdcay0$_0 = x;
    this.y_qdcayv$_0 = y;
    this.z_qdcazq$_0 = z;
  }
  Object.defineProperty(Vector3.prototype, 'x', {get: function () {
    return this.x_qdcay0$_0;
  }, set: function (x) {
    this.x_qdcay0$_0 = x;
  }});
  Object.defineProperty(Vector3.prototype, 'y', {get: function () {
    return this.y_qdcayv$_0;
  }, set: function (y) {
    this.y_qdcayv$_0 = y;
  }});
  Object.defineProperty(Vector3.prototype, 'z', {get: function () {
    return this.z_qdcazq$_0;
  }, set: function (z) {
    this.z_qdcazq$_0 = z;
  }});
  Vector3.prototype.set_y2kzbl$ = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  };
  Vector3.prototype.set_1fv2cb$ = function (vector) {
    return this.set_y2kzbl$(vector.x, vector.y, vector.z);
  };
  Vector3.prototype.set_q3cr5i$ = function (values) {
    return this.set_y2kzbl$(values[0], values[1], values[2]);
  };
  Vector3.prototype.set_hj2y21$ = function (vector, z) {
    if (z === void 0)
      z = 0.0;
    return this.set_y2kzbl$(vector.x, vector.y, z);
  };
  Vector3.prototype.add_1fv2cb$ = function (vector) {
    return this.add_y2kzbl$(vector.x, vector.y, vector.z);
  };
  Vector3.prototype.add_y2kzbl$ = function (x, y, z) {
    return this.set_y2kzbl$(this.x + x, this.y + y, this.z + z);
  };
  Vector3.prototype.add_mx4ult$ = function (values) {
    return this.set_y2kzbl$(this.x + values, this.y + values, this.z + values);
  };
  Vector3.prototype.sub_1fv2cb$ = function (a_vec) {
    return this.sub_y2kzbl$(a_vec.x, a_vec.y, a_vec.z);
  };
  Vector3.prototype.sub_y2kzbl$ = function (x, y, z) {
    return this.set_y2kzbl$(this.x - x, this.y - y, this.z - z);
  };
  Vector3.prototype.sub_mx4ult$ = function (value) {
    return this.set_y2kzbl$(this.x - value, this.y - value, this.z - value);
  };
  Vector3.prototype.scl_mx4ult$ = function (scalar) {
    return this.set_y2kzbl$(this.x * scalar, this.y * scalar, this.z * scalar);
  };
  Vector3.prototype.scl_1fv2cb$ = function (other) {
    return this.set_y2kzbl$(this.x * other.x, this.y * other.y, this.z * other.z);
  };
  Vector3.prototype.scl_y2kzbl$ = function (vx, vy, vz) {
    return this.set_y2kzbl$(this.x * vx, this.y * vy, this.z * vz);
  };
  Vector3.prototype.len = function () {
    return Math_0.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };
  Vector3.prototype.len_mx4ult$ = function (value) {
    return this.nor().scl_mx4ult$(value);
  };
  Vector3.prototype.len2 = function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  };
  Vector3.prototype.idt_1fv2cb$ = function (vector) {
    return this.x === vector.x && this.y === vector.y && this.z === vector.z;
  };
  Vector3.prototype.dst_1fv2cb$ = function (vector) {
    var a = vector.x - this.x;
    var b = vector.y - this.y;
    var c = vector.z - this.z;
    return Math_0.sqrt(a * a + b * b + c * c);
  };
  Vector3.prototype.dst_y2kzbl$ = function (x, y, z) {
    var a = x - this.x;
    var b = y - this.y;
    var c = z - this.z;
    return Math_0.sqrt(a * a + b * b + c * c);
  };
  Vector3.prototype.dst2_1fv2cb$ = function (point) {
    var a = point.x - this.x;
    var b = point.y - this.y;
    var c = point.z - this.z;
    return a * a + b * b + c * c;
  };
  Vector3.prototype.dst2_y2kzbl$ = function (x, y, z) {
    var a = x - this.x;
    var b = y - this.y;
    var c = z - this.z;
    return a * a + b * b + c * c;
  };
  Vector3.prototype.nor = function () {
    var len2 = this.len2();
    if (len2 === 0.0 || len2 === 1.0)
      return this;
    return this.scl_mx4ult$(1.0 / Math_0.sqrt(len2));
  };
  Vector3.prototype.dot_1fv2cb$ = function (vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  };
  Vector3.prototype.dot_y2kzbl$ = function (x, y, z) {
    return this.x * x + this.y * y + this.z * z;
  };
  Vector3.prototype.crs_1fv2cb$ = function (vector) {
    return this.set_y2kzbl$(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
  };
  Vector3.prototype.crs_y2kzbl$ = function (x, y, z) {
    return this.set_y2kzbl$(this.y * z - this.z * y, this.z * x - this.x * z, this.x * y - this.y * x);
  };
  Vector3.prototype.mul4x3_hcyabg$ = function (matrix) {
    return this.set_y2kzbl$(this.x * matrix.get_za3lpa$(0) + this.y * matrix.get_za3lpa$(3) + this.z * matrix.get_za3lpa$(6) + matrix.get_za3lpa$(9), this.x * matrix.get_za3lpa$(1) + this.y * matrix.get_za3lpa$(4) + this.z * matrix.get_za3lpa$(7) + matrix.get_za3lpa$(10), this.x * matrix.get_za3lpa$(2) + this.y * matrix.get_za3lpa$(5) + this.z * matrix.get_za3lpa$(8) + matrix.get_za3lpa$(11));
  };
  Vector3.prototype.mul_pekf88$ = function (matrix) {
    var lMat = matrix.values;
    return this.set_y2kzbl$(this.x * lMat.get_za3lpa$(0) + this.y * lMat.get_za3lpa$(4) + this.z * lMat.get_za3lpa$(8) + lMat.get_za3lpa$(12), this.x * lMat.get_za3lpa$(1) + this.y * lMat.get_za3lpa$(5) + this.z * lMat.get_za3lpa$(9) + lMat.get_za3lpa$(13), this.x * lMat.get_za3lpa$(2) + this.y * lMat.get_za3lpa$(6) + this.z * lMat.get_za3lpa$(10) + lMat.get_za3lpa$(14));
  };
  Vector3.prototype.traMul_pekf88$ = function (matrix) {
    var lMat = matrix.values;
    return this.set_y2kzbl$(this.x * lMat.get_za3lpa$(0) + this.y * lMat.get_za3lpa$(1) + this.z * lMat.get_za3lpa$(2) + lMat.get_za3lpa$(3), this.x * lMat.get_za3lpa$(4) + this.y * lMat.get_za3lpa$(5) + this.z * lMat.get_za3lpa$(6) + lMat.get_za3lpa$(7), this.x * lMat.get_za3lpa$(8) + this.y * lMat.get_za3lpa$(9) + this.z * lMat.get_za3lpa$(10) + lMat.get_za3lpa$(11));
  };
  Vector3.prototype.mul_pekfyx$ = function (matrix) {
    var lMat = matrix.values;
    return this.set_y2kzbl$(this.x * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M00) + this.y * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M01) + this.z * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M02), this.x * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M10) + this.y * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M11) + this.z * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M12), this.x * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M20) + this.y * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M21) + this.z * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M22));
  };
  Vector3.prototype.traMul_pekfyx$ = function (matrix) {
    var lMat = matrix.values;
    return this.set_y2kzbl$(this.x * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M00) + this.y * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M10) + this.z * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M20), this.x * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M01) + this.y * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M11) + this.z * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M21), this.x * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M02) + this.y * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M12) + this.z * lMat.get_za3lpa$(Matrix3$Companion_getInstance().M22));
  };
  Vector3.prototype.mul_qe7e4j$ = function (quat) {
    return quat.transform_9wm29k$(this);
  };
  Vector3.prototype.rot_pekf88$ = function (matrix) {
    var lMat = matrix.values;
    return this.set_y2kzbl$(this.x * lMat.get_za3lpa$(0) + this.y * lMat.get_za3lpa$(4) + this.z * lMat.get_za3lpa$(8), this.x * lMat.get_za3lpa$(1) + this.y * lMat.get_za3lpa$(5) + this.z * lMat.get_za3lpa$(9), this.x * lMat.get_za3lpa$(2) + this.y * lMat.get_za3lpa$(6) + this.z * lMat.get_za3lpa$(10));
  };
  Vector3.prototype.unrotate_pekf88$ = function (matrix) {
    var lMat = matrix.values;
    return this.set_y2kzbl$(this.x * lMat.get_za3lpa$(0) + this.y * lMat.get_za3lpa$(1) + this.z * lMat.get_za3lpa$(2), this.x * lMat.get_za3lpa$(4) + this.y * lMat.get_za3lpa$(5) + this.z * lMat.get_za3lpa$(6), this.x * lMat.get_za3lpa$(8) + this.y * lMat.get_za3lpa$(9) + this.z * lMat.get_za3lpa$(10));
  };
  Vector3.prototype.untransform_pekf88$ = function (matrix) {
    var lMat = matrix.values;
    this.x = this.x - lMat.get_za3lpa$(12);
    this.y = this.y - lMat.get_za3lpa$(12);
    this.z = this.z - lMat.get_za3lpa$(12);
    return this.set_y2kzbl$(this.x * lMat.get_za3lpa$(0) + this.y * lMat.get_za3lpa$(1) + this.z * lMat.get_za3lpa$(2), this.x * lMat.get_za3lpa$(4) + this.y * lMat.get_za3lpa$(5) + this.z * lMat.get_za3lpa$(6), this.x * lMat.get_za3lpa$(8) + this.y * lMat.get_za3lpa$(9) + this.z * lMat.get_za3lpa$(10));
  };
  Vector3.prototype.rotate_7b5o5w$ = function (radians, axisX, axisY, axisZ) {
    return this.mul_pekf88$(Vector3$Companion_getInstance().tmpMat_0.idt().rotate_7b5o5w$(axisX, axisY, axisZ, radians));
  };
  Vector3.prototype.rotate_ck0e8y$ = function (radians, axis) {
    Vector3$Companion_getInstance().tmpMat_0.idt().rotate_pz1gqy$(axis, radians);
    return this.mul_pekf88$(Vector3$Companion_getInstance().tmpMat_0);
  };
  Vector3.prototype.isUnit_mx4ult$$default = function (margin) {
    var value = this.len2() - 1.0;
    return (value < 0.0 ? -value : value) < margin;
  };
  Vector3.prototype.isZero = function () {
    return this.x === 0.0 && this.y === 0.0 && this.z === 0.0;
  };
  Vector3.prototype.isZero_mx4ult$ = function (margin) {
    return this.len2() < margin;
  };
  Vector3.prototype.isOnLine_pz1gqy$ = function (other, epsilon) {
    return Vector3$Companion_getInstance().len2_y2kzbl$(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x) <= epsilon;
  };
  Vector3.prototype.isOnLine_1fv2cb$ = function (other) {
    return Vector3$Companion_getInstance().len2_y2kzbl$(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x) <= MathUtils_getInstance().FLOAT_ROUNDING_ERROR;
  };
  Vector3.prototype.isCollinear_pz1gqy$ = function (other, epsilon) {
    return this.isOnLine_pz1gqy$(other, epsilon) && this.hasSameDirection_1fv2cb$(other);
  };
  Vector3.prototype.isCollinear_1fv2cb$ = function (other) {
    return this.isOnLine_1fv2cb$(other) && this.hasSameDirection_1fv2cb$(other);
  };
  Vector3.prototype.isCollinearOpposite_pz1gqy$ = function (other, epsilon) {
    return this.isOnLine_pz1gqy$(other, epsilon) && this.hasOppositeDirection_1fv2cb$(other);
  };
  Vector3.prototype.isCollinearOpposite_1fv2cb$ = function (other) {
    return this.isOnLine_1fv2cb$(other) && this.hasOppositeDirection_1fv2cb$(other);
  };
  Vector3.prototype.isPerpendicular_1fv2cb$ = function (vector) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv2cb$(vector));
  };
  Vector3.prototype.isPerpendicular_pz1gqy$ = function (vector, epsilon) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv2cb$(vector), epsilon);
  };
  Vector3.prototype.hasSameDirection_1fv2cb$ = function (vector) {
    return this.dot_1fv2cb$(vector) > 0;
  };
  Vector3.prototype.hasOppositeDirection_1fv2cb$ = function (vector) {
    return this.dot_1fv2cb$(vector) < 0;
  };
  Vector3.prototype.lerp_pz1gqy$ = function (target, alpha) {
    this.scl_mx4ult$(1.0 - alpha);
    this.add_y2kzbl$(target.x * alpha, target.y * alpha, target.z * alpha);
    return this;
  };
  Vector3.prototype.interpolate_y8lxoy$ = function (target, alpha, interpolator) {
    return this.lerp_pz1gqy$(target, interpolator.apply_y2kzbl$(0.0, 1.0, alpha));
  };
  Vector3.prototype.slerp_pz1gqy$ = function (target, alpha) {
    var dot = this.dot_1fv2cb$(target);
    if (dot > 0.9995 || dot < -0.9995)
      return this.lerp_pz1gqy$(target, alpha);
    var theta0 = Math_0.acos(dot);
    var theta = theta0 * alpha;
    var st = MathUtils_getInstance().sin_mx4ult$(theta);
    var tx = target.x - this.x * dot;
    var ty = target.y - this.y * dot;
    var tz = target.z - this.z * dot;
    var l2 = tx * tx + ty * ty + tz * tz;
    var dl = st * (l2 < 1.0E-4 ? 1.0 : 1.0 / Math_0.sqrt(l2));
    return this.scl_mx4ult$(MathUtils_getInstance().cos_mx4ult$(theta)).add_y2kzbl$(tx * dl, ty * dl, tz * dl).nor();
  };
  Vector3.prototype.limit_mx4ult$ = function (limit) {
    if (this.len2() > limit * limit)
      this.nor().scl_mx4ult$(limit);
    return this;
  };
  Vector3.prototype.random = function () {
    this.x = MathUtils_getInstance().random() * 2.0 - 1.0;
    this.y = MathUtils_getInstance().random() * 2.0 - 1.0;
    this.z = MathUtils_getInstance().random() * 2.0 - 1.0;
    return this;
  };
  Vector3.prototype.clamp_dleff0$ = function (min, max) {
    var l2 = this.len2();
    if (l2 === 0.0)
      return this;
    if (l2 > max * max)
      return this.nor().scl_mx4ult$(max);
    if (l2 < min * min)
      return this.nor().scl_mx4ult$(min);
    return this;
  };
  Vector3.prototype.closeTo_7aight$$default = function (other, epsilon) {
    if (other == null)
      return false;
    var value = other.x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = other.y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    var value_1 = other.z - this.z;
    if ((value_1 < 0.0 ? -value_1 : value_1) > epsilon)
      return false;
    return true;
  };
  Vector3.prototype.closeTo_7b5o5w$$default = function (x, y, z, epsilon) {
    var value = x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    var value_1 = z - this.z;
    if ((value_1 < 0.0 ? -value_1 : value_1) > epsilon)
      return false;
    return true;
  };
  Vector3.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
  };
  Vector3.prototype.free = function () {
    Vector3$Companion_getInstance().pool_0.free_11rb$(this);
  };
  function Vector3$Companion() {
    Vector3$Companion_instance = this;
    this.X = new Vector3(1.0, 0.0, 0.0);
    this.Y = new Vector3(0.0, 1.0, 0.0);
    this.Z = new Vector3(0.0, 0.0, 1.0);
    this.NEG_X = new Vector3(-1.0, 0.0, 0.0);
    this.NEG_Y = new Vector3(0.0, -1.0, 0.0);
    this.NEG_Z = new Vector3(0.0, 0.0, -1.0);
    this.ZERO = new Vector3(0.0, 0.0, 0.0);
    this.ONE = new Vector3(1.0, 1.0, 1.0);
    this.tmpMat_0 = new Matrix4();
    this.pool_0 = ClearableObjectPool_init(Vector3$Companion$pool$lambda);
  }
  Vector3$Companion.prototype.len_y2kzbl$ = function (x, y, z) {
    return Math_0.sqrt(x * x + y * y + z * z);
  };
  Vector3$Companion.prototype.len2_y2kzbl$ = function (x, y, z) {
    return x * x + y * y + z * z;
  };
  Vector3$Companion.prototype.dst_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    var a = x2 - x1;
    var b = y2 - y1;
    var c = z2 - z1;
    return Math_0.sqrt(a * a + b * b + c * c);
  };
  Vector3$Companion.prototype.dst2_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    var a = x2 - x1;
    var b = y2 - y1;
    var c = z2 - z1;
    return a * a + b * b + c * c;
  };
  Vector3$Companion.prototype.dot_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    return x1 * x2 + y1 * y2 + z1 * z2;
  };
  Vector3$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  Vector3$Companion.prototype.free_9wm29k$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  function Vector3$Companion$pool$lambda() {
    return new Vector3();
  }
  Vector3$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Vector3$Companion_instance = null;
  function Vector3$Companion_getInstance() {
    if (Vector3$Companion_instance === null) {
      new Vector3$Companion();
    }
    return Vector3$Companion_instance;
  }
  Vector3.$metadata$ = {kind: Kind_CLASS, simpleName: 'Vector3', interfaces: [Vector3Ro, Clearable]};
  Vector3.prototype.component1 = function () {
    return this.x;
  };
  Vector3.prototype.component2 = function () {
    return this.y;
  };
  Vector3.prototype.component3 = function () {
    return this.z;
  };
  Vector3.prototype.copy_y2kzbl$ = function (x, y, z) {
    return new Vector3(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  Vector3.prototype.toString = function () {
    return 'Vector3(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + ')';
  };
  Vector3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  Vector3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Vector3Serializer() {
    Vector3Serializer_instance = this;
  }
  var Vector3Serializer_instance = null;
  function Crc32() {
    Crc32$Companion_getInstance();
    this.crc_0 = 0;
    this.crcTable_0 = this.makeCrcTable_0();
  }
  Crc32.prototype.makeCrcTable_0 = function () {
    var table = new Int32Array(256);
    for (var n = 0; n <= 255; n++) {
      var c = n;
      var k = 8;
      while ((k = k - 1 | 0, k) >= 0) {
        if ((c & 1) !== 0)
          c = -306674912 ^ c >>> 1;
        else
          c = c >>> 1;
      }
      table[n] = c;
    }
    return table;
  };
  Crc32.prototype.getValue = function () {
    return Kotlin.Long.fromInt(this.crc_0).and(new Kotlin.Long(-1, 0));
  };
  Crc32.prototype.reset = function () {
    this.crc_0 = 0;
  };
  Crc32.prototype.update_s8cxhz$ = function (longVal) {
    this.update_s8j3t7$(toByte(longVal.shiftRight(56).toInt()));
    this.update_s8j3t7$(toByte(longVal.shiftRight(48).toInt()));
    this.update_s8j3t7$(toByte(longVal.shiftRight(40).toInt()));
    this.update_s8j3t7$(toByte(longVal.shiftRight(32).toInt()));
    this.update_s8j3t7$(toByte(longVal.shiftRight(24).toInt()));
    this.update_s8j3t7$(toByte(longVal.shiftRight(16).toInt()));
    this.update_s8j3t7$(toByte(longVal.shiftRight(8).toInt()));
    this.update_s8j3t7$(toByte(longVal.toInt()));
  };
  Crc32.prototype.update_za3lpa$ = function (intVal) {
    this.update_s8j3t7$(toByte(intVal >> 24));
    this.update_s8j3t7$(toByte(intVal >> 16));
    this.update_s8j3t7$(toByte(intVal >> 8));
    this.update_s8j3t7$(toByte(intVal));
  };
  Crc32.prototype.update_s8j3t7$ = function (byteVal) {
    var c = ~this.crc_0;
    c = this.crcTable_0[(c ^ byteVal) & 255] ^ c >>> 8;
    this.crc_0 = ~c;
  };
  Crc32.prototype.update_mj6st8$ = function (buf, off, len) {
    if (off === void 0)
      off = 0;
    if (len === void 0)
      len = buf.length;
    var tmp$;
    var i = off;
    var n = len;
    var c = ~this.crc_0;
    while ((n = n - 1 | 0, n) >= 0) {
      c = this.crcTable_0[(c ^ buf[tmp$ = i, i = tmp$ + 1 | 0, tmp$]) & 255] ^ c >>> 8;
    }
    this.crc_0 = ~c;
  };
  function Crc32$Companion() {
    Crc32$Companion_instance = this;
    this.CRC = new Crc32();
  }
  Crc32$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Crc32$Companion_instance = null;
  function Crc32$Companion_getInstance() {
    if (Crc32$Companion_instance === null) {
      new Crc32$Companion();
    }
    return Crc32$Companion_instance;
  }
  Crc32.$metadata$ = {kind: Kind_CLASS, simpleName: 'Crc32', interfaces: []};
  function ModTagRo() {
  }
  ModTagRo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ModTagRo', interfaces: []};
  function ModTag() {
  }
  ModTag.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ModTag', interfaces: [ModTagRo]};
  function ModTagImpl() {
    ModTagImpl$Companion_getInstance();
    this._id_0 = (ModTagImpl$Companion_getInstance().counter_0 = ModTagImpl$Companion_getInstance().counter_0 + 1 | 0, ModTagImpl$Companion_getInstance().counter_0);
    this._modCount_0 = 0;
  }
  Object.defineProperty(ModTagImpl.prototype, 'crc', {get: function () {
    return Kotlin.Long.fromInt(this._id_0).shiftLeft(16).or(Kotlin.Long.fromInt(this._modCount_0));
  }});
  ModTagImpl.prototype.increment = function () {
    this._modCount_0 = this._modCount_0 + 1 | 0;
  };
  function ModTagImpl$Companion() {
    ModTagImpl$Companion_instance = this;
    this.counter_0 = 0;
  }
  ModTagImpl$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ModTagImpl$Companion_instance = null;
  function ModTagImpl$Companion_getInstance() {
    if (ModTagImpl$Companion_instance === null) {
      new ModTagImpl$Companion();
    }
    return ModTagImpl$Companion_instance;
  }
  ModTagImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'ModTagImpl', interfaces: [ModTag]};
  function ModTagWatch() {
    this.crc_0 = Kotlin.Long.NEG_ONE;
  }
  ModTagWatch.prototype.set_i0o3f$ = function (target) {
    if (equals(this.crc_0, target.crc))
      return false;
    this.crc_0 = target.crc;
    return true;
  };
  ModTagWatch.prototype.set_93m8p2$ = function (targets) {
    var tmp$;
    Crc32$Companion_getInstance().CRC.reset();
    tmp$ = get_lastIndex(targets);
    for (var i = 0; i <= tmp$; i++) {
      var target = targets.get_za3lpa$(i);
      Crc32$Companion_getInstance().CRC.update_s8cxhz$(target.crc);
    }
    var newCrc = Crc32$Companion_getInstance().CRC.getValue();
    if (equals(this.crc_0, newCrc))
      return false;
    this.crc_0 = newCrc;
    return true;
  };
  ModTagWatch.prototype.clear = function () {
    this.crc_0 = Kotlin.Long.NEG_ONE;
  };
  ModTagWatch.$metadata$ = {kind: Kind_CLASS, simpleName: 'ModTagWatch', interfaces: [Clearable]};
  function Observable() {
  }
  Observable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Observable', interfaces: []};
  function bind($receiver, callback) {
    return new ObservableListBinding($receiver, callback);
  }
  function ObservableListBinding(list, callback) {
    this.list_0 = list;
    this.callback_0 = callback;
    this.list_0.added.add_trkh7z$(getCallableRef('addedHandler', function ($receiver, index, element) {
      return $receiver.addedHandler_0(index, element), Unit;
    }.bind(null, this)));
    this.list_0.removed.add_trkh7z$(getCallableRef('removedHandler', function ($receiver, index, element) {
      return $receiver.removedHandler_0(index, element), Unit;
    }.bind(null, this)));
    this.list_0.changed.add_trkh7z$(getCallableRef('changedHandler', function ($receiver, index, old, new_0) {
      return $receiver.changedHandler_0(index, old, new_0), Unit;
    }.bind(null, this)));
    this.list_0.modified.add_trkh7z$(getCallableRef('elementModifiedHandler', function ($receiver, index, element) {
      return $receiver.elementModifiedHandler_0(index, element), Unit;
    }.bind(null, this)));
    this.list_0.reset.add_trkh7z$(this.callback_0);
    this.callback_0();
  }
  ObservableListBinding.prototype.addedHandler_0 = function (index, element) {
    this.callback_0();
  };
  ObservableListBinding.prototype.removedHandler_0 = function (index, element) {
    this.callback_0();
  };
  ObservableListBinding.prototype.changedHandler_0 = function (index, old, new_0) {
    this.callback_0();
  };
  ObservableListBinding.prototype.elementModifiedHandler_0 = function (index, element) {
    this.callback_0();
  };
  ObservableListBinding.prototype.dispose = function () {
    this.list_0.added.remove_trkh7z$(getCallableRef('addedHandler', function ($receiver, index, element) {
      return $receiver.addedHandler_0(index, element), Unit;
    }.bind(null, this)));
    this.list_0.removed.remove_trkh7z$(getCallableRef('removedHandler', function ($receiver, index, element) {
      return $receiver.removedHandler_0(index, element), Unit;
    }.bind(null, this)));
    this.list_0.changed.remove_trkh7z$(getCallableRef('changedHandler', function ($receiver, index, old, new_0) {
      return $receiver.changedHandler_0(index, old, new_0), Unit;
    }.bind(null, this)));
    this.list_0.modified.remove_trkh7z$(getCallableRef('elementModifiedHandler', function ($receiver, index, element) {
      return $receiver.elementModifiedHandler_0(index, element), Unit;
    }.bind(null, this)));
    this.list_0.reset.remove_trkh7z$(this.callback_0);
  };
  ObservableListBinding.$metadata$ = {kind: Kind_CLASS, simpleName: 'ObservableListBinding', interfaces: [Disposable]};
  function JsonSerializer() {
    JsonSerializer_instance = this;
  }
  JsonSerializer.prototype.read_11rb$ = function (data) {
    return new JsonNode(data, 0, data.length);
  };
  JsonSerializer.prototype.write_ma9gy0$ = function (callback) {
    return this.write_9nik4k$(callback, '\t', '\n');
  };
  JsonSerializer.prototype.write_9nik4k$ = function (callback, tabStr, returnStr) {
    var buffer = new StringBuilder();
    var writer = new JsonWriter(buffer, '', tabStr, returnStr);
    callback(writer);
    return buffer.toString();
  };
  function JsonSerializer$write$lambda$lambda(closure$to, closure$value) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$value, it);
      return Unit;
    };
  }
  function JsonSerializer$write$lambda(closure$to, closure$value) {
    return function (it) {
      it.obj_qpf9uf$(true, JsonSerializer$write$lambda$lambda(closure$to, closure$value));
      return Unit;
    };
  }
  JsonSerializer.prototype.write_p3gpkk$ = function (value, to, tabStr, returnStr) {
    return this.write_9nik4k$(JsonSerializer$write$lambda(to, value), tabStr, returnStr);
  };
  JsonSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonSerializer', interfaces: [Serializer]};
  var JsonSerializer_instance = null;
  function JsonSerializer_getInstance() {
    if (JsonSerializer_instance === null) {
      new JsonSerializer();
    }
    return JsonSerializer_instance;
  }
  function JsonNode(source, fromIndex, toIndex) {
    this.source_0 = source;
    this._properties_0 = HashMap_init();
    this._elements_0 = ArrayList_init();
    this.isParsed_0 = false;
    this.fromIndex_0 = 0;
    this.toIndex_0 = 0;
    this.subStr_0 = null;
    var fromTrimmed = fromIndex;
    var toTrimmed = toIndex;
    while (fromTrimmed < toTrimmed && isWhitespace(this.source_0.charCodeAt(fromTrimmed))) {
      fromTrimmed = fromTrimmed + 1 | 0;
    }
    while (fromTrimmed < toTrimmed && isWhitespace(this.source_0.charCodeAt(toTrimmed - 1 | 0))) {
      toTrimmed = toTrimmed - 1 | 0;
    }
    this.fromIndex_0 = fromTrimmed;
    this.toIndex_0 = toTrimmed;
    this.subStr_0 = new SubString(this.source_0, fromTrimmed, toTrimmed);
    this.marker_0 = 0;
  }
  JsonNode.prototype.parseObject_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.isParsed_0)
      return;
    this.isParsed_0 = true;
    if (this.source_0.length === 0)
      return;
    var isObject = this.source_0.charCodeAt(this.fromIndex_0) === 123;
    if (!isObject && this.source_0.charCodeAt(this.fromIndex_0) !== 91)
      return;
    this.marker_0 = this.fromIndex_0 + 1 | 0;
    var tagStack = ArrayList_init();
    while (this.marker_0 < this.toIndex_0) {
      this.consumeWhitespace_0();
      while (this.source_0.charCodeAt(this.marker_0) === 44) {
        this.marker_0 = this.marker_0 + 1 | 0;
        this.consumeWhitespace_0();
      }
      var char = this.source_0.charCodeAt(this.marker_0);
      if (char === 125 || char === 93)
        break;
      if (!isObject || char === 34) {
        var identifier = null;
        if (isObject) {
          this.marker_0 = this.marker_0 + 1 | 0;
          var identifierStartIndex = this.marker_0;
          while (!(this.source_0.charCodeAt(this.marker_0) === 34 && this.source_0.charCodeAt(this.marker_0 - 1 | 0) !== 92)) {
            if (this.marker_0 >= this.toIndex_0)
              throw Exception_init("Expected '\"', but reached end of stream");
            this.marker_0 = this.marker_0 + 1 | 0;
          }
          identifier = new SubString(this.source_0, identifierStartIndex, (tmp$ = this.marker_0, this.marker_0 = tmp$ + 1 | 0, tmp$));
        }
        this.consumeWhitespace_0();
        if (isObject) {
          if (this.source_0.charCodeAt((tmp$_0 = this.marker_0, this.marker_0 = tmp$_0 + 1 | 0, tmp$_0)) !== 58)
            throw Exception_init("Expected ':', but instead found: " + this.source_0.substring(this.marker_0, this.marker_0 + 20 | 0));
        }
        var valueStartIndex = this.marker_0;
        tagStack.clear();
        var isString = false;
        while (this.marker_0 < this.toIndex_0) {
          var vC = this.source_0.charCodeAt(this.marker_0);
          if (tagStack.isEmpty() && (vC === 125 || vC === 93)) {
            break;
          }
          var last = unboxChar(peek(tagStack));
          if (last != null && vC === last && (!isString || this.source_0.charCodeAt(this.marker_0 - 1 | 0) !== 92)) {
            pop(tagStack);
            isString = false;
          }
           else if (!isString) {
            if (vC === 123) {
              tagStack.add_11rb$(toBoxedChar(125));
            }
             else if (vC === 91) {
              tagStack.add_11rb$(toBoxedChar(93));
            }
             else if (vC === 39) {
              tagStack.add_11rb$(toBoxedChar(39));
              isString = true;
            }
             else if (vC === 34) {
              tagStack.add_11rb$(toBoxedChar(34));
              isString = true;
            }
          }
          if (tagStack.isEmpty() && vC === 44) {
            break;
          }
          this.marker_0 = this.marker_0 + 1 | 0;
        }
        if (!tagStack.isEmpty()) {
          throw Exception_init('Expected ' + ((tmp$_1 = unboxChar(peek(tagStack))) === null ? null : String.fromCharCode(tmp$_1)) + ', but reached end of stream');
        }
        if (isObject) {
          var $receiver = this._properties_0;
          var key = ensureNotNull(identifier).toString();
          var value = new JsonNode(this.source_0, valueStartIndex, this.marker_0);
          $receiver.put_xwzc9p$(key, value);
        }
         else {
          this._elements_0.add_11rb$(new JsonNode(this.source_0, valueStartIndex, this.marker_0));
        }
      }
       else {
        if (isObject)
          throw Exception_init('Expected ' + '"' + ', but instead found: ' + this.source_0.substring(this.marker_0, this.marker_0 + 20 | 0));
        else
          throw Exception_init('Unexpected character ' + String.fromCharCode(this.source_0.charCodeAt(this.marker_0)) + '.  ' + this.source_0.substring(this.marker_0, this.marker_0 + 20 | 0));
      }
    }
  };
  JsonNode.prototype.consumeWhitespace_0 = function () {
    while (this.marker_0 < this.toIndex_0 && isWhitespace(this.source_0.charCodeAt(this.marker_0))) {
      this.marker_0 = this.marker_0 + 1 | 0;
    }
  };
  var Map = Kotlin.kotlin.collections.Map;
  JsonNode.prototype.contains_61zpoe$ = function (name) {
    this.parseObject_0();
    var $receiver = this._properties_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name);
  };
  JsonNode.prototype.contains_za3lpa$ = function (index) {
    this.parseObject_0();
    return index < this._elements_0.size;
  };
  JsonNode.prototype.properties = function () {
    this.parseObject_0();
    return this._properties_0;
  };
  JsonNode.prototype.elements = function () {
    this.parseObject_0();
    return this._elements_0;
  };
  JsonNode.prototype.entries = function () {
    this.parseObject_0();
    return this._properties_0.entries;
  };
  Object.defineProperty(JsonNode.prototype, 'isNull', {get: function () {
    return this.subStr_0.equalsStr_61zpoe$('null');
  }});
  JsonNode.prototype.bool = function () {
    if (this.isNull)
      return null;
    return this.subStr_0.equalsStr_61zpoe$('true') || this.subStr_0.equalsStr_61zpoe$('1');
  };
  JsonNode.prototype.char = function () {
    if (this.isNull)
      return null;
    return this.subStr_0.charAt_za3lpa$(1);
  };
  JsonNode.prototype.string = function () {
    if (this.isNull)
      return null;
    return removeBackslashes(this.subStr_0.subSequence_vux9f0$(1, this.subStr_0.length - 1 | 0).toString());
  };
  JsonNode.prototype.short = function () {
    if (this.isNull)
      return null;
    return toShortOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.int = function () {
    if (this.isNull)
      return null;
    return toIntOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.long = function () {
    if (this.isNull)
      return null;
    return toLongOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.float = function () {
    var tmp$;
    return (tmp$ = this.double()) != null ? tmp$ : null;
  };
  JsonNode.prototype.double = function () {
    if (this.isNull)
      return null;
    return toDoubleOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.toString = function () {
    return this.subStr_0.toString();
  };
  JsonNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonNode', interfaces: [Reader]};
  function JsonWriter(builder, indentStr, tabStr, returnStr) {
    this.builder = builder;
    this.indentStr = indentStr;
    this.tabStr = tabStr;
    this.returnStr = returnStr;
    this.size_0 = 0;
  }
  JsonWriter.prototype.property_61zpoe$ = function (name) {
    var tmp$;
    if ((tmp$ = this.size_0, this.size_0 = tmp$ + 1 | 0, tmp$) > 0)
      this.builder.append_gw00v9$(',' + this.returnStr);
    this.builder.append_gw00v9$(this.indentStr);
    this.builder.append_s8itvh$(34);
    this.builder.append_gw00v9$(name);
    this.builder.append_gw00v9$('": ');
    return new JsonWriter(this.builder, this.indentStr, this.tabStr, this.returnStr);
  };
  JsonWriter.prototype.element = function () {
    var tmp$;
    if ((tmp$ = this.size_0, this.size_0 = tmp$ + 1 | 0, tmp$) > 0)
      this.builder.append_gw00v9$(',' + this.returnStr);
    this.builder.append_gw00v9$(this.indentStr);
    return new JsonWriter(this.builder, this.indentStr, this.tabStr, this.returnStr);
  };
  JsonWriter.prototype.bool_1v8dbw$ = function (value) {
    if (value == null)
      return this.writeNull();
    if (value)
      this.builder.append_gw00v9$('true');
    else
      this.builder.append_gw00v9$('false');
  };
  JsonWriter.prototype.string_pdl1vj$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8itvh$(34);
    this.builder.append_gw00v9$(this.escape_0(value));
    this.builder.append_s8itvh$(34);
  };
  JsonWriter.prototype.int_s8ev37$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.long_mts6q2$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.float_81sz4$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.double_yrwdxb$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.char_myv2ck$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8itvh$(34);
    this.builder.append_s8itvh$(value);
    this.builder.append_s8itvh$(34);
  };
  JsonWriter.prototype.obj_qpf9uf$ = function (complex, contents) {
    var r = complex ? this.returnStr : ' ';
    this.builder.append_gw00v9$('{' + r);
    var childIndent = complex ? this.indentStr + this.tabStr : '';
    var childWriter = new JsonWriter(this.builder, childIndent, this.tabStr, r);
    contents(childWriter);
    if (childWriter.size_0 > 0) {
      this.builder.append_gw00v9$(r);
    }
    if (complex)
      this.builder.append_gw00v9$(this.indentStr);
    this.builder.append_s8itvh$(125);
  };
  JsonWriter.prototype.array_qpf9uf$ = function (complex, contents) {
    var r = complex ? this.returnStr : ' ';
    this.builder.append_gw00v9$('[' + r);
    var childIndent = complex ? this.indentStr + this.tabStr : '';
    var childWriter = new JsonWriter(this.builder, childIndent, this.tabStr, r);
    contents(childWriter);
    if (childWriter.size_0 > 0) {
      this.builder.append_gw00v9$(r);
    }
    if (complex)
      this.builder.append_gw00v9$(this.indentStr);
    this.builder.append_s8itvh$(93);
  };
  JsonWriter.prototype.writeNull = function () {
    this.builder.append_gw00v9$('null');
  };
  JsonWriter.prototype.escape_0 = function (value) {
    return replace2(replace2(replace2(replace2(replace2(value, '\\', '\\\\'), '\r', '\\r'), '\n', '\\n'), '\t', '\\t'), '"', '\\"');
  };
  JsonWriter.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonWriter', interfaces: [Writer]};
  function Serializer() {
  }
  Serializer.prototype.read_awjrhg$ = function (data, factory) {
    var reader = this.read_11rb$(data);
    return ensureNotNull(obj(reader, factory));
  };
  function Serializer$write$lambda$lambda(closure$to, closure$value) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$value, it);
      return Unit;
    };
  }
  function Serializer$write$lambda(closure$to, closure$value) {
    return function (it) {
      it.obj_qpf9uf$(true, Serializer$write$lambda$lambda(closure$to, closure$value));
      return Unit;
    };
  }
  Serializer.prototype.write_hzsrf4$ = function (value, to) {
    return this.write_ma9gy0$(Serializer$write$lambda(to, value));
  };
  Serializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Serializer', interfaces: []};
  function Reader() {
  }
  Reader.prototype.get_61zpoe$ = function (name) {
    return this.properties().get_11rb$(name);
  };
  Reader.prototype.get_za3lpa$ = function (index) {
    return this.elements().get_za3lpa$(index);
  };
  Reader.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Reader', interfaces: []};
  function obj($receiver, factory) {
    if ($receiver.isNull)
      return null;
    return factory.read_gax0m7$($receiver);
  }
  function intArray($receiver) {
    var tmp$;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = new Int32Array(elements.size);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = ensureNotNull(elements.get_za3lpa$(i).int());
    }
    return arr;
  }
  function floatArray($receiver) {
    var tmp$;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = new Float32Array(elements.size);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = ensureNotNull(elements.get_za3lpa$(i).float());
    }
    return arr;
  }
  function arrayList($receiver, name, itemFactory) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? arrayList_0(tmp$, itemFactory) : null;
  }
  function arrayList_0($receiver, itemFactory) {
    var tmp$;
    var e = $receiver.elements();
    var b = e.size;
    var list = ArrayList_init(Math_0.max(16, b));
    tmp$ = get_lastIndex(e);
    for (var i = 0; i <= tmp$; i++) {
      list.add_11rb$(itemFactory.read_gax0m7$(e.get_za3lpa$(i)));
    }
    return list;
  }
  function bool($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.bool() : null;
  }
  function string($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.string() : null;
  }
  function int($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.int() : null;
  }
  function long($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.long() : null;
  }
  function intArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? intArray(tmp$) : null;
  }
  function floatArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? floatArray(tmp$) : null;
  }
  function obj_0($receiver, name, factory) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? obj(tmp$, factory) : null;
  }
  function Writer() {
  }
  Writer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Writer', interfaces: []};
  function obj$lambda(closure$to, closure$value) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$value, it);
      return Unit;
    };
  }
  function obj_1($receiver, value, to) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.obj_qpf9uf$(true, obj$lambda(to, value));
    }
  }
  function array$lambda$lambda(closure$to, closure$v) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$v, it);
      return Unit;
    };
  }
  function array$lambda(closure$value, closure$to) {
    return function (it) {
      var tmp$;
      tmp$ = closure$value.iterator();
      while (tmp$.hasNext()) {
        var v = tmp$.next();
        if (v == null)
          it.element().writeNull();
        else {
          it.element().obj_qpf9uf$(true, array$lambda$lambda(closure$to, v));
        }
      }
      return Unit;
    };
  }
  function array_0($receiver, value, to) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(true, array$lambda(value, to));
    }
  }
  function intArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().int_s8ev37$(i);
      }
      return Unit;
    };
  }
  function intArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, intArray$lambda(value));
    }
  }
  function floatArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().float_81sz4$(i);
      }
      return Unit;
    };
  }
  function floatArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, floatArray$lambda(value));
    }
  }
  function bool_0($receiver, name, value) {
    $receiver.property_61zpoe$(name).bool_1v8dbw$(value);
  }
  function string_0($receiver, name, value) {
    $receiver.property_61zpoe$(name).string_pdl1vj$(value);
  }
  function int_0($receiver, name, value) {
    $receiver.property_61zpoe$(name).int_s8ev37$(value);
  }
  function long_0($receiver, name, value) {
    $receiver.property_61zpoe$(name).long_mts6q2$(value);
  }
  function intArray_2($receiver, name, value) {
    intArray_1($receiver.property_61zpoe$(name), value);
  }
  function floatArray_2($receiver, name, value) {
    floatArray_1($receiver.property_61zpoe$(name), value);
  }
  function obj_3($receiver, name, value, to) {
    obj_1($receiver.property_61zpoe$(name), value, to);
  }
  function array_3($receiver, name, value, to) {
    array_0($receiver.property_61zpoe$(name), value, to);
  }
  function From() {
  }
  From.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'From', interfaces: []};
  function To() {
  }
  To.prototype.write2_6l37rg$ = function (receiver, writer) {
    this.write_r4tkhj$(receiver, writer);
  };
  To.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'To', interfaces: []};
  function StringNode(str) {
    this.str = str;
    this.isNull_dau19m$_0 = false;
  }
  function NullNode() {
    NullNode_instance = this;
    this.isNull_ap34o0$_0 = true;
  }
  var NullNode_instance = null;
  function XmlSerializer() {
    XmlSerializer_instance = this;
  }
  var XmlSerializer_instance = null;
  function XmlNode(source, fromIndex, toIndex, parent) {
    XmlNode$Companion_getInstance();
    this.source_0 = source;
    this.fromIndex = fromIndex;
    this.toIndex = toIndex;
    this.parent = parent;
    this._properties_0 = HashMap_init();
    this._elements_0 = ArrayList_init();
    this.isParsed_0 = false;
    this.subStr_0 = new SubString(this.source_0, this.fromIndex, this.toIndex);
    this.marker_0 = 0;
  }
  var XmlNode$Companion_instance = null;
  var ElementType$COMMENT_instance;
  var ElementType$ELEMENT_instance;
  var ElementType$INSTRUCTION_instance;
  function Signal() {
  }
  Signal.prototype.add_trkh7z$ = function (handler) {
    this.add_onkqg$(handler, false);
  };
  Signal.prototype.addOnce_trkh7z$ = function (handler) {
    this.add_onkqg$(handler, true);
  };
  Signal.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Signal', interfaces: []};
  function SignalBase() {
    this.handlers = ArrayList_init();
    this.isOnces = ArrayList_init();
    this.cursor = -1;
  }
  SignalBase.prototype.isNotEmpty = function () {
    return !this.handlers.isEmpty();
  };
  SignalBase.prototype.isEmpty = function () {
    return this.handlers.isEmpty();
  };
  SignalBase.prototype.add_onkqg$ = function (handler, isOnce) {
    this.handlers.add_11rb$(handler);
    this.isOnces.add_11rb$(isOnce);
  };
  SignalBase.prototype.remove_trkh7z$ = function (handler) {
    var index = this.handlers.indexOf_11rb$(handler);
    if (index !== -1) {
      this.removeAt_za3lpa$(index);
    }
  };
  SignalBase.prototype.removeAt_za3lpa$ = function (index) {
    if (index <= this.cursor) {
      this.cursor = this.cursor - 1 | 0;
    }
    this.handlers.removeAt_za3lpa$(index);
    this.isOnces.removeAt_za3lpa$(index);
  };
  SignalBase.prototype.contains_trkh7z$ = function (handler) {
    return this.handlers.contains_11rb$(handler);
  };
  SignalBase.prototype.halt = function () {
    if (this.cursor === -1)
      throw Exception_init('This signal is not currently dispatching.');
    this.cursor = 999999999;
  };
  Object.defineProperty(SignalBase.prototype, 'isDispatching', {get: function () {
    return this.cursor !== -1;
  }});
  SignalBase.prototype.dispatch_oh3mgy$ = defineInlineFunction('AcornUtils.com.acornui.signal.SignalBase.dispatch_oh3mgy$', wrapFunction(function () {
    var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
    return function (executor) {
      if (this.cursor !== -1)
        throw Exception_init('This signal is currently dispatching.');
      this.cursor = 0;
      if (this.handlers.size <= 4) {
        if (this.cursor < this.handlers.size) {
          var isOnce1 = this.isOnces.get_za3lpa$(this.cursor);
          var handler1 = this.handlers.get_za3lpa$(this.cursor);
          if (isOnce1)
            this.removeAt_za3lpa$(this.cursor);
          executor(handler1);
          this.cursor = this.cursor + 1 | 0;
        }
        if (this.cursor < this.handlers.size) {
          var isOnce2 = this.isOnces.get_za3lpa$(this.cursor);
          var handler2 = this.handlers.get_za3lpa$(this.cursor);
          if (isOnce2)
            this.removeAt_za3lpa$(this.cursor);
          executor(handler2);
          this.cursor = this.cursor + 1 | 0;
        }
        if (this.cursor < this.handlers.size) {
          var isOnce3 = this.isOnces.get_za3lpa$(this.cursor);
          var handler3 = this.handlers.get_za3lpa$(this.cursor);
          if (isOnce3)
            this.removeAt_za3lpa$(this.cursor);
          executor(handler3);
          this.cursor = this.cursor + 1 | 0;
        }
        if (this.cursor < this.handlers.size) {
          var isOnce4 = this.isOnces.get_za3lpa$(this.cursor);
          var handler4 = this.handlers.get_za3lpa$(this.cursor);
          if (isOnce4)
            this.removeAt_za3lpa$(this.cursor);
          executor(handler4);
          this.cursor = this.cursor + 1 | 0;
        }
      }
      while (this.cursor < this.handlers.size) {
        var isOnce = this.isOnces.get_za3lpa$(this.cursor);
        var handler = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce)
          this.removeAt_za3lpa$(this.cursor);
        executor(handler);
        this.cursor = this.cursor + 1 | 0;
      }
      this.cursor = -1;
    };
  }));
  SignalBase.prototype.clear = function () {
    this.handlers.clear();
    this.isOnces.clear();
  };
  SignalBase.prototype.dispose = function () {
    this.clear();
  };
  SignalBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'SignalBase', interfaces: [Disposable, Signal]};
  function Signal0() {
    SignalBase.call(this);
  }
  Signal0.prototype.dispatch = function () {
    if (this.cursor !== -1)
      throw Exception_init('This signal is currently dispatching.');
    this.cursor = 0;
    if (this.handlers.size <= 4) {
      if (this.cursor < this.handlers.size) {
        var isOnce1 = this.isOnces.get_za3lpa$(this.cursor);
        var handler1 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce1)
          this.removeAt_za3lpa$(this.cursor);
        handler1();
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce2 = this.isOnces.get_za3lpa$(this.cursor);
        var handler2 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce2)
          this.removeAt_za3lpa$(this.cursor);
        handler2();
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce3 = this.isOnces.get_za3lpa$(this.cursor);
        var handler3 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce3)
          this.removeAt_za3lpa$(this.cursor);
        handler3();
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce4 = this.isOnces.get_za3lpa$(this.cursor);
        var handler4 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce4)
          this.removeAt_za3lpa$(this.cursor);
        handler4();
        this.cursor = this.cursor + 1 | 0;
      }
    }
    while (this.cursor < this.handlers.size) {
      var isOnce = this.isOnces.get_za3lpa$(this.cursor);
      var handler = this.handlers.get_za3lpa$(this.cursor);
      if (isOnce)
        this.removeAt_za3lpa$(this.cursor);
      handler();
      this.cursor = this.cursor + 1 | 0;
    }
    this.cursor = -1;
  };
  Signal0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Signal0', interfaces: [SignalBase]};
  function Signal1() {
    SignalBase.call(this);
  }
  Signal1.prototype.dispatch_11rb$ = function (p1) {
    if (this.cursor !== -1)
      throw Exception_init('This signal is currently dispatching.');
    this.cursor = 0;
    if (this.handlers.size <= 4) {
      if (this.cursor < this.handlers.size) {
        var isOnce1 = this.isOnces.get_za3lpa$(this.cursor);
        var handler1 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce1)
          this.removeAt_za3lpa$(this.cursor);
        handler1(p1);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce2 = this.isOnces.get_za3lpa$(this.cursor);
        var handler2 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce2)
          this.removeAt_za3lpa$(this.cursor);
        handler2(p1);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce3 = this.isOnces.get_za3lpa$(this.cursor);
        var handler3 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce3)
          this.removeAt_za3lpa$(this.cursor);
        handler3(p1);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce4 = this.isOnces.get_za3lpa$(this.cursor);
        var handler4 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce4)
          this.removeAt_za3lpa$(this.cursor);
        handler4(p1);
        this.cursor = this.cursor + 1 | 0;
      }
    }
    while (this.cursor < this.handlers.size) {
      var isOnce = this.isOnces.get_za3lpa$(this.cursor);
      var handler = this.handlers.get_za3lpa$(this.cursor);
      if (isOnce)
        this.removeAt_za3lpa$(this.cursor);
      handler(p1);
      this.cursor = this.cursor + 1 | 0;
    }
    this.cursor = -1;
  };
  Signal1.$metadata$ = {kind: Kind_CLASS, simpleName: 'Signal1', interfaces: [SignalBase]};
  function Signal2() {
    SignalBase.call(this);
  }
  Signal2.prototype.dispatch_xwzc9p$ = function (p1, p2) {
    if (this.cursor !== -1)
      throw Exception_init('This signal is currently dispatching.');
    this.cursor = 0;
    if (this.handlers.size <= 4) {
      if (this.cursor < this.handlers.size) {
        var isOnce1 = this.isOnces.get_za3lpa$(this.cursor);
        var handler1 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce1)
          this.removeAt_za3lpa$(this.cursor);
        handler1(p1, p2);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce2 = this.isOnces.get_za3lpa$(this.cursor);
        var handler2 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce2)
          this.removeAt_za3lpa$(this.cursor);
        handler2(p1, p2);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce3 = this.isOnces.get_za3lpa$(this.cursor);
        var handler3 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce3)
          this.removeAt_za3lpa$(this.cursor);
        handler3(p1, p2);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce4 = this.isOnces.get_za3lpa$(this.cursor);
        var handler4 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce4)
          this.removeAt_za3lpa$(this.cursor);
        handler4(p1, p2);
        this.cursor = this.cursor + 1 | 0;
      }
    }
    while (this.cursor < this.handlers.size) {
      var isOnce = this.isOnces.get_za3lpa$(this.cursor);
      var handler = this.handlers.get_za3lpa$(this.cursor);
      if (isOnce)
        this.removeAt_za3lpa$(this.cursor);
      handler(p1, p2);
      this.cursor = this.cursor + 1 | 0;
    }
    this.cursor = -1;
  };
  Signal2.$metadata$ = {kind: Kind_CLASS, simpleName: 'Signal2', interfaces: [SignalBase]};
  function Signal3() {
    SignalBase.call(this);
  }
  Signal3.prototype.dispatch_1llc0w$ = function (p1, p2, p3) {
    if (this.cursor !== -1)
      throw Exception_init('This signal is currently dispatching.');
    this.cursor = 0;
    if (this.handlers.size <= 4) {
      if (this.cursor < this.handlers.size) {
        var isOnce1 = this.isOnces.get_za3lpa$(this.cursor);
        var handler1 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce1)
          this.removeAt_za3lpa$(this.cursor);
        handler1(p1, p2, p3);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce2 = this.isOnces.get_za3lpa$(this.cursor);
        var handler2 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce2)
          this.removeAt_za3lpa$(this.cursor);
        handler2(p1, p2, p3);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce3 = this.isOnces.get_za3lpa$(this.cursor);
        var handler3 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce3)
          this.removeAt_za3lpa$(this.cursor);
        handler3(p1, p2, p3);
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce4 = this.isOnces.get_za3lpa$(this.cursor);
        var handler4 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce4)
          this.removeAt_za3lpa$(this.cursor);
        handler4(p1, p2, p3);
        this.cursor = this.cursor + 1 | 0;
      }
    }
    while (this.cursor < this.handlers.size) {
      var isOnce = this.isOnces.get_za3lpa$(this.cursor);
      var handler = this.handlers.get_za3lpa$(this.cursor);
      if (isOnce)
        this.removeAt_za3lpa$(this.cursor);
      handler(p1, p2, p3);
      this.cursor = this.cursor + 1 | 0;
    }
    this.cursor = -1;
  };
  Signal3.$metadata$ = {kind: Kind_CLASS, simpleName: 'Signal3', interfaces: [SignalBase]};
  function Stoppable() {
  }
  Stoppable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Stoppable', interfaces: []};
  function Cancel() {
    this._canceled_ckkemm$_0 = false;
  }
  Cancel.prototype.canceled = function () {
    return this._canceled_ckkemm$_0;
  };
  Cancel.prototype.cancel = function () {
    this._canceled_ckkemm$_0 = true;
  };
  Cancel.prototype.reset = function () {
    this._canceled_ckkemm$_0 = false;
    return this;
  };
  Cancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'Cancel', interfaces: []};
  function StoppableSignal() {
  }
  StoppableSignal.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StoppableSignal', interfaces: [Signal]};
  function StoppableSignalImpl() {
    SignalBase.call(this);
  }
  StoppableSignalImpl.prototype.dispatch_n80keo$ = function (p1) {
    if (this.cursor !== -1)
      throw Exception_init('This signal is currently dispatching.');
    this.cursor = 0;
    if (this.handlers.size <= 4) {
      if (this.cursor < this.handlers.size) {
        var isOnce1 = this.isOnces.get_za3lpa$(this.cursor);
        var handler1 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce1)
          this.removeAt_za3lpa$(this.cursor);
        handler1(p1);
        if (p1.isStopped())
          this.halt();
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce2 = this.isOnces.get_za3lpa$(this.cursor);
        var handler2 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce2)
          this.removeAt_za3lpa$(this.cursor);
        handler2(p1);
        if (p1.isStopped())
          this.halt();
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce3 = this.isOnces.get_za3lpa$(this.cursor);
        var handler3 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce3)
          this.removeAt_za3lpa$(this.cursor);
        handler3(p1);
        if (p1.isStopped())
          this.halt();
        this.cursor = this.cursor + 1 | 0;
      }
      if (this.cursor < this.handlers.size) {
        var isOnce4 = this.isOnces.get_za3lpa$(this.cursor);
        var handler4 = this.handlers.get_za3lpa$(this.cursor);
        if (isOnce4)
          this.removeAt_za3lpa$(this.cursor);
        handler4(p1);
        if (p1.isStopped())
          this.halt();
        this.cursor = this.cursor + 1 | 0;
      }
    }
    while (this.cursor < this.handlers.size) {
      var isOnce = this.isOnces.get_za3lpa$(this.cursor);
      var handler = this.handlers.get_za3lpa$(this.cursor);
      if (isOnce)
        this.removeAt_za3lpa$(this.cursor);
      handler(p1);
      if (p1.isStopped())
        this.halt();
      this.cursor = this.cursor + 1 | 0;
    }
    this.cursor = -1;
  };
  StoppableSignalImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StoppableSignalImpl', interfaces: [StoppableSignal, SignalBase]};
  function StringParser(data) {
    this.data = data;
    this.position = 0;
    this.length = this.data.length;
  }
  Object.defineProperty(StringParser.prototype, 'hasNext', {get: function () {
    return this.position < this.length;
  }});
  function StringParser$white$lambda(it) {
    return isWhitespace(unboxChar(it));
  }
  StringParser.prototype.white = function () {
    return this.getString_akknk2$(StringParser$white$lambda);
  };
  StringParser.prototype.getBoolean = function () {
    var char = this.data.charCodeAt(this.position);
    if (char === 49) {
      this.position = this.position + 1 | 0;
      return true;
    }
     else if (char === 48) {
      this.position = this.position + 1 | 0;
      return false;
    }
     else if (char === 116 || char === 84) {
      var found = this.consumeString_ivxn3r$('true', true);
      if (!found) {
        this.position = this.position + 1 | 0;
      }
      return true;
    }
     else if (char === 102 || char === 70) {
      var found_0 = this.consumeString_ivxn3r$('false', true);
      if (!found_0) {
        this.position = this.position + 1 | 0;
      }
      return true;
    }
    return null;
  };
  function StringParser$getString$lambda(it) {
    return isLetterOrDigit2(unboxChar(it));
  }
  StringParser.prototype.getString = function () {
    return this.getString_akknk2$(StringParser$getString$lambda);
  };
  StringParser.prototype.getQuotedString = function () {
    var foundQuoteEnd = false;
    var quoteStart = null;
    var escaped = false;
    var p = this.position;
    while (p < this.length) {
      var it = this.data.charCodeAt(p);
      if (quoteStart == null) {
        if (!isWhitespace(it))
          if (it === 34 || it === 39) {
            quoteStart = it;
          }
           else {
            break;
          }
      }
       else {
        if (escaped) {
          escaped = false;
        }
         else if (it === quoteStart) {
          foundQuoteEnd = true;
          p = p + 1 | 0;
          break;
        }
         else if (it === 92) {
          escaped = true;
        }
      }
      p = p + 1 | 0;
    }
    if (foundQuoteEnd) {
      var $receiver = this.data;
      var startIndex = this.position + 1 | 0;
      var endIndex = p - 1 | 0;
      var subString = $receiver.substring(startIndex, endIndex);
      this.position = p;
      return subString;
    }
     else {
      return null;
    }
  };
  StringParser.prototype.getString_akknk2$ = function (predicate) {
    var tmp$ = this.data;
    var mark = this.position;
    while (this.position < this.length && predicate(toBoxedChar(this.data.charCodeAt(this.position)))) {
      this.position = this.position + 1 | 0;
    }
    var endIndex = this.position;
    return tmp$.substring(mark, endIndex);
  };
  StringParser.prototype.getDouble = function () {
    var p = this.position;
    var foundDecimalMark = false;
    while (p < this.length) {
      var it = this.data.charCodeAt(p);
      if (!isDigit2(it) && !(p === this.position && it === 45)) {
        if (!foundDecimalMark && it === 46) {
          foundDecimalMark = true;
        }
         else {
          break;
        }
      }
      p = p + 1 | 0;
    }
    if (this.position === p)
      return null;
    var $receiver = this.data;
    var startIndex = this.position;
    var endIndex = p;
    var subString = $receiver.substring(startIndex, endIndex);
    if (subString.length === 1 && equals(subString, '-'))
      return null;
    this.position = p;
    return toDoubleOrNull(subString);
  };
  StringParser.prototype.getFloat = function () {
    var tmp$;
    return (tmp$ = this.getDouble()) != null ? tmp$ : null;
  };
  StringParser.prototype.getInt = function () {
    var p = this.position;
    while (p < this.length) {
      var it = this.data.charCodeAt(p);
      if (!isDigit2(it) && !(p === this.position && it === 45)) {
        break;
      }
      p = p + 1 | 0;
    }
    if (this.position === p)
      return null;
    var $receiver = this.data;
    var startIndex = this.position;
    var endIndex = p;
    var subString = $receiver.substring(startIndex, endIndex);
    if (subString.length === 1 && equals(subString, '-'))
      return null;
    this.position = p;
    return toIntOrNull(subString);
  };
  StringParser.prototype.getChar = function () {
    var tmp$;
    if (this.position >= this.length)
      return null;
    return toBoxedChar(this.data.charCodeAt((tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$)));
  };
  StringParser.prototype.consumeString_ivxn3r$ = function (string, ignoreCase) {
    if (ignoreCase === void 0)
      ignoreCase = false;
    var n = string.length;
    var p = this.position;
    if ((p + n | 0) >= this.length)
      return false;
    var index = 0;
    while (true) {
      var tmp$ = p < this.length && index < n;
      if (tmp$) {
        var tmp$_0 = this.data.charCodeAt(p) === string.charCodeAt(index);
        if (!tmp$_0) {
          var tmp$_1 = ignoreCase;
          if (tmp$_1) {
            var tmp$_2 = this.data.charCodeAt(p);
            var $receiver = string.charCodeAt(index);
            tmp$_1 = tmp$_2 === unboxChar(String.fromCharCode($receiver).toLowerCase().charCodeAt(0));
          }
          tmp$_0 = tmp$_1;
        }
        tmp$ = tmp$_0;
      }
      if (!tmp$)
        break;
      index = index + 1 | 0;
      p = p + 1 | 0;
    }
    if (index < n)
      return false;
    this.position = p;
    return true;
  };
  StringParser.prototype.consumeThrough_61zpoe$ = function (string) {
    var index = indexOf(this.data, string, this.position);
    if (index === -1)
      return false;
    this.position = index + string.length | 0;
    return true;
  };
  StringParser.prototype.consumeThrough_s8itvh$ = function (char) {
    var index = indexOf_0(this.data, char, this.position);
    if (index === -1)
      return false;
    this.position = index + 1 | 0;
    return true;
  };
  function StringParser$readLine$lambda(it) {
    return unboxChar(it) !== 13 && unboxChar(it) !== 10;
  }
  StringParser.prototype.readLine = function () {
    var str = this.getString_akknk2$(StringParser$readLine$lambda);
    this.consumeChar_s8itvh$(13);
    this.consumeChar_s8itvh$(10);
    return str;
  };
  StringParser.prototype.consumeChar_s8itvh$ = function (char) {
    var mark = this.position;
    while (true) {
      var tmp$ = this.position < this.length;
      if (tmp$) {
        tmp$ = char === unboxChar(toBoxedChar(this.data.charCodeAt(this.position)));
      }
      if (!tmp$)
        break;
      this.position = this.position + 1 | 0;
    }
    return mark < this.position;
  };
  StringParser.prototype.consumeChars_61zpoe$ = function (chars) {
    var mark = this.position;
    while (true) {
      var tmp$ = this.position < this.length;
      if (tmp$) {
        tmp$ = indexOf_0(chars, unboxChar(toBoxedChar(this.data.charCodeAt(this.position)))) >= 0;
      }
      if (!tmp$)
        break;
      this.position = this.position + 1 | 0;
    }
    return mark < this.position;
  };
  StringParser.prototype.consumeWhile_akknk2$ = defineInlineFunction('AcornUtils.com.acornui.string.StringParser.consumeWhile_akknk2$', wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function (predicate) {
      var mark = this.position;
      while (this.position < this.length && predicate(toBoxedChar(this.data.charCodeAt(this.position)))) {
        this.position = this.position + 1 | 0;
      }
      return mark;
    };
  }));
  StringParser.prototype.reset = function () {
    this.position = 0;
  };
  StringParser.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringParser', interfaces: []};
  function SubString(target, from, to) {
    SubString$Companion_getInstance();
    if (from === void 0)
      from = 0;
    if (to === void 0)
      to = target.length;
    this.target_0 = target;
    this.from_0 = from;
    this.to_0 = to;
    this.hashCode_j41gqr$_0 = lazy(SubString$hashCode$lambda(this));
  }
  Object.defineProperty(SubString.prototype, 'length', {get: function () {
    return this.to_0 - this.from_0 | 0;
  }});
  SubString.prototype.charAt_za3lpa$ = function (index) {
    return toBoxedChar(this.target_0.charCodeAt(index + this.from_0 | 0));
  };
  SubString.prototype.subSequence_vux9f0$ = function (start, end) {
    var tmp$ = this.target_0;
    var tmp$_0 = start + this.from_0 | 0;
    var b = this.length;
    return new SubString(tmp$, tmp$_0, Math_0.min(end, b) + this.from_0 | 0);
  };
  SubString.prototype.endsWith_61zpoe$ = function (suffix) {
    return this.startsWith_bm4lxs$(suffix, this.length - suffix.length | 0);
  };
  SubString.prototype.startsWith_bm4lxs$ = function (prefix, offset) {
    if (offset === void 0)
      offset = 0;
    var tmp$, tmp$_0;
    var to = offset;
    var po = 0;
    var pc = prefix.length;
    if (offset < 0 || offset > (this.length - pc | 0)) {
      return false;
    }
    while ((pc = pc - 1 | 0, pc) >= 0) {
      if (unboxChar(this.charAt_za3lpa$((tmp$ = to, to = tmp$ + 1 | 0, tmp$))) !== prefix.charCodeAt((tmp$_0 = po, po = tmp$_0 + 1 | 0, tmp$_0))) {
        return false;
      }
    }
    return true;
  };
  SubString.prototype.indexOf_s9u7hn$ = function (ch, fromIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    var tmp$;
    var f = fromIndex;
    var max = this.length;
    if (f < 0) {
      f = 0;
    }
     else if (f >= max) {
      return -1;
    }
    tmp$ = max - 1 | 0;
    for (var i = f; i <= tmp$; i++) {
      if (unboxChar(this.charAt_za3lpa$(i)) === ch) {
        return i;
      }
    }
    return -1;
  };
  SubString.prototype.lastIndexOf_s9u7hn$ = function (ch, fromIndex) {
    if (fromIndex === void 0)
      fromIndex = this.length - 1 | 0;
    var b = this.length - 1 | 0;
    var i = Math_0.min(fromIndex, b);
    while (i >= 0) {
      if (unboxChar(this.charAt_za3lpa$(i)) === ch) {
        return i;
      }
      i = i - 1 | 0;
    }
    return -1;
  };
  SubString.prototype.indexOf_61zpoe$ = function (str) {
    return this.indexOf_bm4lxs$(str, 0);
  };
  SubString.prototype.indexOf_bm4lxs$ = function (str, fromIndex) {
    return SubString$Companion_getInstance().indexOf_a1f306$(this, 0, this.length, str, 0, str.length, fromIndex);
  };
  SubString.prototype.lastIndexOf_61zpoe$ = function (str) {
    return this.lastIndexOf_bm4lxs$(str, this.length);
  };
  SubString.prototype.lastIndexOf_bm4lxs$ = function (str, fromIndex) {
    return SubString$Companion_getInstance().lastIndexOf_a1f306$(this, 0, this.length, str, 0, str.length, fromIndex);
  };
  SubString.prototype.compareTo_61zpoe$ = function (other) {
    var len1 = this.to_0 - this.from_0 | 0;
    var len2 = other.length;
    var lim = Math_0.min(len1, len2);
    var k = 0;
    while (k < lim) {
      var c1 = this.target_0.charCodeAt(k + this.from_0 | 0);
      var c2 = other.charCodeAt(k);
      if (c1 !== c2) {
        return (c1 | 0) - (c2 | 0) | 0;
      }
      k = k + 1 | 0;
    }
    return len1 - len2 | 0;
  };
  SubString.prototype.compareTo_11rb$ = function (other) {
    var len1 = this.to_0 - this.from_0 | 0;
    var len2 = other.length;
    var lim = Math_0.min(len1, len2);
    var k = 0;
    while (k < lim) {
      var c1 = this.target_0.charCodeAt(k + this.from_0 | 0);
      var c2 = unboxChar(other.charAt_za3lpa$(k));
      if (c1 !== c2) {
        return (c1 | 0) - (c2 | 0) | 0;
      }
      k = k + 1 | 0;
    }
    return len1 - len2 | 0;
  };
  SubString.prototype.equalsStr_61zpoe$ = function (other) {
    var tmp$;
    var n = this.to_0 - this.from_0 | 0;
    if (n === other.length) {
      var i = 0;
      while ((tmp$ = n, n = tmp$ - 1 | 0, tmp$) > 0) {
        if (this.target_0.charCodeAt(i + this.from_0 | 0) !== other.charCodeAt(i))
          return false;
        i = i + 1 | 0;
      }
      return true;
    }
    return false;
  };
  SubString.prototype.equals = function (other) {
    var tmp$;
    if (!Kotlin.isType(other, SubString))
      return false;
    var n = this.to_0 - this.from_0 | 0;
    if (n === other.length) {
      var i = 0;
      while ((tmp$ = n, n = tmp$ - 1 | 0, tmp$) > 0) {
        if (this.target_0.charCodeAt(i + this.from_0 | 0) !== unboxChar(other.charAt_za3lpa$(i)))
          return false;
        i = i + 1 | 0;
      }
      return true;
    }
    return false;
  };
  Object.defineProperty(SubString.prototype, 'hashCode_0', {get: function () {
    return this.hashCode_j41gqr$_0.value;
  }});
  SubString.prototype.hashCode = function () {
    return this.hashCode_0;
  };
  SubString.prototype.toString = function () {
    var $receiver = this.target_0;
    var startIndex = this.from_0;
    var endIndex = this.to_0;
    return $receiver.substring(startIndex, endIndex);
  };
  function SubString$Companion() {
    SubString$Companion_instance = this;
  }
  SubString$Companion.prototype.indexOf_a1f306$ = function (source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
    var fI = fromIndex;
    if (fI >= sourceCount) {
      return targetCount === 0 ? sourceCount : -1;
    }
    if (fI < 0) {
      fI = 0;
    }
    if (targetCount === 0) {
      return fI;
    }
    var first = target.charCodeAt(targetOffset);
    var max = sourceOffset + (sourceCount - targetCount) | 0;
    var i = sourceOffset + fI | 0;
    while (i <= max) {
      if (unboxChar(source.charAt_za3lpa$(i)) !== first) {
        while ((i = i + 1 | 0, i) <= max && unboxChar(source.charAt_za3lpa$(i)) !== first) {
        }
      }
      if (i <= max) {
        var j = i + 1 | 0;
        var end = j + targetCount - 1 | 0;
        var k = targetOffset + 1 | 0;
        while (j < end && unboxChar(source.charAt_za3lpa$(j)) === target.charCodeAt(k)) {
          j = j + 1 | 0;
          k = k + 1 | 0;
        }
        if (j === end) {
          return i - sourceOffset | 0;
        }
      }
      i = i + 1 | 0;
    }
    return -1;
  };
  SubString$Companion.prototype.lastIndexOf_a1f306$ = function (source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
    var tmp$, tmp$_0;
    var fI = fromIndex;
    var rightIndex = sourceCount - targetCount | 0;
    if (fI < 0) {
      return -1;
    }
    if (fI > rightIndex) {
      fI = rightIndex;
    }
    if (targetCount === 0) {
      return fI;
    }
    var strLastIndex = targetOffset + targetCount - 1 | 0;
    var strLastChar = target.charCodeAt(strLastIndex);
    var min = sourceOffset + targetCount - 1 | 0;
    var i = min + fI | 0;
    startSearchForLastChar: while (true) {
      while (i >= min && unboxChar(source.charAt_za3lpa$(i)) !== strLastChar) {
        i = i - 1 | 0;
      }
      if (i < min) {
        return -1;
      }
      var j = i - 1 | 0;
      var start = j - (targetCount - 1) | 0;
      var k = strLastIndex - 1 | 0;
      while (j > start) {
        if (unboxChar(source.charAt_za3lpa$((tmp$ = j, j = tmp$ - 1 | 0, tmp$))) !== target.charCodeAt((tmp$_0 = k, k = tmp$_0 - 1 | 0, tmp$_0))) {
          i = i - 1 | 0;
          continue startSearchForLastChar;
        }
      }
      return start - sourceOffset + 1 | 0;
    }
  };
  SubString$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var SubString$Companion_instance = null;
  function SubString$Companion_getInstance() {
    if (SubString$Companion_instance === null) {
      new SubString$Companion();
    }
    return SubString$Companion_instance;
  }
  function SubString$hashCode$lambda(this$SubString) {
    return function () {
      var tmp$, tmp$_0;
      var h = 0;
      tmp$ = this$SubString.from_0;
      tmp$_0 = this$SubString.to_0 - 1 | 0;
      for (var i = tmp$; i <= tmp$_0; i++) {
        h = (31 * h | 0) + (this$SubString.target_0.charCodeAt(i) | 0) | 0;
      }
      return h;
    };
  }
  SubString.$metadata$ = {kind: Kind_CLASS, simpleName: 'SubString', interfaces: [Comparable]};
  function isDigit2($receiver) {
    return $receiver >= 48 && $receiver <= 57;
  }
  function isLetter2($receiver) {
    return $receiver >= 97 && $receiver <= 122 || ($receiver >= 65 && $receiver <= 90);
  }
  function isLetterOrDigit2($receiver) {
    return isLetter2($receiver) || isDigit2($receiver);
  }
  var breakingChars;
  function isBreaking($receiver) {
    return indexOf_2(breakingChars, $receiver) >= 0;
  }
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$function = package$acornui.function || (package$acornui.function = {});
  package$function.get_as1_yo2cq0$ = get_as1;
  var package$string = package$acornui.string || (package$acornui.string = {});
  package$string.toRadix_dqglrj$ = toRadix;
  var package$action = package$acornui.action || (package$acornui.action = {});
  package$action.Decorator = Decorator;
  package$action.noopDecorator_287e2$ = noopDecorator;
  package$action.Progress = Progress;
  var package$async = package$acornui.async || (package$acornui.async = {});
  package$async.launch_g2bo5h$ = launch;
  package$async.async_lnyleu$ = async;
  package$async.BasicContinuationImpl = BasicContinuationImpl;
  Object.defineProperty(package$async, 'PendingDisposablesRegistry', {get: PendingDisposablesRegistry_getInstance});
  package$async.Deferred = Deferred;
  package$async.awaitOrNull_uirwv7$ = awaitOrNull;
  package$async.CancelableDeferred = CancelableDeferred;
  package$async.then_7jcrga$ = then;
  package$async.LateValue = LateValue;
  Object.defineProperty(Promise$Status, 'PENDING', {get: Promise$Status$PENDING_getInstance});
  Object.defineProperty(Promise$Status, 'SUCCESSFUL', {get: Promise$Status$SUCCESSFUL_getInstance});
  Object.defineProperty(Promise$Status, 'FAILED', {get: Promise$Status$FAILED_getInstance});
  Promise.Status = Promise$Status;
  package$async.Promise = Promise;
  package$async.awaitAll_4nl6bg$ = awaitAll;
  package$async.awaitAll_qff8ei$ = awaitAll_0;
  var package$browser = package$acornui.browser || (package$acornui.browser = {});
  package$browser.UrlParams = UrlParams;
  package$browser.UrlParamsImpl_61zpoe$ = UrlParamsImpl;
  package$browser.UrlParamsImpl = UrlParamsImpl_0;
  Object.defineProperty(package$browser, 'encodeUriComponent2', {get: get_encodeUriComponent2, set: set_encodeUriComponent2});
  Object.defineProperty(package$browser, 'decodeUriComponent2', {get: get_decodeUriComponent2, set: set_decodeUriComponent2});
  package$browser.appendParam_j4ogox$ = appendParam;
  var package$collection = package$acornui.collection || (package$acornui.collection = {});
  package$collection.ActiveList_init_287e2$ = ActiveList_init;
  package$collection.ActiveList = ActiveList;
  package$collection.pop_vvxzk3$ = pop;
  package$collection.poll_vvxzk3$ = poll;
  package$collection.peek_2p1efm$ = peek;
  package$collection.ConcurrentListImpl = ConcurrentListImpl;
  package$collection.ConcurrentList = ConcurrentList;
  package$collection.MutableConcurrentList = MutableConcurrentList;
  package$collection.ConcurrentListIterator = ConcurrentListIterator;
  package$collection.ConcurrentListIteratorImpl_xy5sis$ = ConcurrentListIteratorImpl;
  package$collection.MutableConcurrentListIteratorImpl_1ro71z$ = MutableConcurrentListIteratorImpl;
  package$collection.ConcurrentListIteratorImpl = ConcurrentListIteratorImpl_0;
  package$collection.MutableConcurrentListIterator = MutableConcurrentListIterator;
  package$collection.MutableConcurrentListIteratorImpl = MutableConcurrentListIteratorImpl_0;
  package$collection.CyclicList = CyclicList;
  Object.defineProperty(package$collection, 'cyclicListPool', {get: function () {
    return cyclicListPool;
  }});
  package$collection.cyclicListObtain_287e2$ = cyclicListObtain;
  package$collection.DualHashMap = DualHashMap;
  package$collection.arrayCopy_hd6cw9$ = arrayCopy_2;
  package$collection.copy_2p1efm$ = copy;
  package$collection.sortedInsertionIndex_hdciot$ = sortedInsertionIndex;
  package$collection.sortedInsertionIndex_jmmqv6$ = sortedInsertionIndex_0;
  package$collection.addSorted_jll88o$ = addSorted;
  package$collection.addSorted_bdlxpq$ = addSorted_0;
  package$collection.ListBase = ListBase;
  package$collection.MutableListBase = MutableListBase;
  package$collection.ListIteratorImpl = ListIteratorImpl;
  package$collection.MutableListIteratorImpl = MutableListIteratorImpl;
  package$collection.SubList = SubList;
  package$collection.MutableSubList = MutableSubList;
  Object.defineProperty(package$collection, 'arrayListPool', {get: function () {
    return arrayListPool;
  }});
  package$collection.arrayListObtain_287e2$ = arrayListObtain;
  package$collection.addOrSet_yd8n6p$ = addOrSet;
  package$collection.ListView = ListView;
  package$collection.copy_go3l1a$ = copy_0;
  package$collection.ObservableConcatList = ObservableConcatList;
  package$collection.ObservableList = ObservableList;
  package$collection.MutableObservableList = MutableObservableList;
  package$collection.Clearable = Clearable;
  package$collection.Pool = Pool;
  package$collection.freeTo_2jyjm1$ = freeTo;
  package$collection.ObjectPool_init_klfg04$ = ObjectPool_init;
  package$collection.ObjectPool = ObjectPool;
  package$collection.ClearableObjectPool_init_y83ar3$ = ClearableObjectPool_init;
  package$collection.ClearableObjectPool = ClearableObjectPool;
  package$collection.LimitedPoolImpl = LimitedPoolImpl;
  var package$core = package$acornui.core || (package$acornui.core = {});
  package$core.Disposable = Disposable;
  Object.defineProperty(package$core, 'INT_MAX_VALUE', {get: function () {
    return INT_MAX_VALUE;
  }});
  package$core.floor_81szk$ = floor;
  package$core.round_81szk$ = round;
  package$core.notCloseTo_wj6e7o$ = notCloseTo;
  package$core.closeTo_wj6e7o$ = closeTo;
  package$core.replace2_90ijwr$ = replace2;
  package$core.replace2_c4eoeh$ = replace2_0;
  package$core.join2_urp9b0$ = join2;
  package$core.split2_bauq2a$ = split2;
  package$core.join2_1mip39$ = join2_0;
  package$core.split2_rjktp$ = split2_0;
  package$core.repeat2_94bcnn$ = repeat2;
  package$core.removeBackslashes_61zpoe$ = removeBackslashes;
  var package$factory = package$acornui.factory || (package$acornui.factory = {});
  package$factory.LazyInstance = LazyInstance;
  package$factory.disposeInstance_f0dkla$ = disposeInstance;
  var package$graphics = package$acornui.graphics || (package$acornui.graphics = {});
  package$graphics.ColorRo = ColorRo;
  package$graphics.Color_s8cxhz$ = Color;
  Object.defineProperty(Color_0, 'Companion', {get: Color$Companion_getInstance});
  package$graphics.Color = Color_0;
  package$graphics.HsvRo = HsvRo;
  package$graphics.Hsv = Hsv;
  var package$io = package$acornui.io || (package$acornui.io = {});
  Object.defineProperty(BufferBase, 'Companion', {get: BufferBase$Companion_getInstance});
  package$io.BufferBase = BufferBase;
  package$io.InvalidMarkException = InvalidMarkException;
  package$io.Buffer = Buffer;
  package$io.ReadBuffer = ReadBuffer;
  package$io.WriteBuffer = WriteBuffer;
  package$io.ReadWriteBuffer = ReadWriteBuffer;
  package$io.NativeBuffer = NativeBuffer;
  var package$file = package$io.file || (package$io.file = {});
  package$file.FilesManifest = FilesManifest;
  Object.defineProperty(package$file, 'FilesManifestSerializer', {get: FilesManifestSerializer_getInstance});
  package$file.ManifestEntry = ManifestEntry;
  Object.defineProperty(package$file, 'ManifestEntrySerializer', {get: ManifestEntrySerializer_getInstance});
  Object.defineProperty(ILogger, 'Companion', {get: ILogger$Companion_getInstance});
  var package$logging = package$acornui.logging || (package$acornui.logging = {});
  package$logging.ILogger = ILogger;
  Object.defineProperty(package$logging, 'Log', {get: Log_getInstance});
  package$logging.PrintTarget = PrintTarget;
  package$logging.ArrayTarget = ArrayTarget;
  var package$math = package$acornui.math || (package$acornui.math = {});
  package$math.BoundsRo = BoundsRo;
  Object.defineProperty(Bounds, 'Companion', {get: Bounds$Companion_getInstance});
  package$math.Bounds = Bounds;
  package$math.BoxRo = BoxRo;
  Object.defineProperty(Box, 'Companion', {get: Box$Companion_getInstance});
  package$math.Box = Box;
  package$math.CornersRo = CornersRo;
  package$math.Corners_init_n34qss$ = Corners_init;
  package$math.Corners_init_mx4ult$ = Corners_init_0;
  package$math.Corners_init_7b5o5w$ = Corners_init_1;
  package$math.Corners = Corners;
  package$math.Interpolation = Interpolation;
  package$math.Constant = Constant;
  package$math.Pow = Pow;
  package$math.PowIn = PowIn;
  package$math.PowOut = PowOut;
  package$math.Exp = Exp;
  package$math.ExpIn = ExpIn;
  package$math.ExpOut = ExpOut;
  package$math.Elastic = Elastic;
  package$math.ElasticIn = ElasticIn;
  package$math.ElasticOut = ElasticOut;
  package$math.Swing = Swing;
  package$math.SwingOut = SwingOut;
  package$math.SwingIn = SwingIn;
  Object.defineProperty(package$math, 'Stepped', {get: Stepped_getInstance});
  Object.defineProperty(package$math, 'Linear', {get: Linear_getInstance});
  Object.defineProperty(package$math, 'Fade', {get: Fade_getInstance});
  Object.defineProperty(package$math, 'Sine', {get: Sine_getInstance});
  Object.defineProperty(package$math, 'SineIn', {get: SineIn_getInstance});
  Object.defineProperty(package$math, 'SineOut', {get: SineOut_getInstance});
  Object.defineProperty(package$math, 'Circle', {get: Circle_getInstance});
  Object.defineProperty(package$math, 'CircleIn', {get: CircleIn_getInstance});
  Object.defineProperty(package$math, 'CircleOut', {get: CircleOut_getInstance});
  package$math.Reverse = Reverse;
  package$math.ToFro = ToFro;
  package$math.YoYo = YoYo;
  package$math.Repeat = Repeat;
  package$math.BounceInPlace = BounceInPlace;
  package$math.Clamp = Clamp;
  package$math.Bezier = Bezier;
  Object.defineProperty(package$math, 'Easing', {get: Easing_getInstance});
  package$math.FrustumRo = FrustumRo;
  Object.defineProperty(Frustum, 'Companion', {get: Frustum$Companion_getInstance});
  package$math.Frustum = Frustum;
  package$math.IntRectangleRo = IntRectangleRo;
  Object.defineProperty(IntRectangle, 'Companion', {get: IntRectangle$Companion_getInstance});
  package$math.IntRectangle = IntRectangle;
  Object.defineProperty(package$math, 'IntRectangleSerializer', {get: IntRectangleSerializer_getInstance});
  Object.defineProperty(package$math, 'PI', {get: function () {
    return PI;
  }});
  Object.defineProperty(package$math, 'TrigLookup', {get: TrigLookup_getInstance});
  Object.defineProperty(package$math, 'Atan2', {get: Atan2_getInstance});
  Object.defineProperty(package$math, 'MathUtils', {get: MathUtils_getInstance});
  package$math.Matrix3Ro = Matrix3Ro;
  Object.defineProperty(Matrix3, 'Companion', {get: Matrix3$Companion_getInstance});
  package$math.Matrix3 = Matrix3;
  package$math.Matrix4Ro = Matrix4Ro;
  Object.defineProperty(Matrix4, 'Companion', {get: Matrix4$Companion_getInstance});
  package$math.Matrix4 = Matrix4;
  Object.defineProperty(MinMaxRo, 'Companion', {get: MinMaxRo$Companion_getInstance});
  package$math.MinMaxRo = MinMaxRo;
  package$math.MinMax = MinMax;
  package$math.PadRo = PadRo;
  Object.defineProperty(Pad, 'Companion', {get: Pad$Companion_getInstance});
  package$math.Pad_init = Pad_init;
  package$math.Pad_init_mx4ult$ = Pad_init_0;
  package$math.Pad = Pad;
  package$math.PlaneRo = PlaneRo;
  Object.defineProperty(Plane, 'Companion', {get: Plane$Companion_getInstance});
  package$math.Plane = Plane;
  Object.defineProperty(PlaneSide, 'ON_PLANE', {get: PlaneSide$ON_PLANE_getInstance});
  Object.defineProperty(PlaneSide, 'BACK', {get: PlaneSide$BACK_getInstance});
  Object.defineProperty(PlaneSide, 'FRONT', {get: PlaneSide$FRONT_getInstance});
  package$math.PlaneSide = PlaneSide;
  Object.defineProperty(QuaternionRo, 'Companion', {get: QuaternionRo$Companion_getInstance});
  package$math.QuaternionRo = QuaternionRo;
  Object.defineProperty(Quaternion, 'Companion', {get: Quaternion$Companion_getInstance});
  package$math.Quaternion = Quaternion;
  Object.defineProperty(Random, 'Companion', {get: Random$Companion_getInstance});
  package$math.Random = Random;
  package$math.Range2Ro = Range2Ro;
  package$math.Range2 = Range2;
  package$math.RayRo = RayRo;
  Object.defineProperty(Ray, 'Companion', {get: Ray$Companion_getInstance});
  package$math.Ray = Ray;
  package$math.Ray2Ro = Ray2Ro;
  Object.defineProperty(Ray2, 'Companion', {get: Ray2$Companion_getInstance});
  package$math.Ray2 = Ray2;
  package$math.RectangleRo = RectangleRo;
  Object.defineProperty(Rectangle, 'Companion', {get: Rectangle$Companion_getInstance});
  package$math.Rectangle = Rectangle;
  package$math.Vector2Ro = Vector2Ro;
  Object.defineProperty(Vector2, 'Companion', {get: Vector2$Companion_getInstance});
  package$math.Vector2 = Vector2;
  package$math.Vector3Ro = Vector3Ro;
  Object.defineProperty(Vector3, 'Companion', {get: Vector3$Companion_getInstance});
  package$math.Vector3 = Vector3;
  Object.defineProperty(Crc32, 'Companion', {get: Crc32$Companion_getInstance});
  var package$observe = package$acornui.observe || (package$acornui.observe = {});
  package$observe.Crc32 = Crc32;
  package$observe.ModTagRo = ModTagRo;
  package$observe.ModTag = ModTag;
  Object.defineProperty(ModTagImpl, 'Companion', {get: ModTagImpl$Companion_getInstance});
  package$observe.ModTagImpl = ModTagImpl;
  package$observe.ModTagWatch = ModTagWatch;
  package$observe.Observable = Observable;
  package$observe.bind_6tqvwa$ = bind;
  var package$serialization = package$acornui.serialization || (package$acornui.serialization = {});
  Object.defineProperty(package$serialization, 'JsonSerializer', {get: JsonSerializer_getInstance});
  package$serialization.JsonNode = JsonNode;
  package$serialization.JsonWriter = JsonWriter;
  package$serialization.Serializer = Serializer;
  package$serialization.Reader = Reader;
  package$serialization.obj_gbx3af$ = obj;
  package$serialization.intArray_86n5bk$ = intArray;
  package$serialization.floatArray_86n5bk$ = floatArray;
  package$serialization.arrayList_3axv6d$ = arrayList;
  package$serialization.arrayList_gbx3af$ = arrayList_0;
  package$serialization.bool_uavegi$ = bool;
  package$serialization.string_uavegi$ = string;
  package$serialization.int_uavegi$ = int;
  package$serialization.long_uavegi$ = long;
  package$serialization.intArray_uavegi$ = intArray_0;
  package$serialization.floatArray_uavegi$ = floatArray_0;
  package$serialization.obj_3axv6d$ = obj_0;
  package$serialization.Writer = Writer;
  package$serialization.obj_seohcg$ = obj_1;
  package$serialization.array_li07n1$ = array_0;
  package$serialization.intArray_9tgt1k$ = intArray_1;
  package$serialization.floatArray_pusxrp$ = floatArray_1;
  package$serialization.bool_rvr0ye$ = bool_0;
  package$serialization.string_c8rh0v$ = string_0;
  package$serialization.int_6g08gh$ = int_0;
  package$serialization.long_dcst2c$ = long_0;
  package$serialization.intArray_usrqa2$ = intArray_2;
  package$serialization.floatArray_bs8qql$ = floatArray_2;
  package$serialization.obj_vzin3y$ = obj_3;
  package$serialization.array_5r75ej$ = array_3;
  package$serialization.From = From;
  package$serialization.To = To;
  package$serialization.StringNode = StringNode;
  package$serialization.XmlNode = XmlNode;
  var package$signal = package$acornui.signal || (package$acornui.signal = {});
  package$signal.Signal = Signal;
  package$signal.SignalBase = SignalBase;
  package$signal.Signal0 = Signal0;
  package$signal.Signal1 = Signal1;
  package$signal.Signal2 = Signal2;
  package$signal.Signal3 = Signal3;
  package$signal.Stoppable = Stoppable;
  package$signal.Cancel = Cancel;
  package$signal.StoppableSignal = StoppableSignal;
  package$signal.StoppableSignalImpl = StoppableSignalImpl;
  package$string.StringParser = StringParser;
  Object.defineProperty(SubString, 'Companion', {get: SubString$Companion_getInstance});
  package$string.SubString = SubString;
  package$string.isDigit2_myv2d0$ = isDigit2;
  package$string.isLetter2_myv2d0$ = isLetter2;
  package$string.isLetterOrDigit2_myv2d0$ = isLetterOrDigit2;
  package$string.isBreaking_myv2d0$ = isBreaking;
  UrlParamsImpl_0.prototype.toQueryString = UrlParams.prototype.toQueryString;
  ObservableList.prototype.iterate_nhjr8t$ = ConcurrentList.prototype.iterate_nhjr8t$;
  MutableConcurrentList.prototype.iterate_nhjr8t$ = ConcurrentList.prototype.iterate_nhjr8t$;
  MutableObservableList.prototype.iterate_nhjr8t$ = ObservableList.prototype.iterate_nhjr8t$;
  ActiveList.prototype.iterate_nhjr8t$ = MutableObservableList.prototype.iterate_nhjr8t$;
  ConcurrentListImpl.prototype.iterate_nhjr8t$ = MutableConcurrentList.prototype.iterate_nhjr8t$;
  ObjectPool.prototype.freeAll_4ezy5m$ = Pool.prototype.freeAll_4ezy5m$;
  ListView.prototype.iterate_nhjr8t$ = ObservableList.prototype.iterate_nhjr8t$;
  ObservableConcatList.prototype.iterate_nhjr8t$ = ObservableList.prototype.iterate_nhjr8t$;
  LimitedPoolImpl.prototype.freeAll_4ezy5m$ = Pool.prototype.freeAll_4ezy5m$;
  Color_0.prototype.times_mx4ult$ = ColorRo.prototype.times_mx4ult$;
  Color_0.prototype.plus_xksl39$ = ColorRo.prototype.plus_xksl39$;
  Color_0.prototype.minus_xksl39$ = ColorRo.prototype.minus_xksl39$;
  Color_0.prototype.toCssString = ColorRo.prototype.toCssString;
  Color_0.prototype.toRgbString = ColorRo.prototype.toRgbString;
  Color_0.prototype.toRgbaString = ColorRo.prototype.toRgbaString;
  Color_0.prototype.toHsl_y02iys$ = ColorRo.prototype.toHsl_y02iys$;
  Color_0.prototype.toHsv_y02iyi$ = ColorRo.prototype.toHsv_y02iyi$;
  Color_0.prototype.closeTo_c3ty5c$$default = ColorRo.prototype.closeTo_c3ty5c$$default;
  Color_0.prototype.copy = ColorRo.prototype.copy;
  Color_0.prototype.closeTo_c3ty5c$ = ColorRo.prototype.closeTo_c3ty5c$;
  Hsv.prototype.copy = HsvRo.prototype.copy;
  Hsv.prototype.toRgb_1qghwi$$default = HsvRo.prototype.toRgb_1qghwi$$default;
  Hsv.prototype.toRgb_1qghwi$ = HsvRo.prototype.toRgb_1qghwi$;
  Object.defineProperty(ReadBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(Buffer.prototype, 'remaining'));
  Object.defineProperty(WriteBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(Buffer.prototype, 'remaining'));
  Object.defineProperty(ReadWriteBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadBuffer.prototype, 'remaining'));
  ReadWriteBuffer.prototype.put_kcizie$ = WriteBuffer.prototype.put_kcizie$;
  ReadWriteBuffer.prototype.put_p1ys8y$ = WriteBuffer.prototype.put_p1ys8y$;
  ReadWriteBuffer.prototype.put_1phuh2$ = WriteBuffer.prototype.put_1phuh2$;
  ReadWriteBuffer.prototype.fill_11rb$ = WriteBuffer.prototype.fill_11rb$;
  Object.defineProperty(BufferBase.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadWriteBuffer.prototype, 'remaining'));
  BufferBase.prototype.put_kcizie$ = ReadWriteBuffer.prototype.put_kcizie$;
  BufferBase.prototype.put_p1ys8y$ = ReadWriteBuffer.prototype.put_p1ys8y$;
  BufferBase.prototype.put_1phuh2$ = ReadWriteBuffer.prototype.put_1phuh2$;
  BufferBase.prototype.fill_11rb$ = ReadWriteBuffer.prototype.fill_11rb$;
  Object.defineProperty(NativeBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadWriteBuffer.prototype, 'remaining'));
  NativeBuffer.prototype.put_kcizie$ = ReadWriteBuffer.prototype.put_kcizie$;
  NativeBuffer.prototype.put_p1ys8y$ = ReadWriteBuffer.prototype.put_p1ys8y$;
  NativeBuffer.prototype.put_1phuh2$ = ReadWriteBuffer.prototype.put_1phuh2$;
  NativeBuffer.prototype.fill_11rb$ = ReadWriteBuffer.prototype.fill_11rb$;
  FilesManifestSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ManifestEntrySerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Log.prototype.debug_s8jyv4$ = ILogger.prototype.debug_s8jyv4$;
  Log.prototype.debug_nq59yw$ = ILogger.prototype.debug_nq59yw$;
  Log.prototype.info_s8jyv4$ = ILogger.prototype.info_s8jyv4$;
  Log.prototype.info_nq59yw$ = ILogger.prototype.info_nq59yw$;
  Log.prototype.warn_s8jyv4$ = ILogger.prototype.warn_s8jyv4$;
  Log.prototype.warn_nq59yw$ = ILogger.prototype.warn_nq59yw$;
  Log.prototype.error_s8jyv4$ = ILogger.prototype.error_s8jyv4$;
  Log.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$$default;
  Log.prototype.error_nq59yw$ = ILogger.prototype.error_nq59yw$;
  Log.prototype.error_a67anv$ = ILogger.prototype.error_a67anv$;
  PrintTarget.prototype.debug_s8jyv4$ = ILogger.prototype.debug_s8jyv4$;
  PrintTarget.prototype.debug_nq59yw$ = ILogger.prototype.debug_nq59yw$;
  PrintTarget.prototype.info_s8jyv4$ = ILogger.prototype.info_s8jyv4$;
  PrintTarget.prototype.info_nq59yw$ = ILogger.prototype.info_nq59yw$;
  PrintTarget.prototype.warn_s8jyv4$ = ILogger.prototype.warn_s8jyv4$;
  PrintTarget.prototype.warn_nq59yw$ = ILogger.prototype.warn_nq59yw$;
  PrintTarget.prototype.error_s8jyv4$ = ILogger.prototype.error_s8jyv4$;
  PrintTarget.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$$default;
  PrintTarget.prototype.error_nq59yw$ = ILogger.prototype.error_nq59yw$;
  PrintTarget.prototype.error_a67anv$ = ILogger.prototype.error_a67anv$;
  ArrayTarget.prototype.debug_s8jyv4$ = ILogger.prototype.debug_s8jyv4$;
  ArrayTarget.prototype.debug_nq59yw$ = ILogger.prototype.debug_nq59yw$;
  ArrayTarget.prototype.info_s8jyv4$ = ILogger.prototype.info_s8jyv4$;
  ArrayTarget.prototype.info_nq59yw$ = ILogger.prototype.info_nq59yw$;
  ArrayTarget.prototype.warn_s8jyv4$ = ILogger.prototype.warn_s8jyv4$;
  ArrayTarget.prototype.warn_nq59yw$ = ILogger.prototype.warn_nq59yw$;
  ArrayTarget.prototype.error_s8jyv4$ = ILogger.prototype.error_s8jyv4$;
  ArrayTarget.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$$default;
  ArrayTarget.prototype.error_nq59yw$ = ILogger.prototype.error_nq59yw$;
  ArrayTarget.prototype.error_a67anv$ = ILogger.prototype.error_a67anv$;
  Box.prototype.intersects_owlv2i$ = BoxRo.prototype.intersects_owlv2i$;
  Corners.prototype.isEmpty = CornersRo.prototype.isEmpty;
  Corners.prototype.copy = CornersRo.prototype.copy;
  CornersSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Constant.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Pow.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  PowIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  PowOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Exp.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Elastic.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Swing.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SwingOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SwingIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Stepped.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Linear.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Fade.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Sine.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SineIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SineOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Circle.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  CircleIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  CircleOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Reverse.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  ToFro.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  YoYo.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Repeat.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  BasicBounce.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  BounceInPlace.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Clamp.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Bezier.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  IntRectangle.prototype.copy = IntRectangleRo.prototype.copy;
  IntRectangleSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Matrix3.prototype.copy = Matrix3Ro.prototype.copy;
  Matrix4.prototype.copy = Matrix4Ro.prototype.copy;
  Matrix4.prototype.getRotation_tt8t29$ = Matrix4Ro.prototype.getRotation_tt8t29$;
  MinMax.prototype.isEmpty = MinMaxRo.prototype.isEmpty;
  MinMax.prototype.isNotEmpty = MinMaxRo.prototype.isNotEmpty;
  MinMax.prototype.intersects_5yfmeh$ = MinMaxRo.prototype.intersects_5yfmeh$;
  MinMax.prototype.contains_dleff0$ = MinMaxRo.prototype.contains_dleff0$;
  MinMax.prototype.clampPoint_9wm29l$ = MinMaxRo.prototype.clampPoint_9wm29l$;
  Pad.prototype.copy_789ags$$default = PadRo.prototype.copy_789ags$$default;
  Pad.prototype.reduceWidth_81sz4$ = PadRo.prototype.reduceWidth_81sz4$;
  Pad.prototype.reduceHeight_81sz4$ = PadRo.prototype.reduceHeight_81sz4$;
  Pad.prototype.reduceWidth2_mx4ult$ = PadRo.prototype.reduceWidth2_mx4ult$;
  Pad.prototype.reduceHeight2_mx4ult$ = PadRo.prototype.reduceHeight2_mx4ult$;
  Pad.prototype.expandWidth_81sz4$ = PadRo.prototype.expandWidth_81sz4$;
  Pad.prototype.expandHeight_81sz4$ = PadRo.prototype.expandHeight_81sz4$;
  Pad.prototype.expandWidth2_mx4ult$ = PadRo.prototype.expandWidth2_mx4ult$;
  Pad.prototype.expandHeight2_mx4ult$ = PadRo.prototype.expandHeight2_mx4ult$;
  Pad.prototype.toCssString = PadRo.prototype.toCssString;
  Pad.prototype.copy_789ags$ = PadRo.prototype.copy_789ags$;
  PadSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Plane.prototype.distance_1fv2cb$ = PlaneRo.prototype.distance_1fv2cb$;
  Plane.prototype.testPoint_1fv2cb$ = PlaneRo.prototype.testPoint_1fv2cb$;
  Plane.prototype.testPoint_y2kzbl$ = PlaneRo.prototype.testPoint_y2kzbl$;
  Plane.prototype.isFrontFacing_1fv2cb$ = PlaneRo.prototype.isFrontFacing_1fv2cb$;
  Plane.prototype.intersects_y8xsj$$default = PlaneRo.prototype.intersects_y8xsj$$default;
  Plane.prototype.prj_9wm29k$ = PlaneRo.prototype.prj_9wm29k$;
  Plane.prototype.intersects_y8xsj$ = PlaneRo.prototype.intersects_y8xsj$;
  Quaternion.prototype.transform_9wm29k$ = QuaternionRo.prototype.transform_9wm29k$;
  Quaternion.prototype.closeTo_imyaox$$default = QuaternionRo.prototype.closeTo_imyaox$$default;
  Quaternion.prototype.closeTo_imyaox$ = QuaternionRo.prototype.closeTo_imyaox$;
  Range2.prototype.contains_mef7kx$ = Range2Ro.prototype.contains_mef7kx$;
  Range2.prototype.clamp_mef7kx$ = Range2Ro.prototype.clamp_mef7kx$;
  Range2.prototype.clamp2_mef7kx$ = Range2Ro.prototype.clamp2_mef7kx$;
  Ray.prototype.copy = RayRo.prototype.copy;
  Ray.prototype.intersects_owlv2i$ = RayRo.prototype.intersects_owlv2i$;
  Ray.prototype.intersects_6bb61c$ = RayRo.prototype.intersects_6bb61c$;
  Rectangle.prototype.intersects_y8xsj$ = RectangleRo.prototype.intersects_y8xsj$;
  RectangleSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Vector2.prototype.copy = Vector2Ro.prototype.copy;
  Vector2Serializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Vector3.prototype.copy = Vector3Ro.prototype.copy;
  Vector3.prototype.isUnit_mx4ult$ = Vector3Ro.prototype.isUnit_mx4ult$;
  Vector3.prototype.closeTo_7aight$ = Vector3Ro.prototype.closeTo_7aight$;
  Vector3.prototype.closeTo_7b5o5w$ = Vector3Ro.prototype.closeTo_7b5o5w$;
  Vector3Serializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  JsonSerializer.prototype.read_awjrhg$ = Serializer.prototype.read_awjrhg$;
  JsonSerializer.prototype.write_hzsrf4$ = Serializer.prototype.write_hzsrf4$;
  JsonNode.prototype.get_61zpoe$ = Reader.prototype.get_61zpoe$;
  JsonNode.prototype.get_za3lpa$ = Reader.prototype.get_za3lpa$;
  StringNode.prototype.get_61zpoe$ = Reader.prototype.get_61zpoe$;
  StringNode.prototype.get_za3lpa$ = Reader.prototype.get_za3lpa$;
  NullNode.prototype.get_61zpoe$ = Reader.prototype.get_61zpoe$;
  NullNode.prototype.get_za3lpa$ = Reader.prototype.get_za3lpa$;
  XmlSerializer.prototype.read_awjrhg$ = Serializer.prototype.read_awjrhg$;
  XmlSerializer.prototype.write_hzsrf4$ = Serializer.prototype.write_hzsrf4$;
  XmlNode.prototype.get_61zpoe$ = Reader.prototype.get_61zpoe$;
  XmlNode.prototype.get_za3lpa$ = Reader.prototype.get_za3lpa$;
  SignalBase.prototype.add_trkh7z$ = Signal.prototype.add_trkh7z$;
  SignalBase.prototype.addOnce_trkh7z$ = Signal.prototype.addOnce_trkh7z$;
  StoppableSignal.prototype.add_trkh7z$ = Signal.prototype.add_trkh7z$;
  StoppableSignal.prototype.addOnce_trkh7z$ = Signal.prototype.addOnce_trkh7z$;
  encodeUriComponent2 = properties.Delegates.notNull_30y1fr$();
  decodeUriComponent2 = properties.Delegates.notNull_30y1fr$();
  cyclicListPool = ClearableObjectPool_init(cyclicListPool$lambda);
  arrayListPool = new arrayListPool$ObjectLiteral(8, arrayListPool$arrayListPool$ObjectLiteral_init$lambda);
  mapPool = new mapPool$ObjectLiteral(8, mapPool$mapPool$ObjectLiteral_init$lambda);
  LONG_MAX_VALUE = new Kotlin.Long(-1, 2097151);
  INT_MAX_VALUE = 2147483647;
  INT_MIN_VALUE = -2147483648;
  LONG_MIN_VALUE = new Kotlin.Long(0, -2097152);
  lineSeparator = '\n';
  PI = 3.1415927;
  PI2 = PI * 2.0;
  E = 2.7182817;
  TO_DEG = 180.0 / PI;
  TO_RAD = PI / 180.0;
  breakingChars = Kotlin.charArrayOf(45, 32, 10, 9);
  return _;
});

//# sourceMappingURL=AcornUtils.js.map
