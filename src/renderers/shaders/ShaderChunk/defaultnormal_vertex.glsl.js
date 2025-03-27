export default /* glsl */`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif
#if defined( USE_TANGENT_FROM_NORMAL ) || defined( USE_NORMALMAP_TRIPLANAR )

  mat3 tangentMatrix = mat3(1.0);

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

  #endif
  #if defined( USE_TANGENT_FROM_NORMAL ) || defined( USE_NORMALMAP_TRIPLANAR )

    tangentMatrix = bm * tangentMatrix;

  #endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

  #endif
  #if defined( USE_TANGENT_FROM_NORMAL ) || defined( USE_NORMALMAP_TRIPLANAR )

    tangentMatrix = im * tangentMatrix;

  #endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
#if defined( USE_TANGENT_FROM_NORMAL ) || defined( USE_NORMALMAP_TRIPLANAR )

  tangentMatrix = mat3( modelViewMatrix ) * tangentMatrix;

#endif
`;
